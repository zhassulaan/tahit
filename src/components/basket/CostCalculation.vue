<!-- @format -->

<template>
  <form class="calculation">
    <h6 class="calculation__title">
      {{
        $cookie.get("lang") === "Ru"
          ? `Расчет стоимости доставки`
          : `Жеткізу құнын есептеу`
      }}
    </h6>
    <!-- <div class="calculation__select calculation__item">
      <app-select
        :title="lang === 'Ru' ? 'Страна' : 'Country'"
        :label="countryInput !== '' ? countryInput?.name : (lang === 'Ru' ? 'Выберите страну' : 'Select country')"
        :items="countries"
        @input="selectCountry"
      />
    </div> -->
    <!-- <div class="calculation__select calculation__item">
      <app-select
        :title="lang === 'Ru' ? 'Город' : 'City'"
        :label="
          cityInput !== ''
            ? cityInput?.name
            : lang === 'Ru'
            ? 'Выберите город'
            : 'Select city'
        "
        :items="country.cities"
        @input="selectCity" />
    </div> -->
    <div class="calculation__phone calculation__item">
      <app-input
        :title="lang === 'Ru' ? 'Телефон' : 'Телефон'"
        v-mask="'+7 (###) ###-##-##'"
        :text="item.phone"
        v-model="item.phone" />
    </div>
    <div class="calculation__address calculation__item">
      <h6 class="calculation__item-title">
        {{ lang === "Ru" ? "Адрес" : "Адрес" }}
      </h6>
      <!-- <div class="calculation__address__btn" @click="openModal">
        {{ lang === "Ru" ? "Добавить адрес" : "Add address" }}
        <img src="@/assets/img/icons/add.svg" alt="" />
      </div> -->
      <div class="calculation__address__list">
        <div
          class="calculation__address__item"
          v-bind:class="{
            'calculation__address__item-active':
              item.user_address == address.id,
          }"
          v-for="address in addresses"
          :key="address.id"
          :id="address.id"
          @click="selectAdress">
          <p
            class="calculation__address__item-label calculation__item-text"
            v-bind:class="{
              'calculation__item-text__active': item.user_address == address.id,
            }"
            :id="address.id">
            {{ address.country.name }} г.{{ address.city.name }}
          </p>
          <p
            class="calculation__address__item-label calculation__item-text"
            v-bind:class="{
              'calculation__item-text__active': item.user_address == address.id,
            }"
            :id="address.id">
            {{ address.street }} {{ address.home }}
          </p>
        </div>
      </div>
    </div>
    <div class="calculation__delivery calculation__item">
      <h6 class="calculation__item-title">
        {{ lang === "Ru" ? "Способ доставки" : "Жеткізу әдісі" }}
      </h6>
      <div class="calculation__delivery__list">
        <div
          class="calculation__delivery__item"
          v-bind:class="{
            'calculation__delivery__item-active':
              item.delivery_option == 'cdek',
          }"
          id="cdek"
          v-on:click="selectDelivery">
          <img src="@/assets/basket/cdek_delivery.png" alt="" id="cdek" />
        </div>
        <div
          class="calculation__delivery__item"
          v-bind:class="{
            'calculation__delivery__item-active':
              item.delivery_option == 'yandex_delivery',
          }"
          id="yandex_delivery"
          v-on:click="selectDelivery">
          <img
            src="@/assets/basket/yandex_delivery.png"
            alt=""
            id="yandex_delivery" />
        </div>
        <div
          class="calculation__delivery__item"
          v-bind:class="{
            'calculation__delivery__item-active':
              item.delivery_option == 'self_delivery',
          }"
          id="self_delivery"
          v-on:click="selectDelivery">
          <span class="calculation__item-text" id="self_delivery">{{
            lang === "Ru" ? "Самовывоз" : "Ала кету"
          }}</span>
        </div>
      </div>
    </div>
    <!-- <div class="calculation__units calculation__item">
      <div class="calculation-unit__top">
        <div class="calculation-unit">
          <app-input
            :title="'Ширина'"
            :isUnit="true"
            :unit="'см.'"
            :text="item.width"
            v-model="item.width"
          />
        </div>
        <div class="calculation-unit">
          <app-input
            :title="'Длина'"
            :isUnit="true"
            :unit="'см.'"
            :text="item.length"
            v-model="item.length"
          />
        </div>
        <div class="calculation-unit">
          <app-input
            :title="'Высота'"
            :isUnit="true"
            :unit="'см.'"
            :text="item.height"
            v-model="item.height"
          />
        </div>
      </div>
      <div class="calculation-unit__bottom">
        <div class="calculation__count">
          <count-input class="calculation__count-input" :itemCount="item.count" v-model="item.count" />
        </div>
        <div class="calculation-unit">
          <app-input
            :title="'Вес'"
            :isUnit="true"
            :unit="'гр.'"
            :text="item.weight"
            v-model="item.weight"
          />
        </div>
      </div>
    </div> -->

    <div class="calculation__total">
      <div class="calculation__total-title">
        {{
          lang === "Ru"
            ? `Итого к оплате с доставкой:`
            : `Жеткізу арқылы жалпы төлем:`
        }}
      </div>
      <div class="calculation__total-price">
        {{ total_price }} {{ currency }}
      </div>
    </div>
    <label v-if="errorMessage !== ''">
      <span style="color: red">{{ errorMessage }}</span>
    </label>
    <div
      class="calculation__btn"
      v-bind:class="{ calculation__error: errorMessage !== '' }"
      @click="handleClicked">
      {{ lang === "Ru" ? `Перейти к оплате` : `Төлемге өтіңіз` }}
    </div>
    <router-link to="/payment" class="calculation__info__btn">
      {{ lang === "Ru" ? "Информация об оплате" : "Төлем туралы ақпарат" }}
    </router-link>
  </form>
