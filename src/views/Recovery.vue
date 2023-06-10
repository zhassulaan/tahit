<template>
  <div>
    <div v-if="modal">
      <div @click="$router.push('/login')" class="edit-address"></div>
      <div class="edit-address__content">
        <button @click="$router.push('/login')" class="edit-address__close">
          <img src="@/assets/img/icons/close-modal.svg" alt="" />
        </button>
        <h3 class="edit-address__title" style="text-align: center">
          {{
            $cookie.get("lang") === "Ru"
              ? "Ваш пароль изменен"
              : "Your password has been changed"
          }}
        </h3>
      </div>
    </div>
    <div class="container">
      <div class="recovery">
        <div class="registration-title">
          {{ lang === "Ru" ? `Восстановление пароля` : `Password Recovery` }}
        </div>
        <div class="smsForm" v-if="tab === 1">
          <app-input
            v-model="username"
            v-mask="
              countrys === 'KZ' || countrys === 'RU'
                ? '+7 (###) ###-##-##'
                : '+375 ## ### ## ##'
            "
            :title="lang === 'Ru' ? 'Телефон' : `Phone`"
            :placeholder="
              countrys === 'KZ' || countrys === 'RU'
                ? '+7 (###) ###-##-##'
                : '+375 ## ### ## ##'
            "
          />
          <button @click="handleSendSMS" class="registration-btn mt-20">
            {{ lang === "Ru" ? `Отправить код` : `Send SMS` }}
          </button>
        </div>
        <div class="smsForm" v-else-if="tab === 2">
          <p>
            {{
              lang === "Ru"
                ? "На ваш номер телефона придет код SMS"
                : "An SMS code will be sent to your phone number"
            }}
          </p>
          <p>
            {{
              lang === "Ru"
                ? "Вы не получили код?"
                : `You didn't receive a code?`
            }}
          </p>
          <button class="smsForm-btn" v-if="timer > 0">
            {{ lang === "Ru" ? `Отправить повторно через` : `Resend via` }}
            {{ timer }}
          </button>
          <button @click="handleSendSMS" class="smsForm-btn" v-if="timer === 0">
            {{ lang === "Ru" ? `Отправить повторно` : `Resend` }}
          </button>
          <div class="registration-form_one">
            <app-input
              v-model="smsInput"
              :type="'number'"
              :title="lang === 'Ru' ? 'Код SMS' : `SMS code`"
            />
            <span
              style="
                color: red;
                display: block;
                margin-top: 10px;
                font-size: 14px;
                font-weight: 600;
              "
              v-if="verifyError"
            >
              {{ verifyError }}
            </span>
            <button @click="verifySms" class="registration-btn mt-10">
              {{ lang === "Ru" ? `Подтвердить` : `Verify` }}
            </button>
          </div>
        </div>
        <div class="smsForm" v-else>
          <app-input
            v-model="password"
            :type="'password'"
            :title="lang === 'Ru' ? 'Пароль' : `Password`"
          />
          <app-input
            v-model="password2"
            :type="'password'"
            :title="lang === 'Ru' ? 'Повторите Пароль' : `Repeat Password`"
            class="mt-10"
          />
          <button @click="resetPass" class="registration-btn mt-20">
            {{ lang === "Ru" ? `Сохранить пароль` : `Save password` }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "Recovery",
  components: {
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  data() {
    return {
      lang: this.$cookie.get("lang"),
      password: "",
      password2: "",
      timer: 0,
      tab: 1,
      smsInput: "",
      username: "",
      passwordError: false,
      modal: false,
      verifyError: "",
      countrys: localStorage.getItem("country"),
    };
  },
  watch: {
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
  methods: {
    handleSendSMS() {
      api.sendSms({ username: this.username }).then(() => {
        this.tab = 2;
        this.timer = 60;
      });
    },
    verifySms() {
      api
        .verifySms({ username: this.username, code: this.smsInput })
        .then(() => {
          this.tab = 3;
          this.smsInput = "";
          this.password = "";
          this.password2 = "";
          this.passwordError = false;
        })
        .catch((err) => {
          this.verifyError = err.response.data.error;
        });
    },
    resetPass() {
      if (this.password === this.password2) {
        api
          .resetPass({ username: this.username, password: this.password })
          .then(() => {
            this.passwordError = false;
            this.modal = true;
          });
      } else {
        this.passwordError = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.recovery {
  height: 80vh;
  padding: 50px;
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

.mt-20 {
  margin-top: rem(20);
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
    display: flex;
    align-items: center;
    justify-content: center;
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
