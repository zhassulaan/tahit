<template>
  <div class="favorites">
    <div class="favorites__container">
      <div class="catalog-content_products">
        <ProductCard
          @refresh="refresh"
          v-for="item in products"
          :key="item.id"
          :item="item.print[0]"
          :favoriteId="item.id"
        />
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../api/api";
export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    refresh() {
      api.getFavorites().then((res) => (this.products = res.favorite_items));
    },
  },
  created() {
    api.getFavorites().then((res) => (this.products = res.favorite_items));
  },
  components: {
    ProductCard: () => import("@/components/ProductCard.vue"),
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.favorites {
  margin: 0 auto;
  .product {
    width: rem(412);
    @include media("tablet-landscape-up") {
      width: 100%;
      max-width: 240px;
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      &_info {
        flex-direction: column;
      }
    }
    a {
      @include media("tablet-landscape-up") {
        // height: 300px;
        // max-width: 300px;
        // display: block;
      }
    }
  }
  .catalog-content_products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: rem(60);
    @include media("tablet-landscape-up") {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      flex-wrap: wrap;
      gap: rem(35);
      margin: 0 auto;
      // max-width: min-content;
    }
  }
  @media (max-width: 500px) {
    .catalog-content_products {
      justify-content: center;
      grid-template-columns: 1fr 1fr;
      // position: relative;
      // right: 14px;
    }
  }
  .product_image img {
    @include media("tablet-landscape-up") {
      width: 100% !important;
    }
  }
  .product_image {
    @include media("tablet-landscape-up") {
      height: unset !important;
    }
  }
  &__container {
    padding: rem(40);
    @include media("tablet-landscape-up") {
      padding: 10px;
    }
  }
}
</style>
