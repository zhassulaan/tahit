<!-- @format -->

<template>
  <div class="total-payable">
    <div class="total-payable__top">
      <div class="total-payable__title">
        {{
          $cookie.get("lang") === "Ru"
            ? `Итого к оплате:`
            : `Төлемнің жалпы сомасы:`
        }}
      </div>
      <div class="total-payable__price">
        {{ cart.total_price }} {{ cart.currency }}
      </div>
    </div>
    <p class="total-payable__text">
      {{
        $cookie.get("lang") === "Ru"
          ? `Обратите внимание: Данная цена указана без учета доставки.`
          : `Назар аударыңыз: бұл бағаға жеткізу кірмейді.`
      }}
    </p>
    <button @click="$emit('tab')" class="total-payable__btn">
      {{
        $cookie.get("lang") === "Ru"
          ? `Расчет стоимости доставки`
          : `Жеткізу құнын есептеу`
      }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["cart"],
  name: "TotalPayable",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.total-payable {
  background-color: #f0f2f5;
  padding: rem(40) rem(30);
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: rem(28);
  }

  &__title {
    font-weight: 700;
    font-size: rem(22);
    line-height: 130%;
    color: #464c52;
  }

  &__price {
    font-weight: 400;
    font-size: rem(22);
    line-height: rem(26);
    color: #182040;
  }

  &__text {
    font-weight: 400;
    font-size: rem(16);
    line-height: 130%;
    color: #464c52;
    margin-bottom: rem(28);
  }

  &__btn {
    background-color: #f7bd7f;
    padding: rem(15);
    font-weight: 600;
    font-size: rem(16);
    line-height: rem(19);
    color: #ffffff;
    width: 100%;
  }
}
</style>
