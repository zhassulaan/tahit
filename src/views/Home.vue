<!-- @format -->

<template>
  <div class="mainWrapper">
    <div class="home" v-if="banerHeder">
      <div class="home__container">
        <div class="home__inner">
          <div class="home__content">
            <h1 class="home__content-title">
              {{ banerHeder.title }}
            </h1>
            <p class="home__content-text">
              {{ banerHeder.text }}
            </p>
            <img class="home__content-img" :src="banerHeder.image" alt="" />
            <a class="home__content-link" :href="link">
              Узнать больше
            </a>
          </div>
        </div>
      </div>
    </div>
    <About />
    <Projects />
    <DesignersAbout />
    <More v-for="baner in banerPage" :baner="baner" :key="baner.id" />
    <Our-Blog />
    <News />
  </div>
</template>

<script>
import api from "@/api/api";

export default {
  name: "Home",
  components: {
    About: () => import("../components/aboutUs.vue"),
    Projects: () => import("../components/Projects.vue"),
    DesignersAbout: () => import("../components/designersAbout.vue"),
    More: () => import("../components/More.vue"),
    OurBlog: () => import("../components/ourBlog.vue"),
    News: () => import("../components/news.vue"),
  },
  data() {
    return {
      banerHeder: "",
      banerPage: "",
      link: "",
    };
  },
  created() {
    api.getMainBaner().then((res) => {
      console.log(res, "banners");
      this.link = res[0].url;

      res.forEach((e) => {
        if (e.is_main) {
          this.banerHeder = e.items[0];
        } else {
          this.banerPage = e.items;
        }
      });
    });
    let temp = new Date();
    console.log(temp, "date");
  },
  methods: {},
};
</script>
<style lang="scss">
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.mainWrapper {
  min-height: 80vh;
}

.home {
  &__inner {
    background-image: url("~@/assets/main/background.png");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: cover;
    padding: 0 rem(175);
    min-height: rem(668);
    display: flex;
    align-items: center;
  }
  &__content {
    max-width: rem(805);
    margin-left: auto;
    &-title {
      font-family: "Playfair Display";
      font-weight: 400;
      font-size: rem(48);
      line-height: rem(64);
      text-align: center;
      color: #182040;
      margin: 0;
      margin-bottom: rem(36);
    }
    &-text {
      font-weight: 400;
      font-size: rem(18);
      line-height: 160%;
      text-align: center;
      color: #656c72;
      padding: rem(10);
    }
    &-img {
      display: none;
    }
    &-link {
      padding: rem(14) rem(30);
      background: var(--button, #f7bd7f);
      color: #fff;
      text-align: center;
      font-size: rem(16);
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

@media (max-width: 900px) {
  .home {
    &__inner {
      background-image: none;
      background-color: #eff0f2;
      padding: 0;
    }
    &__content {
      max-width: 100%;
      padding: 50px 0 0;
      margin: 0;
      &-title {
        font-family: "Playfair Display";
        font-weight: 400;
        font-size: 30px;
        line-height: 120%;
        text-align: center;
        color: #182040;
        margin: 0;
        margin-bottom: 20px;
      }
      &-text {
        font-weight: 400;
        font-size: 18px;
        line-height: 160%;
        text-align: center;
        color: #656c72;
        margin-bottom: 50px;
      }
      &-img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
}

@media (max-width: 500px) {
  .home__content {
    padding-top: 20px;
  }
  .home__content-title {
    font-size: 24px;
  }
  .home__content-text {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .home__inner {
    min-height: 0;
  }
}

.moreBtn {
  margin: 0 auto;
  padding: rem(15) rem(34);
  background: #f7bd7f;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(16);
  line-height: rem(19);
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
</style>
