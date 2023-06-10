<template>
  <div class="count">
    <p class="count__label">
      {{ $cookie.get("lang") === "Ru" ? `Количество` : `Quantity` }}
    </p>
    <div class="count__input">
      <input :disabled="disabled" type="number" v-model="count" />
      <div class="count__arrows" v-if="!disabled">
        <div
          style="cursor: pointer"
          class="count__inc"
          @click="count < 100 ? count++ : count"
        >
          <img src="@/assets/img/icons/arrow-top.svg" alt="" />
        </div>
        <div
          style="cursor: pointer"
          class="count__dec"
          @click="count > 0 ? count-- : count"
        >
          <img src="@/assets/img/icons/arrow-bottom.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountInput",
  props: {
    disabled: {
      type: Boolean,
      required: false,
    },
    itemCount: {
      type: Number,
      required: false,
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  watch: {
    count: {
      handler() {
        if (this.count >= 100) {
          this.count = 100;
        } else if (this.count < 0) {
          this.count = 0;
        }
        this.getValue();
      },
    },
  },
  methods: {
    getValue() {
      this.$emit("input", this.count);
    },
  },
  mounted() {
    if (this.itemCount > 0) {
      this.count = this.itemCount;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.count {
  display: block !important;
  max-width: max-content;
  &__input {
    position: relative;
    margin-top: rem(10);
    input {
      max-width: rem(120);
      border: rem(1) solid #dbe0e9;
      padding: rem(13);
      width: 100%;
      background: none;
      @media screen and (max-width: 640px) {
        padding: rem(16) rem(17);
      }
    }
  }
  &__label {
    margin-right: rem(11);
    font-weight: 700;
    font-size: rem(16);
    line-height: 130%;
  }

  &__arrows {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: rem(10);
    display: flex;
    flex-direction: column;
    button {
      img {
        width: rem(15);
        height: rem(15);
      }
    }
  }
}
</style>
