<template>
  <div v-if="item" class="product">
    <div @click="handleDelete" v-if="isFavorite" class="product__closeIcon">
      <CloseIcon></CloseIcon>
    </div>
    <router-link :to="{ name: 'Product', params: { id: item.id } }">
      <div class="product_image">
        <img :src="item.images[0]" alt="" />
      </div>
      <div class="product_info">
        <div class="product_info-title">{{ item.name }}</div>
      </div>
    </router-link>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  name: "ProductCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
    favoriteId: {
      type: Number,
      required: false,
    },
  },
  components: {
    CloseIcon: () => import("@/components/icons/CloseIcon.vue"),
  },
  data() {
    return {
      isFavorite: false,
    };
  },
  mounted() {
    console.log(this.item);
    if (this.$router.currentRoute.path === "/office") {
      this.isFavorite = true;
    } else {
      this.isFavorite = false;
    }
  },
  methods: {
    handleDelete() {
      if (confirm("Точно хотите удалить из избранных?")) {
        api.deleteFavorite(this.favoriteId).then(() => {
          this.$emit("refresh");
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.product {
  position: relative;
  width: rem(412);
  &__closeIcon {
    cursor: pointer;
    position: absolute;
    right: -2px;
    top: -25px;
    svg {
      width: 15px !important;
      height: 15px !important;
    }
  }
  // width: calc(rem(412) - rem(50));
  &_image {
    height: 100%;
    max-height: rem(350);

    // @media (max-width: 500px) {
    //   max-height: rem(450);
    // }

    // height: rem(412);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &_info {
    display: flex;
    gap: rem(20);
    justify-content: space-between;
    margin-top: rem(20);
    color: #464c52;
    &-title {
      font-size: rem(18);
      font-weight: 700;
      font-family: "Lato Bold";
      font-style: normal;
      line-height: rem(24);
      color: #464c52;
    }
    &-price {
      font-size: rem(22);
      font-family: "Lato Regular";
      font-style: normal;
      font-weight: 400;
      font-size: rem(22);
      line-height: rem(26);
      color: #182040;
    }
  }
}
@media (max-width: 767px) {
  .product {
    width: 100%;
  }
}

@media screen and (max-width: 500px) {
  
}
</style>
