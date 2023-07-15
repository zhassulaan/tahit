<template>
  <div id="designersAbout" class="designersAbout">
    <div class="mobile-designersAbout__container">
      <div class="designersAbout__headerWrapper">
        <h2 class="designersAbout__header">
          {{ lang === "Ru" ? "Дизайнеры о нас" : "Біз туралы дизайнерлер" }}
        </h2>
        <h1 class="designersAbout__reviewImg comforter">
          {{ lang === "Ru" ? "Отзывы профессионалов" : "Кәсіби шолулар" }}
        </h1>
      </div>
      <div class="designersContent" v-if="about">
        <div class="designersContent__bigImg mobile_hidden">
          <img :src="about.photo" alt="" />
        </div>
        <div class="designersContent__wrapper">
          <div class="designersContent__avatars">
            <hooper :settings="hooperSettings">
              <slide v-for="item in abouts" :key="item.id">
                <div @click="about = item" style="cursor: pointer">
                  <img class="avatars__img" :src="item.photo" alt="" />
                  <div class="avatars__info">
                    <p class="avatars__name">{{ item.designer_fullname }}</p>
                    <p class="avatars__duty">{{ item.role }}</p>
                  </div>
                </div>
                <div class="designersContent__text">
                  <p>{{ about.text }}</p>
                </div>
              </slide>
              <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </hooper>
          </div>
        </div>
      </div>
    </div>
    <div class="designersAbout__container">
      <div class="designersAbout__headerWrapper">
        <h2 class="designersAbout__header">
          {{ lang === "Ru" ? "Дизайнеры о нас" : "Біз туралы дизайнерлер" }}
        </h2>
        <h1 class="designersAbout__reviewImg comforter">
          {{ lang === "Ru" ? "Отзывы профессионалов" : "Кәсіби шолулар" }}
        </h1>
      </div>
      <div class="designersContent" v-if="about">
        <div class="designersContent__bigImg mobile_hidden">
          <img :src="about.photo" alt="" />
        </div>
        <div class="designersContent__wrapper">
          <div class="designersContent__text">
            <p>{{ about.text }}</p>
          </div>
          <div class="designersContent__bigImg desktop_hidden">
            <img :src="about.photo" alt="" />
          </div>
          <div class="mainDesigner">
            <p class="mainDesigner__name">{{ about.designer_fullname }}</p>
            <p class="mainDesigner__duty">{{ about.role }}</p>
          </div>
          <div class="designersContent__avatars">
            <hooper :settings="hooperSettings">
              <slide v-for="item in abouts" :key="item.id">
                <div @click="about = item" style="cursor: pointer">
                  <img class="avatars__img" :src="item.photo" alt="" />
                  <div class="avatars__info">
                    <p class="avatars__name">{{ item.designer_fullname }}</p>
                    <p class="avatars__duty">{{ item.role }}</p>
                  </div>
                </div>
              </slide>
              <hooper-navigation slot="hooper-addons"></hooper-navigation>
            </hooper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";
