<template>
  <div class="password">
    <div class="password__container">
      <validation-observer ref="changePassword">
        <form
          @submit.prevent="changePassword"
          action=""
          class="registration-form"
        >
          <div class="password__inputs">
            <div class="inputWrapper">
              <validation-provider
                v-slot="{ errors }"
                rules="required|password"
              >
                <app-input
                  v-model="password.password"
                  :type="'password'"
                  :title="lang === 'Ru' ? 'Старый пароль' : 'Ескі Құпиясөз'"
                  :placeholder="''"
                />
                <label for="password">
                  <span style="color: red">{{ errors[0] }}</span></label
                >
              </validation-provider>
            </div>
            <div class="inputWrapper">
              <validation-provider
                v-slot="{ errors }"
                rules="required|password"
              >
                <app-input
                  v-model="password.new_password"
                  :type="'password'"
                  :title="lang === 'Ru' ? 'Новый пароль' : 'Жаңа Құпиясөз'"
                  :placeholder="''"
                />
                <label for="password">
                  <span style="color: red">{{ errors[0] }}</span></label
                >
              </validation-provider>
            </div>
          </div>
          <p v-if="error" style="color: red; text-align: start">
            {{ lang === "Ru" ? `Неправильный пароль ` : `Құпиясөз қате` }}
          </p>
          <button>{{ lang === "Ru" ? `Сохранить` : `Сақтау` }}</button>
        </form>
      </validation-observer>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";
import { ValidationObserver, ValidationProvider } from "vee-validate";

export default {
  name: "PasswEdit",
  data() {
    return {
      userInfo: "",
      lang: this.$cookie.get("lang"),
      password: {
        password: "",
        new_password: "",
      },
      error: false,
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
    AppInput: () => import("@/components/common/AppInput.vue"),
  },
  methods: {
    changePassword() {
      this.$refs.changePassword.validate().then((e) => {
        if (e === false) return;
        api
          .changePassword(this.password)
          .then(() => {
            location.reload();
          })
          .catch((err) => {
            if (err.response.status === 400) {
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
.inputWrapper:first-child {
  margin-right: rem(34);
}
.password {
  &__container {
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
    padding: rem(40);
  }
  &__inputs {
    display: flex;
  }
  @media (min-width: 1101px) {
    .inputWrapper {
      width: rem(671);
    }
  }
  @media (max-width: 1100px) {
    &__inputs {
      flex-direction: column;
    }
    .inputWrapper {
      width: 100%;
    }
  }
}
</style>
