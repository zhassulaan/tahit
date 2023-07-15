<!-- @format -->

<template>
  <div class="office">
    <h2>{{ header }}</h2>
    <div class="office__container">
      <Office-Nav />
      <Personal-Data v-if="officeTab === 'personalData'" />
      <Password-Edit v-if="officeTab === 'passwordEdit'" />
      <My-Address v-if="officeTab === 'myAddresses'" />
      <Favorites v-if="officeTab === 'Favorites'" />
      <History v-if="officeTab === 'History'" />
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "@/store/modules/user";
import { actionTypes as actionTypesIndex } from "@/store/index";

export default {
  data() {
    return {
      header: "",
    };
  },
  components: {
    OfficeNav: () => import("@/components/office/officeNav.vue"),
    PersonalData: () => import("@/components/office/personalData.vue"),
    PasswordEdit: () => import("@/components/office/passwordEdit.vue"),
    MyAddress: () => import("@/components/office/myAddresses.vue"),
    Favorites: () => import("@/components/office/favorites.vue"),
    History: () => import("@/components/office/history.vue"),
  },
  watch: {
    officeTab: {
      handler() {
        if (this.officeTab === "personalData") {
          this.header =
            this.$cookie.get("lang") === "Ru"
              ? "Личная информация"
              : "Personal information";
        } else if (this.officeTab === "passwordEdit") {
          this.header =
            this.$cookie.get("lang") === "Ru"
              ? "Смена пароля"
              : "Change password";
        } else if (this.officeTab === "myAddresses") {
          this.header =
            this.$cookie.get("lang") === "Ru" ? "Мои адреса" : "My addresses";
        } else if (this.officeTab === "Favorites") {
          this.header =
            this.$cookie.get("lang") === "Ru" ? "Избранное" : "Favorite";
        } else if (this.officeTab === "History") {
          this.header =
            this.$cookie.get("lang") === "Ru"
              ? "История заказов"
              : "Orders history";
        }
      },
    },
  },
  methods: {
    ...mapActions("userModule", {
      getUserAction: actionTypes.GET_USER,
    }),
    ...mapActions({
      getCountries: actionTypesIndex.GET_COUNTRIES,
    }),
  },
  mounted() {
    if (this.countries === "") {
      this.getCountries();
    }
    this.officeTab === "personalData";
    this.header =
      this.$cookie.get("lang") === "Ru"
        ? "Личная информация"
        : "Personal information";
    this.getUserAction();
  },
  computed: {
    ...mapState("userModule", ["officeTab", "user"]),
    ...mapState(["countries"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.office {
  min-height: 80vh;
  padding: rem(20) 0;
  h2 {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: rem(42);
    line-height: rem(56);
    text-align: center;
    color: #182040;
    margin-bottom: rem(50);
    // margin-top: rem(100);
  }
  &__container {
    padding: 0 rem(40);
    margin: rem(100) auto;
  }
}
@media (min-width: 750px) {
  .office__container {
    display: flex;
    // justify-content: center;
  }
}

@media (max-width: 600px) {
  .officeNav__container {
    bottom: 0px !important;
  }
  .office__container {
    // padding: 30px;
    // margin-top: 10px;
  }
}
</style>