// import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation,
  Pagination as HooperPagination,
} from "hooper";
import "hooper/dist/hooper.css";
export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
    HooperPagination,
    // Swiper,
    // SwiperSlide,
  },
  data() {
    return {
      about: "",
      abouts: "",
      lang: this.$cookie.get("lang"),
      hooperSettings: {
        // centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          600: {
            centerMode: false,
            itemsToShow: 3,
          },
          900: {
            itemsToShow: 6,
            pagination: "fraction",
          },
        },
      },
      // swiperOption: {
      //   slideTo: 1,
      //   spaceBetween: 20,
      //   loop: true,
      //   slidesPerView: 6,
      //   centeredSlides: true,
      // },
    };
  },
  created() {
    api.getMainDesignerAbout().then((res) => {
      this.about = res[0];
      this.abouts = res;
      this.abouts.shift();
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

// .swiper-slide {
//   width: rem(250) !important;
//   margin: 0 !important;
// }
.designersAbout__reviewImg {
  position: relative;
  bottom: rem(60);
  z-index: -1;
  margin: 0 auto;
  font-style: normal;
  font-weight: 400;
  font-size: rem(64);
  line-height: rem(90);
  text-align: center;
  color: #dbe0e9;
  transform: rotate(-0.88deg);
}
.hooper-prev {
  left: -25px;
  @include media("tablet-landscape-up") {
    left: -15px;
  }
}
.hooper-next {
  @include media("tablet-landscape-up") {
    right: -15px !important;
  }
  right: -25px !important;
  border: 1.5px solid #656c72;
  transform: matrix(0, -1, -1, 0, 0, 0);
}

.hooper {
  width: rem(1200);
  height: auto;
  @include media("tablet-landscape-up") {
    width: 100%;
    margin: 0 auto;
  }
}
li.hooper-slide {
  @include media("tablet-landscape-up") {
    display: block;
  }
}
.mainDesigner {
  border-bottom: rem(1) solid #dbe0e9;
  text-align: left;
}
.mainDesigner p:first-child {
  margin: 0;
  margin-top: rem(38);
}
.mainDesigner p:nth-child(2n) {
  margin: 0;
  margin-top: rem(8);
  margin-bottom: rem(58);
}
.designersContent__avatars {
  display: flex;
  padding-top: rem(31);
  @media (max-width: 640px) {
    padding-top: rem(15);
  }
}
.designersAbout__container {
  padding: rem(40);
  @media (max-width: 640px) {
    display: none;
  }
}
.designersAbout__header {
  margin: 0 auto;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: rem(42);
  line-height: rem(56);
  text-align: center;
  color: #182040;
  @media (max-width: 640px) {
    text-align: start;
  }
}
.mobile-designersAbout__container {
  padding: 0px rem(40);
  margin-bottom: 20px;
  @media (min-width: 640px) {
    display: none;
  }
}
.designersContent {
  display: flex;
  @include media("tablet-landscape-up") {
    display: block;
    padding-bottom: rem(70);
    border-bottom: 0.8px solid #dbe0e9;
  }
}
.designersContent__bigImg img {
  width: rem(511);
  height: rem(511);
}
.designersContent__bigImg img {
  margin-right: rem(45);
  @include media("tablet-landscape-up") {
    margin: rem(30) 0;
  }
}
.designersContent__text p {
  margin: 0;
  @include media("tablet-landscape-up") {
    margin-top: 10px;
    font-size: 20px;
    line-height: 24px;
  }
}
.designersContent__text {
  text-align: left;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: 130%;
  color: #656c72;
}
.mainDesigner__name,
.avatars__name {
  margin: 0;
  margin-top: rem(15);
  margin-bottom: rem(10);
  font-family: "Lato Black";
  font-style: normal;
  font-weight: 700;
  font-size: rem(18);
  line-height: rem(22);
  color: #464c52;
}

.desktop_hidden {
  display: none;
}

.hooper-indicator {
  width: 3px;
  height: 3px;

  background: #d5d7dc;
  border-radius: 50%;
  border: none;
}

.hoo .mainDesigner__duty,
.avatars__duty {
  margin: 0;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: rem(22);
  color: #656c72;
}
.avatars__img {
  width: rem(148);
  height: rem(148);
  border-radius: 50%;
}

@media (max-width: 700px) {
  .designersContent__text p {
    font-size: 14px;
    line-height: 20px;
  }
  .designersAbout__reviewImg {
    color: transparent;
    bottom: 45px;
    white-space: nowrap;
    margin-bottom: -25px;
  }
  .mainDesigner p:first-child {
    margin-bottom: 10px;
  }
  .mainDesigner__name {
    font-size: 20px;
  }
  .mainDesigner__duty {
    font-size: 16px;
  }
  .avatars__name {
    font-size: 16px;
    line-height: 120%;
  }
  .avatars__duty {
    font-size: 14px;
  }
}
@media (max-width: 600px) {
  .avatars__img {
    width: 130px;
    height: 130px;
    border: 1px solid #f7bd7f;
    padding: 5px;
  }

  .designersContent__wrapper {
    display: flex;
    flex-direction: column-reverse;
  }

  .mobile_hidden {
    display: none;
  }

  .desktop_hidden {
    display: block;
  }
}
</style>
