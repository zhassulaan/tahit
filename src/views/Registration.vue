<template>
  <div class="registration">
    <div v-if="modal">
      <div @click="modal = false" class="edit-address"></div>
      <div class="edit-address__content">
        <h3 class="edit-address__title" style="text-align: center">
          {{
            $cookie.get("lang") === "Ru"
              ? "Ваши данные сохранены"
              : "Деректеріңіз сақталды"
          }}
        </h3>
        <button
          class="modal__btn"
          @click="
            {
              modal = false;
              $router.push('/office');
            }
          "
        >
          Ок
        </button>
      </div>
    </div>
    <div id="SMS" class="smsForm SMS" v-if="sms">
      <div class="registration-title">
        {{ lang === "Ru" ? `Регистрация` : `Тіркеу` }}
      </div>
      <p>
        {{
          lang === "Ru"
            ? "На ваш номер телефона придет код SMS"
            : "Сіздің телефон нөміріңізге SMS коды жіберіледі"
        }}
      </p>
      <p>
        {{
          lang === "Ru" ? "Вы не получили код?" : `Сіз кодты алған жоқсыз ба?`
        }}
      </p>
      <button class="smsForm-btn" v-if="timer > 0">
        {{ lang === "Ru" ? "Отправить повторно через" : "Қайта жіберу" }}
        {{ timer }}
      </button>
      <button class="smsForm-btn" @click="handleSendSMS" v-else>
        {{ lang === "Ru" ? "Отправить повторно" : "Қайта жіберу" }}
      </button>
      <div class="registration-form_one">
        <app-input
          v-model="smsInput"
          :type="'number'"
          :title="lang === 'Ru' ? 'Код SMS' : `Код SMS`"
        />
        <button @click="regFunc()" class="registration-btn mt-10">
          {{ lang === "Ru" ? `Зарегистрироваться` : `Тіркелу` }}
        </button>
      </div>
      <span
        v-if="error"
        style="color: red; display: block; text-align: center; margin-top: 10px"
      >
        {{
          lang === "Ru"
            ? `Данный номер уже используется`
            : `Бұл нөмір бұрыннан қолданыста`
        }}
      </span>
    </div>
    <div class="container" v-else>
      <div class="registration-title">
        {{ lang === "Ru" ? `Регистрация` : `Тіркеу` }}
      </div>
      <p
        style="
          color: green;
          font-weight: 700;
          font-size: 16px;
          text-align: center;
        "
      >
        {{
          lang === "Ru"
            ? "В первую очередь необходимо отметить, кем вы являетесь!"
            : "Ең алдымен, сіз кім екеніңізді атап өтуіңіз керек!"
        }}
      </p>
      <div class="registration-radio">
        <div class="registration-radio_item">
          <input type="radio" id="radio1" value="1" v-model="formtab" />
          <label for="radio1">
            {{ lang === "Ru" ? `Розничный клиент` : `Бөлшек тұтынушы` }}
          </label>
        </div>
        <div class="registration-radio_item">
          <input type="radio" id="radio2" value="2" v-model="formtab" />
          <label for="radio2"
            >{{ lang === "Ru" ? `Салон штор` : `Салон перделері` }}
          </label>
        </div>
        <div class="registration-radio_item">
          <input type="radio" id="radio3" value="3" v-model="formtab" />
          <label for="radio3">{{
            lang === "Ru" ? `Текстильный декоратор` : `Тоқыма декораторы`
          }}</label>
        </div>
        <div class="registration-radio_item">
          <input type="radio" id="radio4" value="4" v-model="formtab" />
          <label for="radio4">
            {{
              lang === "Ru" ? `Графический дизайнер` : `Графикалық дизайнер`
            }}</label
          >
        </div>
      </div>
      <validation-observer ref="registerForm">
        <form @submit.prevent="reg" action="" class="registration-form">
          <div class="registration-form_two">
            <validation-provider v-slot="{ errors }" rules="required">
              <app-input
                v-model="regData.first_name"
                :title="lang === 'Ru' ? 'Имя' : `Аты`"
              />
              <label for="name">
                <span style="color: red">{{ errors[0] }}</span></label
              >
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider v-slot="{ errors }" rules="required">
              <app-input
                v-model="regData.last_name"
                :title="lang === 'Ru' ? 'Фамилия' : `Тегі`"
              />
              <label for="secondName">
                <span style="color: red">{{ errors[0] }}</span></label
              >
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider
              name="email"
              v-slot="{ errors }"
              rules="required|email"
            >
              <app-input v-model="regData.email" :title="'Email'" />
              <label for="email">
                <span style="color: red">{{
                  errors[0] === "email" ? "Неправильно введен email" : errors[0]
                }}</span></label
              >
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider
              v-slot="{ errors }"
              rules="required|phone_number"
            >
              <app-input
                v-model="regData.username"
                v-mask="
                  countrys === 'KZ' || countrys === 'RU'
                    ? '+7 (###) ###-##-##'
                    : '+375 ## ### ## ##'
                "
                :title="lang === 'Ru' ? 'Телефон' : `Телефон`"
                :placeholder="
                  countrys === 'KZ' || countrys === 'RU'
                    ? '+7 (###) ###-##-##'
                    : '+375 ## ### ## ##'
                "
              />
              <label for="phone_number">
                <span style="color: red">{{ errors[0] }}</span></label
              >
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider v-slot="{ errors }" rules="required|password">
              <app-input
                v-model="regData.password"
                :type="'password'"
                :title="lang === 'Ru' ? 'Пароль' : `Құпиясөз`"
              />
              <label for="password">
                <span style="color: red">{{ errors[0] }}</span></label
              >
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider v-slot="{ errors }" rules="required|password">
              <app-input
                v-model="repeatPassword"
                :type="'password'"
                :title="
                  lang === 'Ru' ? 'Подтвердить пароль' : `Құпиясөзді Растау`
                "
              />
              <label for="password">
                <span style="color: red">{{ errors[0] }}</span
                ><br />
                <span style="color: red">{{ repeatMsg }}</span></label
              >
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider v-slot="{ errors }" rules="required">
              <app-select
                :title="lang === 'Ru' ? 'Страна' : `Мемлекет`"
                :label="inputValue.name !== '' ? inputValue.name : ''"
                :items="country"
                @input="changeInput"
              />
              <label for="country">
                <span style="color: red">{{ errors[0] }}</span
                ><br />
              </label>
            </validation-provider>
          </div>
          <div class="registration-form_two">
            <validation-provider
              v-slot="{ errors }"
              :aria-disabled="inputValue === ''"
              rules="required"
            >
              <app-select
                :title="lang === 'Ru' ? 'Город' : `Қала`"
                :label="inputCity.name === '' ? '' : inputCity.name"
                :items="cities"
                @input="changeInputCity"
              />
              <label for="city">
                <span style="color: red">{{ errors[0] }}</span
                ><br />
              </label>
            </validation-provider>
          </div>
          <div class="registration-form_one" v-if="formtab == '3'">
            <app-input
              v-model="regData.addresses[0].saloon_name"
              :title="lang === 'Ru' ? 'Название Студии' : `Студия атауы`"
            />
            <p style="color: red; font-weight: 500" v-if="saloon_nameErr">
              {{ saloon_nameErr }}
            </p>
          </div>
          <div class="registration-form_one" v-if="formtab == '2'">
            <app-input
              v-model="regData.addresses[0].saloon_name"
              :title="lang === 'Ru' ? 'Название Салона' : `Салон атауы`"
            />
            <p style="color: red; font-weight: 500" v-if="saloon_nameErr">
              {{ saloon_nameErr }}
            </p>
          </div>
          <div class="registration-form_one" v-if="formtab == '4'">
            <app-input
              v-model="regData.addresses[0].saloon_name"
              :title="
                lang === 'Ru'
                  ? 'Название дизайн студии'
                  : `Дизайн студиясының атауы`
              "
            />
          </div>
          <div class="registration-form_one registration-private">
            <input type="checkbox" id="scales" name="scales" checked />
            <label for="scales"> </label>
            <p>
              {{
                lang === "Ru"
                  ? `Регистрируясь, я подтверждаю, что понимаю и согласен с Условиями
              обслуживания`
                  : `Тіркелу арқылы мен Шарттарды түсінетінімді және келісетінімді растаймын
               қызмет көрсету`
              }}
            </p>
          </div>
          <label for="conditions">
            <span style="color: red">{{ conditions }}</span>
            <span
              v-if="error"
              style="color: red; display: block; text-align: start"
            >
              {{
                lang === "Ru"
                  ? `Данный номер уже используется`
                  : `Бұл нөмір бұрыннан қолданыста`
              }}
            </span>
          </label>
          <div class="registration-form_one">
            <button @click="handleSendSMS" class="registration-btn">
              {{ lang === "Ru" ? `Получить код SMS` : `SMS кодын алыңыз` }}
            </button>
            <!-- <button @click="regFunc()" class="registration-btn">
                {{ lang === "Ru" ? `Зарегистрироваться` : `Тіркелу` }}
              </button> -->
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>
<script>
// import { instance } from "@/plugins/axios";
import { mapState, mapActions } from "vuex";
import { actionTypes } from "@/store/modules/user";

