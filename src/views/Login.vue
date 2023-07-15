<template>
  <div class="auth">
    <div class="container">
      <div class="auth-row">
        <div class="auth-login">
          <div class="auth-titile">
            {{ lang === "Ru" ? `Вход` : `Кіру` }}
          </div>
          <validation-observer ref="authForm">
            <form @submit.prevent="auth" action="" class="auth-login_form">
              <validation-provider
                v-slot="{ errors }"
                rules="required|phone_number"
              >
                <app-input
                  v-model="authData.username"
                  :title="lang === 'Ru' ? 'Телефон' : 'Телефон'"
                  v-mask="
                    country === 'KZ' || country === 'RU'
                      ? '+7 (###) ###-##-##'
                      : '+375 ## ### ## ##'
                  "
                  :placeholder="
                    country === 'KZ' || country === 'RU'
                      ? '+7 (###) ###-##-##'
                      : '+375 ## ### ## ##'
                  "
                />
                <label for="phone_number">
                  <span style="color: red">{{ errors[0] }}</span></label
                >
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                rules="required|password"
              >
                <app-input
                  v-model="authData.password"
                  :title="lang === 'Ru' ? 'Пароль' : 'Құпиясөз'"
                  :type="'password'"
                />
                <label for="password">
                  <span style="color: red">{{ errors[0] }}</span></label
                >
              </validation-provider>
              <div class="auth-login_row">
                <div class="auth-login_checkbox">
                  <input type="checkbox" id="scales" name="scales" checked />
                  <label for="scales">
                    {{ lang === "Ru" ? `Запомнить меня` : `Мені есте сақтау` }}
                  </label>
                </div>
                <router-link to="/recovery" class="auth-login_forgot">
                  {{ lang === "Ru" ? `Забыли пароль ?` : `Құпия сөзіңізді ұмыттыңыз ба ?` }}
                </router-link>
              </div>
              <button style="margin: 2vh 0" class="auth-btn">
                {{ lang === "Ru" ? `Войти` : `Кіру` }}
              </button>
              <span v-if="error" style="color: red; display: block">
                {{
                  lang === "Ru"
                    ? `Неправильный логин или пароль`
                    : `Логин немесе құпия сөз қате`
                }}
              </span>
            </form>
          </validation-observer>
        </div>
        <div class="auth-registration">
          <div class="auth-titile">
            {{ lang === "Ru" ? `Регистрация` : `Регистрация` }}
          </div>
          <div class="auth-registration_text">
            <p>
              {{
                lang === "Ru"
                  ? `Зарегистрироваться легко! С учетной записью вы можете:`
                  : `Тіркелу оңай! Есептік жазба арқылы сіз:`
              }}
            </p>
            <ul>
              <li>
                {{
                  lang === "Ru"
                    ? `Сохраняйте понравившиеся дизайны`
                    : `Таңдаулы дизайндарыңызды сақтаңыз`
                }}
              </li>
              <li>
                {{
                  lang === "Ru"
                    ? `Создавать дизайнерские коллекции`
                    : `Дизайнер топтамаларын жасаңыз`
                }}
              </li>
              <li>
                {{
                  lang === "Ru"
                    ? `Просмотрите историю заказов`
                    : `Тапсырыс тарихын қараңыз`
                }}
              </li>
              <li>
                {{
                  lang === "Ru"
                    ? `Продавайте свои работы и зарабатывайте комиссионные`
                    : `Жұмысыңызды сатыңыз және комиссия алыңыз`
                }}
              </li>
            </ul>
          </div>
          <router-link to="/registration">
            <button class="auth-btn">
              {{ lang === "Ru" ? `Зарегистрироваться` : `Тіркелу` }}
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "@/store/modules/user";

import { ValidationObserver, ValidationProvider } from "vee-validate";
import api from "@/api/api";
export default {
  name: "Login",
  components: {
    ValidationObserver,
    ValidationProvider,
    // AppSelect: () => import("@/components/common/AppSelect.vue"),
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  data() {
    return {
      conditions: "",
      lang: this.$cookie.get("lang"),
      authData: {
        username: "",
        password: "",
      },
      error: false,
      country: localStorage.getItem("country"),
      items: ["Пункт 1", "Пункт 2", "Пункт 3", "Пункт 4"],
    };
  },
  computed: {
    ...mapState("userModule", ["isUserAuth"]),
  },
  methods: {
    ...mapActions("userModule", {
      userAuth: actionTypes.IS_AUTH,
    }),
    auth() {
      this.$refs.authForm.validate().then((e) => {
        this.error = false;

        if (e === false) return;
        const checkbox = document.getElementById("scales");
        if (checkbox.checked === false) {
          this.conditions = "Примите условия обслуживания";
          return;
        }
        api
          .auth(this.authData)
          .then((res) => {
            this.$cookie.set("token", res.access, { expires: 7 });
            this.$cookie.set("refresh", res.refresh, { expires: 7 });
            this.userAuth(true);
            this.error = false;
            this.$router.push("/office");
          })
          .catch((err) => {
            console.log(err, "error");
            if (err.response.status === 401) {
              this.error = true;
            }
          });
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

#scales {
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
.auth-login_checkbox {
  position: relative;
}
.auth {
  text-align: left;
  margin: rem(85) 0;
  &-login {
    &_checkbox {
      font-family: "Lato Regular";
      font-style: normal;
      font-weight: 400;
      font-size: rem(18);
      line-height: 160%;
      color: #656c72;
    }
  }
  &-titile {
    font-weight: 700;
    color: #464c52;
    margin-bottom: rem(27);
    font-family: "Lato Bold";
    font-style: normal;
    font-size: rem(22);
    line-height: 130%;
  }
  &-row {
    display: flex;
  }
  &-btn {
    width: rem(245);
    height: rem(50);
    font-size: rem(16);
    background: #f7bd7f;
    color: #fff;
  }
  &-login {
    width: 45%;
    &_row {
      display: flex;
      justify-content: space-between;
      gap: rem(20);
      margin-bottom: rem(20);
      align-items: center;
      font-size: rem(18);
    }
    &_form {
      width: 80%;
      .input {
        margin-bottom: rem(20);
      }
    }
    &_checkbox {
      display: flex;
      align-items: center;
      gap: rem(5);
    }
    &_forgot {
      color: #1d393c;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
  &-registration {
    padding: rem(68) rem(95);
    background: #f0f2f5;
    font-size: rem(16);
    color: #464c52;
    line-height: 130%;
    &_text {
      p {
        margin: rem(32) 0;
      }
      ul {
        list-style: disc;
        padding-left: 18px;
        margin-bottom: rem(35);
        li {
          line-height: 202%;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
  .auth-row {
    flex-wrap: wrap;
  }
  .auth-login {
    width: 100%;
    margin-bottom: 32px;
  }
  .auth-login_form {
    width: 100%;
  }
}
</style>
