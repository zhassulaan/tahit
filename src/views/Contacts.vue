<!-- @format -->

<template>
  <div class="contacts">
    <div class="contacts__container">
      <h1 class="contacts__header">
        {{ lang === "Ru" ? "Контакты" : "Контактілер" }}
      </h1>
      <p class="contacts__content">
        {{ contacts.text }}
      </p>
      <div class="bigImg__wrapper">
        <img class="contacts__bigImg" :src="contacts.image" alt="" />
        <div class="contacts__vidgets">
          <a class="contacts__vidget">
            <img src="../assets/contacts/nav.png" alt="" />
            <p>
              {{ contacts.address }}
            </p>
          </a>
          <a class="contacts__vidget">
            <img src="../assets/contacts/phone.png" alt="" />
            <p>{{ contacts.phone }}</p>
          </a>
          <a class="contacts__vidget">
            <img src="../assets/contacts/mail.svg" alt="" />
            <p>{{ contacts.email }}</p>
          </a>
          <a class="contacts__vidget" v-if="contacts.bin">
            <p>{{ lang === "Ru" ? "БИН:" : "БИН:" }} {{ contacts.bin }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../api/api";
export default {
  name: "Contacts",
  data() {
    return {
      lang: this.$cookie.get("lang"),
      contacts: "",
    };
  },
  created() {
    api.getContacts().then((res) => (this.contacts = res[0]));
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.bigImg {
  &__wrapper {
    max-width: min-content;
    margin: 0 auto;
  }
}
.contacts {
  min-height: 80vh;
  margin-bottom: rem(85);
  &__vidget {
    align-items: center;
    display: flex;
  }
  &__vidgets {
    p {
      margin: rem(16) 0;
      font-size: rem(18);
    }
    img {
      margin-right: rem(10);
      width: rem(15);
      height: rem(15);
    }
    // max-width: min-content;
    text-align: left;
    // display: flex;
  }
  &__bigImg {
    width: rem(493);
  }
  &__container {
    margin: 0 auto;
    padding: 0 rem(40);
  }
  &__content {
    margin: 0 auto;
    font-family: "Lato Regular";
    font-style: normal;
    font-weight: 400;
    line-height: 164.5%;
    text-align: center;
    color: #464c52;
    margin-bottom: rem(30);
    @include media("tablet-landscape-up") {
      // width: 100%;
    }
  }
  &__header {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: rem(42);
    line-height: rem(56);
    color: #182040;
  }
}
@media (min-width: 1201px) {
  .contacts {
    font-size: rem(16);
    &__content {
      font-size: rem(18);
      width: rem(860);
    }
    &__vidget {
    }
  }
}
@media (max-width: 1200px) {
  .contacts {
    font-size: 15px;
    &__content {
      // width: 100%;
      font-size: 15px !important;
    }
  }
}
</style>
