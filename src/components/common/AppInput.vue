<template>
  <div class="input">
    <h6 class="input__title">
      {{ title }}
    </h6>
    <div class="input__inner">
      <input
        :id="id"
        :disabled="disabled"
        v-model="input"
        :type="type"
        min="0"
        :placeholder="placeholder"
        :class="{ unit: isUnit }"
        :autofocus="focus"
      />
      <span v-if="isUnit">{{ unit }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppInput",
  data() {
    return {
      input: this.placeholder,
    };
  },
  props: {
    id: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    focus: {
      type: Boolean,
      default: () => false,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
    },
    isUnit: {
      type: Boolean,
      default: () => false,
    },
    unit: {
      type: String,
      required: false,
    },
  },
  watch: {
    placeholder: {
      handler() {
        this.input = this.placeholder;
      },
    },
    input: {
      handler() {
        this.getValue();
      },
    },
  },
  methods: {
    getValue() {
      this.$emit("input", this.input);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.input {
  width: 100%;
  &__title {
    font-weight: 700;
    font-size: rem(16);
    line-height: 130%;
    color: #464c52;
    text-align: left;
    margin-bottom: rem(9);
  }
  &__inner {
    display: flex;
    align-items: center;
    span {
      margin-left: rem(8);
      font-weight: 700;
      font-size: rem(16);
      line-height: 130%;
      color: #464c52;
    }
  }
  input {
    border: rem(1) solid #dbe0e9;
    width: 100%;
    padding: rem(15) rem(13);
    font-weight: 500;
    font-size: rem(16);
    line-height: 130%;
    background: none;

    &.unit {
      padding: rem(12) rem(13);
      @media screen and (max-width: 640px) {
        padding: rem(16) rem(17);
      }
    }
  }
}
</style>
