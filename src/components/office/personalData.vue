<template>
  <div class="officeContent">
    <div class="officeContent__container">
      <div class="officeContent__form">
        <validation-observer ref="userData">
          <form @submit.prevent="change()">
            <div class="form__inner">
              <div class="officeContent__left">
                <div class="officeContent__input">
                  <validation-provider v-slot="{ errors }" rules="required">
                    <app-input
                      :title="lang === 'Ru' ? 'Имя' : 'Name'"
                      v-model="changeData.first_name"
                      :placeholder="changeData.first_name"
                    />
                    <label for="first_name">
                      <span style="color: red">{{ errors[0] }}</span
                      ><br />
                    </label>
                  </validation-provider>
                </div>
                <div style="display: flex" class="officeContent__input">
                  <validation-provider
                    style="width: 100%"
                    v-slot="{ errors }"
                    rules="required|phone_number"
                  >
                    <app-input
                      :title="lang === 'Ru' ? 'Телефон' : 'Phone'"
                      v-mask="
                        country === 'KZ' || country === 'RU'
                          ? '+7 (###) ###-##-##'
                          : '+375 ## ### ## ##'
                      "
                      :placeholder="changeData.username"
                      v-model="changeData.username"
                    />
                    <label for="phone_number">
                      <span style="color: red">{{ errors[0] }}</span></label
                    >
                  </validation-provider>
                  <!-- <div class="officeContent__icons">
                    <img
                      @click="inputSwitcher = true"
                      src="@/assets/office/plus.png"
                      alt=""
                    />
                    <img src="@/assets/office/Delete.png" alt="" />
                  </div> -->
                </div>
                <!-- <div
                  v-for="(item, index) in user.phone_number"
                  :key="index"
                  style="display: flex"
                  class="officeContent__input"
                >
                  <app-input :placeholder="item.phone_number" />
                  <div class="officeContent__icons">
                    <img
                      @click="inputSwitcher = true"
                      src="@/assets/office/plus.png"
                      alt=""
                    />
                    <img src="@/assets/office/Delete.png" alt="" />
                  </div>
                </div> -->
                <!-- <div
                  v-if="inputSwitcher"
                  style="display: flex"
                  class="officeContent__input"
                >
                  <validation-provider
                    v-slot="{ errors }"
                    rules="required|phone_number"`
                    style="width: 100%"
                  >
                    <app-input
                      :title="''"
                      v-mask="'+7 (###) ###-##-##'"
                      v-model="numData.phone_number"
                      :placeholder="'Введите номер'"
                      :focus="inputSwitcher"
                    />
                    <label for="phone_number">
                      <span style="color: red">{{ errors[0] }}</span></label
                    >
                  </validation-provider>
                  <div class="officeContent__icons">
                    <img
                      @click="inputSwitcher = false"
                      src="@/assets/office/Delete.png"
                      alt="
                    />
                  </div>
                </div> -->
              </div>
              <div class="officeContent__right">
                <div class="officeContent__input">
                  <validation-provider v-slot="{ errors }" rules="required">
                    <app-input
                      :title="lang === 'Ru' ? 'Фамилия' : 'Surname'"
                      :placeholder="changeData.last_name"
                      v-model="changeData.last_name"
                    />
                    <label for="last_name">
                      <span style="color: red">{{ errors[0] }}</span
                      ><br />
                    </label>
                  </validation-provider>
                </div>
                <div style="display: flex" class="officeContent__input">
                  <validation-provider
                    style="width: 100%"
                    v-slot="{ errors }"
                    rules="required|email"
                  >
                    <app-input
                      :title="'Email'"
                      v-model="changeData.email"
                      :placeholder="changeData.email"
                    />
                    <label for="email">
                      <span style="color: red">{{
                        errors[0] === "email"
                          ? lang === "Ru"
                            ? "Неправильно введен email"
                            : "Incorrect email"
                          : errors[0]
                      }}</span></label
                    >
                  </validation-provider>
                </div>
              </div>
            </div>
            <button>
              {{ lang === "Ru" ? `Сохранить` : `Save` }}
            </button>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { ValidationObserver, ValidationProvider } from "vee-validate";

import api from "@/api/api";

export default {
  data() {
    return {
      lang: this.$cookie.get("lang"),
      changeData: {
        email: "",
        first_name: "",
        last_name: "",
        username: "",
      },
      country: localStorage.getItem("country"),
      inputSwitcher: false,
    };
  },
  computed: {
    ...mapState("userModule", ["user"]),
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  methods: {
    change() {
      // this.$refs.userData.validate().then((e) => {
      // if (e === false) return;
      if (this.changeData.username === "") {
        this.changeData.username = this.user.username;
      }
      api
        .changeUserData(this.changeData)
        .then(() => {
          this.getUser();
        })
        .catch((err) => {
          alert(err.response.data[0]);
        });
      // });
    },
    getUser() {
      api.getUserData().then((res) => {
        this.changeData.first_name = res.first_name;
        this.changeData.last_name = res.last_name;
        this.changeData.email = res.email;
        this.changeData.username = res.username;
      });
    },
  },
  created() {
    this.getUser();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@media (max-width: 700px) {
  .officeContent {
    margin: 0 auto;
    &__form {
      margin-left: 0 !important;
    }
    &__input {
      margin-top: 10px;
    }
  }
}

.officeContent {
  margin: 0 auto;
  &__icons {
    display: flex;
    margin-left: rem(15);
    img {
      margin-right: rem(10);
      width: rem(22);
      height: rem(22);
    }
  }
  form {
    button {
      background-color: white;
      font-weight: 600;
      font-size: rem(16);
      line-height: rem(18);
      display: flex;
      align-items: center;
      margin-top: rem(47);
      padding: rem(15) rem(92);
      text-align: center;
      color: #f7bd7f;
      border: 1px solid #f7bd7f;
    }
  }
  &__input {
    width: rem(671);
  }
  @media (min-width: 1101px) {
  }
  @media (max-width: 640px) {
    &__input {
      // width: 100%;
      width: rem(500);
    }
  }

  // .officeContent:not:first-child {
  //   &__icons {
  //     margin-top: rem(15);
  //   }
  // }
  &__left &__input:nth-child(1n + 3) &__icons {
    margin-top: rem(25);
  }
  &__left &__input:nth-child(2) &__icons {
    margin-top: rem(45);
  }
  &__right &__input:nth-child(2) &__icons {
    margin-top: rem(45);
  }
  &__left,
  &__right {
    .officeContent {
      &__input {
        margin-right: rem(34);
      }
      &__input:not(:first-child) {
        margin-top: rem(32);
      }
    }
  }
  &__form {
    margin-left: rem(39);
  }
  .form {
    &__inner {
      display: flex;
      @include media("tablet-landscape-up") {
        flex-direction: column;
      }
    }
  }
}
</style>
