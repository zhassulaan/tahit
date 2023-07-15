<template>
  <div id="blog" class="ourBlog">
    <div class="mobile-ourBlog__container">
      <h2 class="ourBlog__header">
        {{ lang === "Ru" ? "Наш блог" : "Біздің блог" }}
      </h2>
      <h1 class="ourBlog__interestng">
        {{ lang === "Ru" ? "Интересное для вас" : "Сізге қызық" }}
      </h1>
      <div class="ourBlog__slider">
        <router-link
          :to="{ name: 'FullBlog', params: { id: blog.id } }"
          v-for="blog in blogs"
          :key="blog.id"
          class="ourBlog__slider__one"
        >
          <img :src="blog.image" alt="" />
          <p>{{ blog.name }}</p>
        </router-link>
      </div>
    </div>
    <div class="ourBlog__container">
      <h2 class="ourBlog__header">
        {{ lang === "Ru" ? "Наш блог" : "Біздің блог" }}
      </h2>
      <h1 class="ourBlog__interestng">
        {{ lang === "Ru" ? "Интересное для вас" : "Сізге қызық" }}
      </h1>
      <div class="ourBlog__slider">
        <hooper :settings="hooperSettings">
          <slide v-for="blog in blogs" :key="blog.id">
            <router-link :to="{ name: 'FullBlog', params: { id: blog.id } }">
              <img :src="blog.image" alt="" />
              <p>{{ blog.title }}</p>
              <router-link :to="{ name: 'FullBlog', params: { id: blog.id } }">
                {{ lang === "Ru" ? "Узнать больше" : "Көбірек көру" }}
              </router-link>
            </router-link>
          </slide>
          <hooper-navigation slot="hooper-addons"></hooper-navigation>
        </hooper>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";
import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation,
  },
  data() {
    return {
      lang: this.$cookie.get("lang"),
      blogs: "",
      hooperSettings: {
        itemsToShow: 1,
        // centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          600: {
            centerMode: false,
            itemsToShow: 2,
          },
          900: {
            itemsToShow: 4,
            pagination: "fraction",
          },
        },
      },
    };
  },
  created() {
    api.getMainBlog().then((res) => {
      this.blogs = res;
      console.log(res, "MainBlog");
    });
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
li.hooper-slide img {
  width: rem(338);
  height: rem(338);
}
.hooper {
  // width: rem(1200);
  height: 100% !important;
  @include media("tablet-landscape-up") {
    width: 100%;
    margin: 0 auto;
  }
}
li.hooper-slide p {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: rem(18);
  line-height: rem(24);
  text-align: center;
  color: #464c52;
}
.hooper-pagination {
  bottom: rem(-45);
}
.hooper-indicator {
  margin-top: 20px;
  width: rem(14) !important;
  height: rem(14) !important;
  background: #d5d7dc;
  transition: all;
  transition-duration: 300ms;
}
.hooper-indicator.is-active {
  width: 25px !important;
  background: #f7bd7f !important;
}
li.hooper-slide a {
  font-family: "Lato Medium";
  font-style: normal;
  font-weight: 500;
  font-size: rem(16);
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #f7bd7f;
}
li.hooper-slide img {
  width: rem(338);
}
.ourBlog__container {
  padding-left: rem(40);
  padding-right: rem(40);
}
.ourBlog__interestng,
.ourBlog__header {
  margin: 0;
  padding: 0;
}
.ourBlog__header {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: rem(42);
  line-height: rem(56);
  text-align: center;
  color: #182040;
  @media (max-width: 640px) {
    text-align: start;
    margin-bottom: 15px;
  }
}
.ourBlog__interestng {
  position: relative;
  bottom: rem(63);
  right: rem(10);
  z-index: -1;
  font-family: "Comforter";
  font-style: normal;
  font-weight: 400;
  font-size: rem(64);
  line-height: rem(90);
  text-align: center;
  color: #dbe0e9;
  transform: rotate(-0.88deg);
  @media (max-width: 640px) {
    display: none;
  }
}
.ourBlog__container {
  text-align: center;
  margin-bottom: rem(200);
  @media (max-width: 640px) {
    display: none;
  }
}
.mobile-ourBlog__container {
  padding-left: rem(40);
  padding-right: rem(40);
  @media (min-width: 640px) {
    display: none;
  }
}

.ourBlog__slider {
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 640px) {
    overflow: scroll;
  }
}

.ourBlog__slider__one {
  position: relative;
}

.ourBlog__slider__one img {
  width: 240px;
  height: 170px;
}

.ourBlog__slider__one p {
  width: 100%;
  height: 65px;
  position: absolute;
  bottom: 0px;
  left: 0;
  background: rgba(247, 189, 127, 0.7);
  backdrop-filter: blur(2.5px);
  padding: 13px 0;
  text-align: center;
  margin: 0;

  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  color: #464c52;
}

@media (max-width: 700px) {
  .ourBlog__container {
    margin-bottom: 70px;
  }
  .ourBlog__interestng {
    // bottom: 5px;
    color: transparent;
    margin-bottom: -20px;
  }
  li.hooper-slide p {
    font-size: 16px;
    margin: 10px 0;
  }
  li.hooper-slide a {
    font-size: 14px;
  }
  .hooper-pagination {
    bottom: -30px;
  }
}
</style>
