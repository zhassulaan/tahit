<template>
  <div class="filter">
    <div class="filter-block">
      <div class="filter-title">
        {{ $cookie.get("lang") === "Ru" ? `Фильтры` : `Фильтрлер` }}
      </div>
      <div class="filter-close" @click="close()">X</div>
    </div>
    <div class="filter-block" v-for="(filter, i) in filters" :key="i">
      <one-of-filter
        :title="filter.title"
        :filter="filter.value"
        @filterChange="changed"
      />
    </div>
  </div>
</template>

<script>
import api from "../../api/api";
import OneOfFilter from "./OneOfFilter.vue";
export default {
  name: "FilterCatalog",
  components: {
    OneOfFilter,
  },
  data() {
    return {
      styleOpen: false,
      filters: [],
      choiceFilters: { styles: "", themes: "", colors: "" },
    };
  },
  methods: {
    close() {
      this.$emit("close", "close");
    },
    changed(e) {
      if (e.title === "Стили" || e.title === "Styles") {
        this.choiceFilters.styles = e.slug;
      } else if (e.title === "Тематика" || e.title === "Templates") {
        this.choiceFilters.themes = e.slug;
      } else {
        this.choiceFilters.colors = e.slug;
      }
      console.log(this.choiceFilters, "filters");
      this.$emit("filterChange", this.choiceFilters);
    },
  },
  created() {
    api.getStyles().then((res) => {
      console.log(res, "styles");
      let temp = res;
      temp.sort((a, b) => a.id - b.id);
      this.filters.push({
        title: this.$cookie.get("lang") === "Ru" ? "Стили" : "Styles",
        value: temp,
      });
      api.getColors().then((res) => {
        let temp = res;
        temp.sort((a, b) => a.id - b.id);
        this.filters.push({
          title: this.$cookie.get("lang") === "Ru" ? "Цвета" : "Colors",
          value: temp,
        });
        api.getThemes().then((res) => {
          let temp = res;
          temp.sort((a, b) => a.id - b.id);
          this.filters.push({
            title: this.$cookie.get("lang") === "Ru" ? "Тематика" : "Templates",
            value: temp,
          });
        });
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
    font-weight: 500;
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
      font-family: "Lato Bold";
      font-weight: 600;
      font-size: rem(22);
      margin: rem(20) 0;
      padding: rem(5) 0;
      padding-left: rem(15);
      color: #656c72;
      padding-right: rem(50);
      max-width: max-content;
      position: relative;
      cursor: pointer;
      &.isActive {
        color: #ffffff;
        background: #f7bd7f;
        &:after {
          content: "x";
          position: absolute;
          right: rem(16);
          width: rem(12);
          height: rem(12);
          margin: auto 0;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .filter-close {
    display: block;
  }
}
</style>
