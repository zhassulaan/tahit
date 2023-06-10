<template>
  <div class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__nav">
          <div class="footer__logo">
            <router-link to="/">
              <img src="@/assets/img/logo.svg" alt="" />
            </router-link>
          </div>
          <ul class="footer__list">
            <li @click="route('about')" class="footer__list-item">
              {{ lang === "Ru" ? "О компании" : "Company" }}
            </li>
            <router-link to="/news" tag="li" class="footer__list-item">
              {{ lang === "Ru" ? "Новости" : "News" }}
            </router-link>
            <router-link to="/blogs" tag="li" class="footer__list-item">
              {{ lang === "Ru" ? "Блог" : "Blog" }}
            </router-link>
            <li @click="route('designersAbout')" class="footer__list-item">
              {{ lang === "Ru" ? "Дизайнеры о нас" : "Designers about us" }}
            </li>
            <router-link to="/contacts" tag="li" class="footer__list-item">
              {{ lang === "Ru" ? "Контакты" : "Contacts" }}
            </router-link>
          </ul>
        </div>
        <div class="footer__social">
          <a class="footer__social-link" href="#?">
            <img src="@/assets/img/icons/facebook.svg" alt="" />
          </a>
          <a class="footer__social-link" href="#?">
            <img src="@/assets/img/icons/instagram.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="footer__copyright">
        <p>
          {{
            lang === "Ru"
              ? "Все права защищены © 2022"
              : "All rights reserved © 2022"
          }}
        </p>
        <p>
          {{ lang === "Ru" ? "Политика конфиденциальности" : "Privacy Policy" }}
        </p>
      </div>
      <div class="alux-dev">
        <p>{{ lang === "Ru" ? "Разработано в" : "Developed by" }}</p>
        <a href="https://a-lux.kz/" target="_blank">
          <img src="@/assets/img/a-lux.png" alt="" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      lang: this.$cookie.get("lang"),
    };
  },
  methods: {
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
@import "@/assets/scss/reset.sass";
.alux-dev {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: rem(50);
  p {
    font-size: rem(16);
    margin-right: rem(20);
  }
  img {
    width: rem(100);
  }
}
.footer {
  background-color: #1d393c;
  padding: rem(60) rem(40);
  color: #fff;

  @media (max-width: 640px) {
    padding: rem(30) rem(40);
  }

  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__nav {
    display: flex;
    align-items: left;
    @include media("tablet-landscape-up") {
      flex-direction: column;
    }
  }

  &__logo {
    margin-right: rem(95);
    @include media("tablet-landscape-up") {
      margin: 0;
    }
    img {
      width: rem(186);
      height: rem(58);
    }
  }

  &__list {
    display: flex;
    @include media("tablet-landscape-up") {
      flex-direction: column;
      margin-top: rem(30);
      align-items: baseline;
    }
    align-items: center;
    li {
      font-size: rem(20);
      list-style: none;
      line-height: rem(31);
      cursor: pointer;
    }
    &-item + &-item {
      @include media("tablet-landscape-up") {
        margin: 0;
        line-height: 35px;
      }
      margin-left: rem(85);
    }
  }

  &__social {
    display: flex;
    align-items: center;
    &-link {
      img {
        @include media("tablet-landscape-up") {
          width: 30px;
          height: 30px;
        }
        width: rem(24);
        height: rem(24);
      }
    }
    a + a {
      margin-left: rem(30);
    }
  }

  &__copyright {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: rem(30);
  }
}
@media (max-width: 1100px) {
  .footer__list li {
    font-size: 14px;
  }
}
@media (max-width: 767px) {
  .footer__list-link {
    font-size: 14px;
  }
  .footer__list li {
    line-height: 150%;
  }
  .alux-dev {
    margin-top: 20px;
    p {
      font-size: 10px;
    }
    img {
      width: 60px;
    }
  }
}
</style>
