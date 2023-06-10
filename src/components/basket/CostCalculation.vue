<template>
  <form class="calculation">
    <h6 class="calculation__title">
      {{
        $cookie.get("lang") === "Ru"
          ? `Расчет стоимости доставки`
          : `Shipping cost calculation`
      }}
    </h6>
    <div class="calculation__select calculation__item">
      <app-select
        :title="lang === 'Ru' ? 'Город' : 'City'"
        :label="inputCity !== '' ? inputCity.name : ''"
        :items="country.cities"
        @input="changeInputCity"
      />
    </div>
    <div class="calculation__address calculation__item">
      <app-input :title="lang === 'Ru' ? 'Адрес' : 'Address'" v-model="input" />
    </div>

    <div class="calculation__total">
      <div class="calculation__total-title">
        {{
          lang === "Ru"
            ? `Итого к оплате с доставкой:`
            : `Total payable with delivery:`
        }}
      </div>
      <div class="calculation__total-price">€ 37.05</div>
    </div>
    <button class="calculation__btn">
      {{ lang === "Ru" ? `Перейти к оплате` : `Go to the payment` }}
    </button>
    <router-link to="/payment" class="calculation__info__btn">
      {{ lang === "Ru" ? "Информация об оплате" : "Payment Information" }}
    </router-link>
  </form>
</template>

<script>
export default {
  name: "CostCalculation",
  components: {
    AppSelect: () => import("@/components/common/AppSelect.vue"),
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  props: ["country"],
  data() {
    return {
      unit: "",
      lang: this.$cookie.get("lang"),
      selectCountry: null,
      inputValue: "",
      inputCity: "",
    };
  },
  methods: {
    changeInputCity(event) {
      this.inputCity = event;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.count__input {
  input {
    max-width: rem(87);
  }
}
.calculation {
  background-color: #f0f2f5;
  padding: rem(40) rem(35);
  width: rem(566);
  text-align: left;
  &__title {
    font-weight: 700;
    font-size: rem(22);
    line-height: 130%;
    color: #464c52;
  }
  &__item {
    margin-top: rem(28);
  }
  &__units {
    margin-bottom: rem(28);
    border-bottom: rem(1) solid #c7cfdf;
    padding-bottom: rem(28);
  }

  &-unit {
    width: rem(125);
    margin-left: rem(23);
    &:first-child {
      margin-left: 0;
    }

    &__top {
      display: flex;
    }

    &__bottom {
      margin-top: rem(28);
      display: flex;
    }
  }

  &__total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: rem(28) 0;

    &-title {
      font-weight: 700;
      font-size: rem(22);
      line-height: 130%;
      color: #464c52;
    }

    &-price {
      font-weight: 400;
      font-size: rem(22);
      line-height: rem(26);
      color: #182040;
    }
  }

  &__btn {
    background-color: #f7bd7f;
    width: 100%;
    padding: rem(15);
    font-weight: 600;
    font-size: rem(16);
    line-height: rem(19);
    color: #ffffff;
  }
}

.calculation__info__btn {
  width: fit-content;
  text-align: center;
  margin: 10px auto;
  color: #f7bd7f;
  font-size: rem(16);
  font-weight: 600;
  display: block;
}

@media (max-width: 767px) {
  .calculation {
    width: 100%;
  }
}
</style>