import { ValidationObserver, ValidationProvider } from "vee-validate";
import api from "@/api/api";

export default {
  name: "Registration",
  components: {
    ValidationObserver,
    ValidationProvider,
    AppSelect: () => import("@/components/common/AppSelect.vue"),
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  data() {
    return {
      error: "",
      lang: this.$cookie.get("lang"),
      sms: false,
      countrys: localStorage.getItem("country"),
      timer: 0,
      regData: {
        username: "",
        password: "",
        role: 1,
        first_name: "",
        last_name: "",
        email: "",
        addresses: [
          {
            index: "",
            street: "",
            home: "",
            saloon_name: "",
            user: 0,
            country: 0,
            city: 1,
          },
        ],
      },
      smsInput: "",
      repeatPassword: "",
      repeatMsg: "",
      conditions: "",
      country: [
        {
          id: 1,
          title: "Казахстан",
        },
        {
          id: 2,
          title: "Россия",
        },
        {
          id: 3,
          title: "Украина",
        },
      ],
      cities: [
        {
          id: 11,
          title: "Алматы",
        },
        {
          id: 12,
          title: "Москва",
        },
        {
          id: 13,
          title: "Киев",
        },
      ],
      formtab: "1",
      inputValue: "",
      inputCity: "",
      modal: false,
      saloon_nameErr: "",
    };
  },
  // JSON.stringify(body)
  created() {
    api.getCountries().then((res) => {
      this.country = res;
    });
  },
  watch: {
    formtab: {
      handler() {
        this.saloon_nameErr = "";
      },
    },
    regData: {
      deep: true,
      handler() {
        this.saloon_nameErr = "";
      },
    },
    timer: {
      handler() {
        if (this.timer > 0) {
          setTimeout(() => {
            this.timer--;
          }, 1000);
        }
      },
    },
  },
  computed: {
    ...mapState("userModule", ["isUserAuth"]),
  },
  methods: {
    handleSendSMS() {
      const checkbox = document.getElementById("scales");
      if (checkbox === false) {
        this.conditions = "Примите условия обслуживания";
        return;
      } else {
        api.sendSms({ username: this.regData.username }).then(() => {
          this.sms = true;
          this.timer = 60;
          document
            .querySelector("#SMS")
            .scrollIntoView({ block: "center", behavior: "smooth" });
        });
      }
    },
    changeInput(event) {
      this.error = false;
      this.inputValue = event;
      this.cities = this.inputValue.cities;
      this.inputCity = "";
      this.regData.addresses[0].country = this.inputValue.id;
    },
    changeInputCity(event) {
      this.error = false;
      this.inputCity = event;
      this.regData.addresses[0].city = this.inputCity.id;
    },
    ...mapActions("userModule", {
      userAuth: actionTypes.IS_AUTH,
    }),
    regFunc() {
      if (!this.error) {
        api
          .verifySms({ username: this.regData.username, code: this.smsInput })
          .then(() => {
            if (this.formtab === "1") {
              this.regData.group = "Розничные покупатели";
              this.regData.addresses[0].saloon_name = "";
              this.regData.role = 2;
            } else if (this.formtab === "2") {
              this.regData.group = "Салон штор";
              this.regData.role = 4;
            } else if (this.formtab === "3") {
              this.regData.group = "Текстильный декоратор";
              this.regData.role = 3;
            } else if (this.formtab === "4") {
              this.regData.group = "Графический дизайнер";
              this.regData.role = 5;
            }

            api
              .register(this.regData)
              .then((res) => {
                this.error = false;
                this.$cookie.set("token", res.token, { expires: 7 });
                this.$cookie.set("refresh", res.refresh, { expires: 7 });
                // if (response.status === 400) {
                //   alert("Введенный email уже занят");
                // }
              })
              .catch((err) => {
                if (err.response.status === 400) {
                  this.error =
                    "Пользователь с таким номером телефона уже существует!";
                }
              });
          });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.SMS {
  height: 60vh;
  margin-top: 50px;
}
.mt-10 {
  margin-top: 10px;
}

.smsForm {
  width: 100%;
  max-width: 427px;
  margin: 0 auto;
  &-text {
    font-weight: 700;
    font-size: 15px;
    line-height: 130%;
    color: #464c52;
    text-align: start;
  }
  &-btn {
    margin-bottom: 15px;
    padding: 0;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height, or 119% */

    color: #f7bd7f;
    background: transparent;
    border-bottom: 1px dashed #f7bd7f;
  }
}

@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
#scales {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
#scales + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
#scales + label::before {
  content: "";
  position: absolute;
  margin-top: rem(16);
  left: rem(8);
  width: rem(20);
  height: rem(20);
  transform: translate(-50%, -50%);
  background-color: white;
  border: rem(1) solid #d9d9d9;
}

#scales:checked + label:after {
  color: #fff;
  background: #fff;
  content: "";
  position: absolute;
  margin-top: rem(6);
  left: rem(8);
  width: rem(10);
  height: rem(10);
  background-color: #f7bd7f;
  transform: translate(-50%, -50%);
  visibility: visible;
}

.container {
  width: 65%;
}
.registration {
  margin: rem(80) 0;

  &-title {
    font-size: rem(22);
    font-weight: 700;
    margin-bottom: rem(30);
  }
  &-btn {
    width: rem(328);
    height: rem(50);
    font-size: rem(16);
    color: #fff;
    background: #f7bd7f;
  }
  &-radio {
    // font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: rem(15);
    line-height: rem(18);
    color: #464c52;
    display: flex;
    justify-content: space-between;
    gap: rem(20);
    margin-bottom: rem(64);
    &_item {
      display: flex;
      align-items: center;
      gap: rem(5);
      font-size: rem(15);
    }
  }
  &-form {
    font-family: "Lato Regular";
    font-style: normal;
    font-weight: 400;
    font-size: rem(18);
    line-height: 160%;
    color: #656c72;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    text-align: left;
    gap: rem(28);
    &_two {
      width: 48%;
    }
    &_one {
      width: 100%;
    }
  }
  &-private {
    p {
      position: relative;
      left: rem(20);
    }
    position: relative;
    display: flex;
    align-items: center;
    gap: rem(5);
  }
}
input[type="radio"],
input[type="checkbox"],
label {
  cursor: pointer;
}
input[type="radio"] {
  position: relative;
  height: 22px;
  width: 22px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
}
input[type="radio"]::before {
  content: "";
  position: absolute;
  top: 49%;
  left: 50%;
  width: rem(25);
  height: rem(25);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: rem(1) solid #d9d9d9;
}
input[type="radio"]:checked::after {
  color: #fff;
  background: #fff;
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: rem(13);
  height: rem(13);
  border-radius: 50%;
  background-color: #f7bd7f;
  transform: translate(-50%, -50%);
  visibility: visible;
}
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
  .registration-radio {
    flex-wrap: wrap;
  }
  .registration-form_two {
    width: 100%;
  }
  .registration-radio_item {
    width: 100%;
  }
}

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

.modal__btn {
  background: #f7bd7f;
  padding: rem(15) rem(40);
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  margin: 0 auto;
}
</style>
