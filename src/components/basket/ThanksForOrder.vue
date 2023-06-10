<template>
  <div class="thanks-order">
    <div class="thanks-order__content">
      <img
        class="thanks-order__img"
        src="@/assets/basket/delivery-box.svg"
        alt=""
      />
      <h6 class="thanks-order__title">
        {{
          $cookie.get("lang") === "Ru"
            ? `Спасибо за заказ`
            : `Thanks for your order`
        }}
      </h6>
      <p class="thanks-order__text">
        {{
          $cookie.get("lang") === "Ru"
            ? `Ваш заказ успешно оформлен.`
            : `Your order has been successfully placed.`
        }}
      </p>
      <p class="thanks-order__text">
        {{
          $cookie.get("lang") === "Ru"
            ? `Информация о заказе будет доступна в личном кабинете.`
            : `Information about the order will be available in your account.`
        }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThanksForOrder",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.thanks-order {
  background-color: #f0f2f5;
  padding: rem(62) rem(125);
  text-align: center;
  margin: 0 auto;
  &__content {
    max-width: rem(313);
  }

  &__img {
    width: rem(84);
    height: rem(84);
    margin: 0 auto rem(30);
  }

  &__title {
    font-family: "Playfair Display";
    font-weight: 400;
    font-size: rem(28);
    line-height: rem(37);
    color: #182040;
    margin-bottom: rem(10);
  }

  &__text {
    font-family: "Lato Bold";
    font-weight: 600;
    font-size: rem(16);
    line-height: 130%;
    color: #464c52;
  }
}
</style>
