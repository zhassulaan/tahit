<template>
  <div class="header__navBurger" :class="{ isActive: burger }">
    <button @click="closeBurger()" class="burger-menu-close">
      <CloseIcon></CloseIcon>
    </button>
    <ul class="header__navBurgerItems">
      <li @click="route('about')" class="header__navBurgerItem">
        {{ lang === "Ru" ? "О компании" : "Company" }}
      </li>
      <router-link to="/catalog" tag="li" class="header__navBurgerItem">
        {{ lang === "Ru" ? "Каталог" : "Catalog" }}
      </router-link>
      <router-link to="/news" tag="li" class="header__navBurgerItem">
        {{ lang === "Ru" ? "Новости" : "News" }}
      </router-link>
      <router-link to="/blogs" tag="li" class="header__navBurgerItem">
        {{ lang === "Ru" ? "Блог" : "Blog" }}
      </router-link>
      <li @click="route('designersAbout')" class="header__navBurgerItem">
        {{ lang === "Ru" ? "Дизайнеры о нас" : "Designers about us" }}
      </li>
      <router-link to="/contacts" tag="li" class="header__navBurgerItem">
        {{ lang === "Ru" ? "Контакты" : "Contacts" }}
      </router-link>
    </ul>
    <div style="display: flex; align-items: center; position: relative">
      <div class="language" @click="select = !select">
        <img
          style="width: 28px"
          src="@/assets/main/english.svg"
          alt=""
          v-if="lang === 'En'"
        />
        <img
          v-else
          style="width: 28px"
          src="@/assets/Flag_of_Russia.svg.png"
          alt=""
        />

        <p style="font-size: 15px" class="language__text">{{ lang }}</p>
      </div>
      <ul class="lang-select2" v-if="select">
        <button
          @click="langSelect('Ru')"
          class="select__item lang-select__item"
        >
          Ru
        </button>
        <button
          @click="langSelect('En')"
          class="select__item lang-select__item"
        >
          En
        </button>
      </ul>
    </div>
    <div class="uploadBtn">
      <p @click="route('design')" class="uploadBtn__content">
        {{ lang === "Ru" ? "Загрузить свой дизайн" : "Upload your design" }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lang: this.$cookie.get("lang"),
      select: false,
    };
  },
  watch: {
    "$route.path": {
      deep: true,
      handler() {
        this.closeBurger();
      },
    },
  },
  props: {
    burger: {
      type: Boolean,
    },
  },
  components: {
    CloseIcon: () => import("../components/icons/CloseIcon.vue"),
  },
  methods: {
    langSelect(item) {
      this.lang = item;
      this.$cookie.set("lang", this.lang, 7);
      window.location.reload();
    },
    route(e) {
      this.closeBurger();
      if (this.$router.currentRoute.path === "/" && e === "about") {
        document
          .querySelector("#about")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (e === "about") {
        this.$router.push({ path: "/", query: { name: "about" } });
      } else if (
        this.$router.currentRoute.path === "/" &&
        e === "designersAbout"
      ) {
        document
          .querySelector("#designersAbout")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (e === "designersAbout") {
        this.$router.push({ path: "/", query: { name: "designersAbout" } });
      } else if (e === "design") {
        this.$router.push("/design");
      }
    },
    closeBurger() {
      this.$emit("close");
    },
  },
};
</script>
<style scoped>
.language {
  margin-left: 0;
}
.burger-menu-close {
  background-color: white;
  position: absolute;
  right: 19px;
  top: 15px;
}

.lang-select2 {
  position: absolute;
  top: 80%;
  left: -10%;
  display: flex;
  flex-direction: column;
}
.lang-select__item {
  padding: 5px 0;
  width: 40px;
}
p.uploadBtn__content {
  padding: 15px 5px;
}
li.header__navBurgerItem {
  margin: 30px 0;
  color: #656c72;
}
ul.header__navBurgerItems {
  text-align: left;
  padding: 0;
  font-size: 16px;
}
.uploadBtn {
  display: flex !important;
  margin: unset;
  width: 100%;
  font-size: 17px;
  max-width: 230px;
  height: 40px;
  margin-top: 10px;
}
.header__navBurger {
  min-height: 100%;
  transition: all 0.5s ease;
  position: fixed;
  left: 0;
  top: 0;
  transform: translateX(-100%);
  background-color: #fff;
  width: 100%;
  z-index: 101;
  padding-top: 30px;
  padding-left: 20px;
}

.header__navBurger.isActive {
  display: block;
  transform: translateX(0);
  transition: all 0.5s ease;
}
</style>
