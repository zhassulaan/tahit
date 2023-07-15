<!-- @format -->

<template>
  <div class="basket">
    <div class="basket__container">
      <div class="basket__inner">
        <div class="basket-list" v-if="!success">
          <div class="basket-list__inner">
            <basket-card v-for="item in items" :key="item.id" :item="item" />
          </div>
          <div @click="$router.push('/catalog')" class="basket-list__btn">
            {{ $cookie.get('lang') === "Ru" ? 'Продолжить покупки' : 'Сатып алуды жалғастыру' }}
          </div>
        </div>
        <total-payable
          @tab="tab = 2"
          v-if="tab === 1 && !success"
          :cart="cart" />
        <cost-calculation
          :country="country"
          v-if="tab === 2 && !success"
          @open="handleModal"
          @submit="handleSuccess" />
        <thanks-for-order v-if="success" />
        <edit-address-modal
          v-if="modal"
          :id="id"
          :type="'Добавить адрес'"
          @close="handleModal" />
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  name: "Basket",
  components: {
    TotalPayable: () => import("@/components/basket/TotalPayable.vue"),
    CostCalculation: () => import("@/components/basket/CostCalculation.vue"),
    ThanksForOrder: () => import("@/components/basket/ThanksForOrder.vue"),
    BasketCard: () => import("@/components/basket/BasketCard.vue"),
  },
  data() {
    return {
      modal: false,
      success: false,
      country: "",
      items: "",
      id: "",
      tab: 1,
      cart: "",
    };
  },
  created() {
    api.getCurrentCart().then((res) => {
      this.cart = res;
      this.items = res.cartitems.sort((a, b) => a.id - b.id);
      this.id = res.id;
      this.country = res.user_country;
    });
  },
  methods: {
    handleModal() {
      this.modal = !this.modal;
    },
    handleSuccess() {
      this.success = !this.success;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.basket {
  padding: rem(34) 0 rem(85);
  min-height: 80vh;
  &__container {
    margin: 0 auto;
    width: 100%;
    padding: 0 rem(40);
  }
  &__inner {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
}
@media (max-width: 767px) {
  .basket__inner {
    flex-wrap: wrap;
  }
}

.basket-list {
  width: 100%;
  margin-right: rem(55);
  max-width: rem(1220);
  &__btn {
    font-weight: 600;
    font-size: rem(16);
    line-height: rem(19);
    color: #f7bd7f;
    padding: rem(15);
    width: rem(263);
    margin-left: auto;
    border: rem(2) solid #f7bd7f;
    margin-top: rem(30);
    cursor: pointer;
  }
}
@media (max-width: 767px) {
  .basket-list {
    margin-right: 0;
  }
  .basket-list__btn {
    margin-left: 0;
    margin-bottom: 32px;
  }
}
</style>
