<!-- @format -->

<template>
  <div class="header">
    <div class="header__container">
      <div class="header__burger">
        <button @click="openBurger = true" class="header-top__btn burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <burger-menu
          @close="openBurger = false"
          :burger="openBurger"></burger-menu>
      </div>
      <div class="header__left">
        <router-link to="/" class="headerLogo">
          <img class="headerLogo__img" src="../../assets/img/logo.svg" alt="" />
        </router-link>
        <div class="header__nav">
          <ul class="header__navItems">
            <li class="header__navItem" @click="route('about')">
              {{ lang === "Ru" ? "О компании" : "Компания жайлы" }}
            </li>
            <!-- :to="{ path: '/', query: { name: 'about' } }" -->
            <router-link to="/catalog" tag="li" class="header__navItem">
              {{ lang === "Ru" ? "Каталог" : "Каталог" }}
            </router-link>
            <router-link to="/news" tag="li" class="header__navItem">
              {{ lang === "Ru" ? "Новости" : "Жаңалықтар" }}
            </router-link>
            <router-link to="/blogs" tag="li" class="header__navItem">
              {{ lang === "Ru" ? "Блог" : "Блог" }}
            </router-link>
            <li @click="route('designersAbout')" class="header__navItem">
              {{ lang === "Ru" ? "Дизайнеры о нас" : "Біз туралы дизайнерлер" }}
            </li>
            <router-link to="/contacts" tag="li" class="header__navItem">
              {{ lang === "Ru" ? "Контакты" : "Контактілер" }}
            </router-link>
          </ul>
        </div>
      </div>
      <div class="header__right">
        <router-link to="/design" class="header__item uploadBtn">
          <p class="uploadBtn__content">
            {{
              lang === "Ru" ? "Загрузить свой дизайн" : "Дизайныңызды жүктеңіз"
            }}
          </p>
        </router-link>
        <div class="header-flex">
          <div class="header__userLogo header__item">
            <router-link to="/office">
              <img src="../../assets/main/userLogo.svg" alt="" />
            </router-link>
          </div>
          <div class="header__label" :style="search ? '' : 'width: 0%'">
            <form
              action=""
              @submit.prevent="Search()"
              style="position: relative; width: 100%">
              <input
                type="text"
                placeholder="Поиск"
                class="header__input"
                v-model="searchInput"
                :style="search ? '' : 'padding: 0px;'" />
            </form>
            <div
              class="header__search header__item modal__search"
              :style="search ? 'position: relative' : 'display:none'"
              @click="search = !search">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6.5L6 18.5"
                  stroke="#182040"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
                <path
                  d="M6 6.5L18 18.5"
                  stroke="#182040"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="header__search header__item" style="position: relative">
            <img
              @click="search = !search"
              src="../../assets/main/Search.svg"
              alt=""
              style="cursor: pointer" />
          </div>
          <router-link to="/basket" class="header__basket header__item">
            <img src="../../assets/main/basket.svg" alt="" />
            <p class="header__basketCount">{{ count }}</p>
          </router-link>
          <div style="position: relative">
            <button @click="select = !select" class="language header__item">
              <img
                v-if="lang === 'En'"
                src="../../assets/kz.svg"
                alt="" />
              <img v-else src="../../assets/Flag_of_Russia.svg.png" alt="" />
              <p class="language__text">{{ lang }}</p>
            </button>
            <ul class="lang-select" v-if="select">
              <button
                @click="langSelect('Ru')"
                class="select__item lang-select__item">
                Ru
              </button>
              <button
                @click="langSelect('En')"
                class="select__item lang-select__item">
                Kz
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BurgerMenu from "../BurgerMenu.vue";
export default {
  name: "Header",
  components: {
    BurgerMenu,
  },
  data() {
    return {
      openBurger: false,
      lang: this.$cookie.get("lang"),
      select: false,
      timer: 0,
      search: false,
      searchInput: "",
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  watch: {
    openBurger: {
      handler() {
        if (this.openBurger === true) {
          document.body.style = "overflow:hidden;";
        } else {
          document.body.style = "overflow: unset;";
        }
      },
    },
  },
  methods: {
    Search() {
      this.$router.push({
        path: "/search",
        query: { search: this.searchInput },
      });
    },
    langSelect(item) {
      this.lang = item;
      this.$cookie.set("lang", this.lang, 7);
      window.location.reload();
    },
    route(e) {
      if (this.$router.currentRoute.path === "/" && e === "about") {
        document
          .querySelector("#about")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (e === "about") {
        this.$router.push({ path: "/", query: { name: "about" } });
      } else if (this.$router.currentRoute.path === "/" && e === "news") {
        document
          .querySelector("#news")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (e === "news") {
        this.$router.push({ path: "/", query: { name: "news" } });
      } else if (this.$router.currentRoute.path === "/" && e === "blog") {
        document
          .querySelector("#blog")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (e === "blog") {
        this.$router.push({ path: "/", query: { name: "blog" } });
      } else if (e === "catalog") {
        this.$router.push("/catalog");
      } else if (
        this.$router.currentRoute.path === "/" &&
        e === "designersAbout"
      ) {
        document
          .querySelector("#designersAbout")
          .scrollIntoView({ block: "center", behavior: "smooth" });
      } else if (e === "designersAbout") {
        this.$router.push({ path: "/", query: { name: "designersAbout" } });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
html {
  @include media("tablet-landscape-up") {
    font-size: 10px !important;
  }
}

p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.header__basketCount {
  text-align: center;
  margin-right: 3px;
  margin-top: 3px;
}
.header__container {
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
}
.burger-btn {
  display: flex;
  flex-direction: column;
  background-color: unset;
  border: unset;
}
.burger-btn span {
  width: 26px;
  height: 3px;
  background-color: #2d2929;
  margin-bottom: 3px;
}
.uploadBtn__content {
  white-space: nowrap;
  font-family: "Lato Medium";
}
.language {
  padding: 0;
  background: transparent;
}
.lang-select {
  position: absolute;
  top: 55%;
  right: 00%;
  display: flex;
  flex-direction: column;
}
.lang-select__item {
  padding: 5px 0;
  width: 40px;
}

.header__label {
  width: 100%;
  z-index: 2;
  transition: all 500ms;
}

.header__input {
  transition: all 500ms;
}

.modal__search {
  display: none;
}

.header-flex {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 10px;
}

@media (max-width: 640px) {
  .header__label {
    background: white;
    z-index: 1;
    width: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .header__input {
    width: 300px;
  }
  .modal__search {
    display: block;
  }
}

@media (max-width: 767px) {
  // .header__right {
  //   display: none;
  // }
  // .header__userLogo,
  .headerLogo__img {
    width: 50px;
    height: auto;
    object-fit: cover;
  }
  .language {
    display: none;
  }

  .header__userLogo,
  .header__search,
  .header__basket {
    width: 24px;
    height: 24px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .header__left,
  .header__right {
    width: 100%;
  }
  .header__right {
    gap: 10px;
    justify-content: flex-end;
  }
  .header__userLogo {
    margin: 0;
  }
  .header__basket {
    margin-left: 0;
  }
  .language {
    margin-left: 0 !important;
  }
}
.header__input {
  padding: 8px 10px;
  background: #e1e1e3;
  border-radius: 50px;
  width: 100%;
  margin-left: rem(5);
}

.search__hidden {
  cursor: pointer;
  position: absolute;
  background: #f4f4f4;
  top: 49%;
  font-size: 14px;
  font-weight: 500;
  right: 0;
  transform: translateY(-50%);
  padding: rem(10) rem(15);
  border-radius: 6px;
}
</style>