</template>

<script>
import api from "@/api/api";

export default {
  name: "CostCalculation",
  components: {
    // AppSelect: () => import("@/components/common/AppSelect.vue"),
    AppInput: () => import("@/components/common/AppInput.vue"),
    // CountInput: () => import("@/components/common/CountInput.vue"),
  },
  props: ["country", "cart"],
  data() {
    return {
      lang: this.$cookie.get("lang"),
      user: localStorage.getItem("user"),
      total_price: "",
      currency: "",
      errorMessage: "",
      addresses: [],
      countryInput: JSON.parse(localStorage.getItem("user")).country,
      cityInput: "",
      item: {
        orderitems: [],
        phone: JSON.parse(localStorage.getItem("user")).username,
        user_address: "",
        delivery_option: "",
        // width: "140",
        // length: "400",
        // height: "160.3",
        // count: 0,
        // weight: "140",
      },
    };
  },
  created() {
    api.getAddresses().then((res) => {
      this.addresses = this.addresses.concat(res.result);
    });
    api.getCurrentCart().then((res) => {
      this.item.orderitems = res.cartitems;
      this.total_price = res.total_price;
      this.currency = res.currency;
    });
    api.currentOrder().then((res) => {
      console.log(res);
    });
  },
  methods: {
    handleClicked() {
      if (this.item.phone === "") {
        this.errorMessage = "Укажите номер телефона.";
      } else if (this.item.user_address === "") {
        this.errorMessage = "Укажите адрес.";
      } else if (this.item.delivery_option === "") {
        this.errorMessage = "Выберите способ доставки.";
      }
      // else if (this.item.width === "" || this.item.length === "" || this.item.height === "" || this.item.count === "" || this.item.weight === "") {
      //   this.errorMessage = "Укажите вес нужные данные.";
      // }
      else {
        this.errorMessage = "";
        this.item.orderitems.map((item) => (item.basis = item.basis.id));
        this.item.orderitems.map((item) => (item.print_item = item.print.id));
        api.createOrder(this.item).then(() => {
          console.log("success");
        });
        this.$store.state.count = 0;
        this.$emit("submit");
      }
    },
    openModal() {
      this.$emit("open");
    },
    selectCity(event) {
      this.cityInput = event;
    },
    selectAdress(event) {
      this.item.user_address = this.addresses.find(
        (item) => item.id == event.target.id
      ).id;
    },
    selectDelivery(event) {
      this.item.delivery_option = event.target.id;
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
    &-title,
    &-text {
      font-weight: 700;
      font-size: rem(16);
      line-height: 130%;
      color: #464c52;
      text-align: left;
    }
    &-title {
      margin-bottom: rem(9);
    }
    &-text__active {
      color: #fff;
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
    cursor: pointer;
  }

  &__address {
    margin-top: rem(11);
    &__btn {
      width: rem(177);
      height: rem(33);
      display: flex;
      justify-content: space-between;
      background: #f7bd7f;
      font-weight: 500;
      line-height: rem(18);
      color: #fff;
      margin: rem(15) 0 rem(14);
      padding: rem(6) rem(14) rem(7) rem(10);
      cursor: pointer;
    }
    &__list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-gap: rem(12);
    }
    &__item {
      grid-column: span 1 / span 1;
      border: 1px solid #dbe0e9;
      padding: rem(9) rem(16) rem(5);
      cursor: pointer;
      &-label {
        font-weight: 500;
        line-height: rem(25);
        margin-bottom: rem(11);
      }
      &-active {
        background: #f7bd7f;
      }
    }
  }

  &__delivery {
    margin-top: rem(40);
    &__list {
      display: flex;
      gap: rem(8);
    }
    &__item {
      width: rem(157);
      height: rem(53);
      display: flex;
      align-items: center;
      justify-content: center;
      border: rem(1) solid #dbe0e9;
      cursor: pointer;
      &-active {
        background: #fff;
      }
    }
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

  &__error {
    margin-top: rem(12);
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
