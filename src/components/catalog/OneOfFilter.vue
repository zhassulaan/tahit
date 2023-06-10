<template>
  <div>
    <div class="filter-title" @click="styleOpen = !styleOpen">
      {{ title }}
      <arr-filter-icon
        class="filter-icon"
        :style="
          styleOpen ? 'transform: rotate(0deg)' : 'transform: rotate(180deg)'
        "
      />
    </div>
    <div class="filter-block_values" v-if="styleOpen">
      <input
        type="radio"
        :name="title"
        :id="title"
        style="display: none"
        checked
      />
      <label
        @click="filterChange({ title: title, slug: '' })"
        :for="title"
        class="filter-block_value"
      >
        {{ $cookie.get("lang") === "Ru" ? `Все` : `All` }}
      </label>
      <div v-for="value in filter" :key="value.slug">
        <input
          type="radio"
          :name="title"
          :id="value.slug"
          style="display: none"
        />
        <label
          @click="filterChange({ title: title, slug: value.slug })"
          :for="value.slug"
          class="filter-block_value"
        >
          {{ value.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OneOfFilter",
  props: ["title", "filter"],
  data() {
    return {
      styleOpen: false,
      item: "",
    };
  },
  components: {
    ArrFilterIcon: () => import("@/components/icons/catalog/ArrFilterIcon.vue"),
  },
  methods: {
    filterChange(e) {
      this.$emit("filterChange", e);
    },
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

.filter-block_values input[type="radio"]:checked + label {
  color: #ffffff !important;
  background: #f7bd7f;
  transition: all;
  transition-duration: 150ms;
  transition-timing-function: ease-in;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.filter {
  text-align: left;
  width: rem(400);
  &-title {
    font-family: "Lato Bold";
    color: #464c52;
    font-weight: 700;
    font-size: rem(18);
    line-height: 130%;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: rem(15);
    svg {
      width: rem(16);
      height: rem(12);
    }
  }
  &-close {
    display: none;
    position: absolute;
    font-size: 24px;
    right: 20px;
    top: 20px;
  }
  &-block {
    padding: rem(28) 0;
    border-bottom: solid rem(1) #dbe0e9;
    &_values {
      margin-top: rem(20);
      margin-left: rem(28);
    }
    &_value {
      display: block;
      font-family: "Lato Bold";
      font-weight: 500;
      font-size: rem(18);
      margin: rem(20) 0;
      padding: rem(5) 0;
      padding-left: rem(15);
      color: #656c72;
      padding-right: rem(50);
      max-width: max-content;
      position: relative;
      cursor: pointer;
    }
  }
}
@media (max-width: 767px) {
  .filter-close {
    display: block;
  }
}
.filter-icon {
  transition: all;
  transition-duration: 200ms;
}
</style>
