<!-- @format -->

<template>
  <div>
    <div @click="closeModal" class="edit-address"></div>
    <div class="edit-address__content">
      <button @click="closeModal" class="edit-address__close">
        <img src="@/assets/img/icons/close-modal.svg" alt="" />
      </button>
      <h3 class="edit-address__title">
        {{
          type === "Редактировать адрес" && $cookie.get("lang") === "Ru"
            ? "Редактировать адрес"
            : type === "Редактировать адрес" && $cookie.get("lang") === "En"
            ? "Мекенжайды өзгерту"
            : type === "Добавить адрес" && $cookie.get("lang") === "Ru"
            ? "Добавить адрес"
            : "Мекенжайды қосу"
        }}
      </h3>
      <validation-observer ref="changeData">
        <form @submit.prevent="makeAddress" class="edit-address__form">
          <div class="edit-address__select edit-address__item">
            <app-select
              style="z-index: 5"
              :title="lang === 'Ru' ? 'Страна' : 'Мемлекет'"
              :label="
                inputCountry === ''
                  ? lang === 'Ru'
                    ? 'Выберите страну'
                    : 'Елді таңдаңыз'
                  : inputCountry.name
              "
              :items="countries"
              @input="changeCountry" />
          </div>
          <div class="edit-address__select edit-address__item">
            <app-select
              style="z-index: 4"
              :title="lang === 'Ru' ? 'Город' : 'Қала'"
              :label="
                inputCity === ''
                  ? lang === 'Ru'
                    ? 'Выберите город'
                    : 'Қаланы таңдаңыз'
                  : inputCity.name
              "
              :items="cities"
              @input="changeCity" />
          </div>
          <div class="edit-address__input edit-address__item">
            <validation-provider
              style="width: 100%"
              v-slot="{ errors }"
              :items="countries"
              rules="required|min">
              <app-input
                :title="lang === 'Ru' ? 'Индекс' : 'Индекс'"
                :placeholder="addresses.index"
                v-mask="'##########'"
                v-model="addresses.index" />
              <label for="index">
                <span style="color: red">{{ errors[0] }}</span></label
              >
            </validation-provider>
          </div>
          <div class="edit-address__inner edit-address__item">
            <div class="edit-address__select">
              <validation-provider v-slot="{ errors }" rules="required">
                <app-input
                  style="z-index: 3"
                  :title="lang === 'Ru' ? 'Улица' : 'Көше'"
                  :placeholder="addresses.street"
                  :items="streets"
                  v-model="addresses.street" />
                <label for="street">
                  <span style="color: red">{{ errors[0] }}</span
                  ><br />
                </label>
              </validation-provider>
            </div>
            <div class="edit-address__input">
              <validation-provider v-slot="{ errors }" rules="required">
                <app-input
                  :title="lang === 'Ru' ? 'Дом' : 'үй'"
                  :placeholder="addresses.home"
                  v-model="addresses.home" />
                <label for="house">
                  <span style="color: red">{{ errors[0] }}</span
                  ><br />
                </label>
              </validation-provider>
            </div>
          </div>
          <button class="edit-address__btn">
            {{ lang === "Ru" ? "Сохранить" : "Сақтау" }}
          </button>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import api from "@/api/api";

export default {
  name: "EditAddressModal",
  props: {
    id: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    method: {
      type: Function,
      required: false,
    },
  },
  data() {
    return {
      lang: this.$cookie.get("lang"),
      addresses: {
        country: null,
        city: null,
        index: "",
        street: "",
        home: "",
        is_main: true,
      },
      inputCountry: "",
      inputCity: "",
      countries: [],
      cities: [],
      streets: [
        {
          id: 21,
          name: "Сатпаева",
        },
        {
          id: 22,
          name: "Тверская",
        },
        {
          id: 23,
          name: "Победная",
        },
      ],
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    AppSelect: () => import("@/components/common/AppSelect.vue"),
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  computed: {
    ...mapState("userModule", ["user"]),
    // ...mapState(["countries"]),
  },
  created() {
    if (this.type === "Редактировать адрес") {
      api.getAddressById(this.id).then((res) => {
        this.inputCountry = res.result[0].country;
        this.countries = res.result[0].country;
        this.inputCity = res.result[0].city;
        this.cities = res.result[0].country.cities;
        this.addresses.country = res.result[0].country;
        this.addresses.city = res.result[0].city;
        this.addresses.index = res.result[0].index;
        this.addresses.home = res.result[0].home;
        this.addresses.street = res.result[0].street;
      });
    } else {
      api.getAddresses().then((res) => {
        this.inputCountry = res.result[0].country;
        this.countries = res.result[0].country;
        this.inputCity = res.result[0].city;
        this.cities = res.result[0].country.cities;
        this.addresses.country = res.result[0].country;
        this.addresses.city = res.result[0].city;
      });
    }
  },
  methods: {
    changeCountry(event) {
      this.inputCountry = event;
      this.cities = this.inputCountry.cities;
      this.inputCity = "";
      this.addresses.country = this.inputCountry;
    },
    changeCity(event) {
      this.inputCity = event;
      this.addresses.city = this.inputCity;
    },
    closeModal() {
      this.$emit("close");
    },
    makeAddress() {
      if (this.type === "Редактировать адрес") {
        this.$refs.changeData.validate().then((e) => {
          if (e === false) return;
          this.addresses.country = this.country;
          this.addresses.city = this.addresses.city.id;
          api
            .editAddress(this.id, this.addresses)
            .then(() => {
              this.method();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      } else {
        this.$refs.changeData.validate().then((e) => {
          if (e === false) return;
          // this.addresses.country = this.country.id;
          this.addresses.city = this.addresses.city.id;
          api
            .addAddress(this.addresses)
            .then(() => {
              this.method();
            })
            .catch((err) => console.log(err));
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.edit-address {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;

  &__content {
    position: fixed;
    background-color: #ffffff;
    padding: rem(39);
    width: rem(520);
    z-index: 5;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  &__close {
    position: absolute;
    top: rem(13);
    right: rem(13);
    width: rem(25);
    height: rem(25);
  }

  &__title {
    font-weight: 400;
    font-size: rem(22);
    line-height: 187.5%;
    color: #000000;
    margin-bottom: rem(25);
    font-family: "Playfair Display";
  }

  &__item {
    margin-bottom: rem(23);
  }

  &__inner {
    display: flex;
    .edit-address__select {
      width: rem(285);
      margin-right: rem(15);
    }
  }

  &__btn {
    font-weight: 600;
    font-size: rem(16);
    line-height: rem(19);
    color: #f7bd7f;
    padding: rem(15);
    border: rem(2) solid #f7bd7f;
    width: 100%;
  }
}
</style>
