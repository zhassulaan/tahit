<!-- @format -->

<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog-row">
        <div class="catalog_filter" :class="{ isActive: filterMob }">
          <!-- <filter-catalog /> -->
          <filter-catalog v-on:close="close($event)" @filterChange="changed" />
        </div>
        <div class="catalog-content">
          <div class="catalog-content_top">
            <div class="catalog-content_title">
              {{ lang === "Ru" ? `Каталог` : `Каталог` }}
            </div>
            <div class="catalog-content_sort">
              <div class="catalog-content_sort-title">
                {{ lang === "Ru" ? "Сортировка" : "Сұрыптау" }}:
              </div>
              <div class="catalog-content_sort-items">
                <div
                  @click="handleSort('')"
                  style="cursor: pointer"
                  :class="
                    !filters.order_by
                      ? 'catalog-content_sort-item  isActive'
                      : ''
                  ">
                  {{ lang === "Ru" ? "по умолчанию" : "Әдепкі" }}
                </div>
                <div
                  @click="handleSort('-popularity')"
                  style="cursor: pointer"
                  :class="
                    filters.order_by
                      ? 'catalog-content_sort-item  isActive'
                      : ''
                  ">
                  {{ lang === "Ru" ? "по популярности" : "Танымалдығы бойынша" }}
                </div>
              </div>
              <div class="catalog-content_top-filter" @click="filterMob = true">
                {{ lang === "Ru" ? `Фильтр` : `Фильтрлер` }}
              </div>
            </div>
          </div>
          <div class="catalog-content_products" v-if="products">
            <ProductCard
              v-for="(product, index) in products"
              :key="index"
              :item="product" />
          </div>
          <div class="catalog-content_products" v-else>
            <div class="catalog-content__loader" v-for="i in 10" :key="i"></div>
          </div>
          <paginate
            v-if="paginationPages > 1"
            v-model="page"
            :page-count="paginationPages"
            :page-range="2"
            :margin-pages="1"
            :page-class="'page-item'"
            :active-class="'myActiveBtn'"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            class="qwe">
          </paginate>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
import Paginate from "vuejs-paginate";

export default {
  name: "Catalog",
  components: {
    Paginate,
    FilterCatalog: () => import("@/components/catalog/Filter.vue"),
    ProductCard: () => import("@/components/ProductCard.vue"),
  },
  data() {
    return {
      filterMob: false,
      lang: this.$cookie.get("lang"),
      paginationPages: 1,
      page: 1,
      products: [],
      filters: {
        styles: "",
        themes: "",
        colors: "",
        order_by: "",
      },
    };
  },
  methods: {
    // close() {
    //   this.filterMob = false
    // }
    close() {
      this.filterMob = false;
    },
    changed(e) {
      console.log(e, "filters");
      this.filters.styles = e.styles;
      this.filters.themes = e.themes;
      this.filters.colors = e.colors;
      api.getPrints(this.filters).then((res) => {
        this.products = res;
        console.log(res, "prints");
        this.paginationPages = Math.round(this.products.length / 11);
      });
    },
    handleSort(e) {
      this.filters.order_by = e;
      api.getPrints(this.filters).then((res) => {
        this.products = res;
        console.log(res, "prints");
        this.paginationPages = Math.round(this.products.length / 11);
      });
    },
  },
  created() {
    api.getPrints("").then((res) => {
      this.products = res;
      this.paginationPages = Math.round(this.products.length / 11);
    });
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

.catalog-content_sort-title {
  margin-right: rem(15);
}

@media screen and (max-width: 640px) {
  .catalog-content_sort-title {
  }
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.catalog {
  padding: rem(50) 0 rem(87);
  &-row {
    display: flex;
    gap: rem(60);
    justify-content: space-between;
  }
  &_filter {
    border-right: rem(1) solid #dbe0e9;
    padding: 0 rem(26);
  }
  &-content {
    width: 100%;
    text-align: left;
    padding-bottom: 30px;
    &_title {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: 2.625rem;
      line-height: 3.5rem;
      color: #182040;
      // font-family: "Playfair Display";
      // font-style: normal;
      // font-weight: 400;
      // line-height: rem(56);
      // color: #182040;
      // font-size: rem(42);
    }
    &_sort {
      font-family: "Lato Bold";
      font-style: normal;
      font-size: rem(16);
      line-height: 130%;
      padding: rem(18) 0;
      display: flex;
      align-items: center;
      font-weight: 600;
      div + div {
      }
      font-size: rem(16);
      &-items {
        display: flex;
        align-items: center;
        div + div {
          margin-left: rem(20);
        }
        .isActive {
          text-decoration-line: underline;
          color: #f7bd7f;
          text-decoration: underline;
        }
      }
    }
    &_products {
      display: flex;
      flex-wrap: wrap;
      gap: rem(50);
    }
    &_top-filter {
      display: none;
    }
  }
  .pagination {
    font-size: rem(18);
    display: flex;
    gap: rem(28);
    justify-content: center;
    align-items: center;
    margin-top: rem(60);
    &_items {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &_item {
      width: rem(28);
      height: rem(28);
      display: flex;
      justify-content: center;
      align-items: center;
      &.isActive {
        background: #f7bd7f;
      }
    }
    &_arr {
      svg {
        width: rem(7);
        height: rem(14);
      }
    }
  }
}

@media (max-width: 767px) {
  .catalog {
    padding: 10px;
  }
  .catalog {
    &-content {
      &_products {
        gap: 20px !important;
      }
    }
  }
  .catalog_filter {
    display: none;
  }
  .catalog_filter.isActive {
    display: block;
    position: fixed;
    left: 0;
    right: 0;
    overflow-y: auto;
    z-index: 10;
    height: 100%;
    background: #fff;
  }
  .catalog-content_top-filter {
    display: block;
    background: #eee;
    padding: 5px 20px;
    margin-left: rem(15);
  }
  .catalog-content_top {
    gap: 10px;
    justify-content: space-between;
    align-items: center;
  }
  .catalog-content_products {
  }
}

.catalog-content__loader {
  width: rem(410);
  height: rem(350);
  background-color: #f3f3f3;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #f3f3f3;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
  @media (max-width: 500px) {
    width: 100%;
  }
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

@media (max-width: 600px) {
  .product {
    width: 100%;
  }
  .catalog-content_products {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
  }
}
@media (max-width: 500px) {
  .catalog-content_products {
    justify-content: center;
  }
}
</style>
