<template>
  <div id="news" class="news">
    <div class="mobile-news__container">
      <h2 class="news__header">{{ lang === "Ru" ? "Новости" : "News" }}</h2>
      <h1 class="news__subheader">
        {{ lang === "Ru" ? "Узнайте первыми" : "Find out first" }}
      </h1>
      <div class="news__slider">
        <router-link
          :to="{ name: 'FullNews', params: { id: item.id } }"
          class="news__one"
          v-for="item in news"
          :key="item.id"
        >
          <img :src="item.image" alt="qweqwe" class="mobile-news__img" />
          <p class="mobile-news__title">{{ item.name }}</p>
        </router-link>
      </div>
    </div>
    <div class="news__container">
      <h2 class="news__header">{{ lang === "Ru" ? "Новости" : "News" }}</h2>
      <h1 class="news__subheader">
        {{ lang === "Ru" ? "Узнайте первыми" : "Find out first" }}
      </h1>
      <div class="news__collage">
        <div class="news__colWrapper">
          <router-link
            :to="{ name: 'FullNews', params: { id: news[0].id } }"
            class="news__column"
          >
            <img class="newsImg" :src="news[0].image" alt="" />
            <div class="news__contentInner">
              <div class="news__content">
                <h3>{{ news[0].title }}</h3>
                <p class="news__date">
                  {{ news[0].updated_at.split("T")[0] }}
                </p>

                <p>
                  {{ news[0].text }}
                </p>
                <div class="readMore">
                  <router-link
                    :to="{ name: 'FullNews', params: { id: news[0].id } }"
                    >{{
                      lang === "Ru" ? "Узнать больше" : "See more"
                    }}</router-link
                  >
                  <img src="../assets/news/stroke.png" alt="" />
                </div>
              </div>
            </div>
          </router-link>
          <div class="news__column">
            <router-link
              :to="{ name: 'FullNews', params: { id: news[1].id } }"
              class="news__content"
            >
              <div class="news__contentInner">
                <h3>{{ news[1].title }}</h3>
                <p class="news__date">{{ news[1].updated_at.split("T")[0] }}</p>
                <p>
                  {{ news[1].text }}
                </p>
                <div class="readMore">
                  <router-link
                    :to="{ name: 'FullNews', params: { id: news[1].id } }"
                    >{{
                      lang === "Ru" ? "Узнать больше" : "See more"
                    }}</router-link
                  >
                  <img src="../assets/news/stroke.png" alt="" />
                </div>
              </div>
              <img class="newsImg" :src="news[1].image" alt="" />
            </router-link>
          </div>
        </div>
        <router-link
          :to="{ name: 'FullNews', params: { id: news[2].id } }"
          class="news__bigColumn"
        >
          <img
            class="bigColumn__newsImg"
            src="../assets/news/bigImg.png"
            alt=""
          />
          <div class="bigColumn__content">
            <h3>{{ news[2].title }}</h3>
            <p class="news__date">{{ news[2].updated_at.split("T")[0] }}</p>
            <p>
              {{ news[2].text }}
            </p>
            <div class="readMore">
              <router-link
                :to="{ name: 'FullNews', params: { id: news[2].id } }"
              >
                {{ lang === "Ru" ? "Узнать больше" : "See more" }}</router-link
              >
              <img src="../assets/news/stroke.png" alt="" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  name: "NewsHome",
  components: {},
  data() {
    return {
      lang: this.$cookie.get("lang"),
      news: "",
    };
  },
  created() {
    api.getMainNews().then((res) => {
      this.news = res;
      console.log(res, "news");
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.news__column {
  height: 100%;
}
.news__header {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: rem(42);
  line-height: rem(56);
  text-align: center;
  color: #182040;
}
.news__container {
  position: relative;
  margin-bottom: 40px;
  @media (max-width: 640px) {
    display: none;
  }
}

.mobile-news__container {
  position: relative;
  margin-bottom: 20px;
  padding: 0 rem(40);
  @media (min-width: 640px) {
    display: none;
  }
}

.news__slider {
  display: flex;
  align-items: center;
  gap: 10px;
  overflow: scroll;
}

.news__one {
  position: relative;
  width: fit-content;
  height: fit-content;
}

.mobile-news__img {
  height: 170px;
  width: 240px;
}

.mobile-news__title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 240px;
  height: 90px;
  padding: 8px;
  margin: 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(2.5px);
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: #464c52;
}

.news__date {
  margin: 0;
}

.news__subheader {
  position: absolute;
  left: 0vw;
  max-height: fit-content;
  width: 100%;
  top: rem(-55);
  z-index: -1;
  font-family: "Comforter";
  font-style: normal;
  font-weight: 400;
  font-size: rem(64);
  line-height: rem(90);
  text-align: center;
  color: #dbe0e9;
  transform: rotate(-0.88deg);
}
.news__bigColumn .newsImg {
  //   width: rem(903.61);
}
h3 {
  //   margin-bottom: rem(2010);
}
.news__contentInner {
  opacity: 0.9;
  background-color: #ffffff;
  padding: rem(25);
  padding-top: rem(60);
  height: 50%;
}
.newsImg {
  width: rem(467.44);
  height: 50%;
}
.bigColumn__newsImg {
  width: rem(903.61);
  height: 100%;
  @include media("tablet-landscape-up") {
    width: rem(467.44);
    height: auto;
  }
}
.news__bigColumn {
  position: relative;
  @include media("tablet-landscape-up") {
    // max-width: min-content;
    margin: 0 auto;
  }
}
.news__content {
  margin: 0;
  height: 100%;
  @include media("tablet-landscape-up") {
    display: flex;
    // flex-direction: column-reverse;
    flex-wrap: wrap;
  }
}
.news__colWrapper {
  display: flex;
  @include media("tablet-landscape-up") {
    max-width: min-content;
    margin: 0 auto;
    display: block;
  }
}
.bigColumn__content {
  @include media("tablet-landscape-up") {
    position: unset;
    margin: 0 auto;
  }
  bottom: 0;
  opacity: 0.9;
  margin: 0;
  left: 0;
  position: absolute;
  background-color: #ffffff;
  width: rem(467.7);
  height: 50%;
  padding: rem(35);
  padding-top: rem(57);
}
.news__content h3 {
  font-family: "Playfair Display";
  margin-top: rem(39);
  font-style: normal;
  font-weight: 600;
  font-size: rem(22);
  line-height: rem(29);
  color: #464c52;
  margin: 0;
}
.bigColumn__content h3 {
  margin: 0;
  margin: 0;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 600;
  font-size: rem(22);
  line-height: rem(29);
  color: #464c52;
}
.news__content p {
  // margin: 0;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: 160%;
  color: #656c72;
  text-align: left;
}
.bigColumn__content p {
  // margin: 0;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: 160%;
  color: #656c72;
  text-align: left;
}
a {
  font-family: "Lato Bold";
  font-style: normal;
  font-weight: 600;
  font-size: rem(18);
  line-height: 160%;
  text-align: center;
  text-decoration-line: underline;
  color: #464c52;
}

.news__column:nth-child(2n) .news__content {
  @include media("tablet-landscape-up") {
    display: flex;
    flex-direction: column-reverse;
    // flex-direction: column;
  }
}
.news__collage {
  padding-left: rem(40);
  padding-right: rem(40);
  //   height: rem(908.15);
}

.news__collage {
  display: flex;
  @include media("tablet-landscape-up") {
    display: block;
  }
}
.readMore img {
  width: rem(24);
  height: rem(24);
}
.readMore {
  display: flex;
  margin-top: rem(30);
  justify-content: space-between;
  width: 100%;
}

@media (max-width: 700px) {
  .news__container {
    margin-bottom: 50px;
  }
  .news__subheader {
    color: transparent;
    top: -7px;
    margin: 0;
  }
  .news__header {
    margin-bottom: 35px;
  }
  .news__contentInner {
    padding: 0;
  }
  .news__column {
    background-color: #ffffff;
    opacity: 0.9;
    margin-bottom: 50px;
  }
  .bigColumn__content {
    padding: 0;
    margin-top: 20px;
  }
  .readMore {
    margin: rem(30) 0;
  }
  .news__column:first-child {
    display: block !important;
  }
  .news__column:nth-child(2n) {
    display: none;
    &:first-child {
      display: block !important;
    }
  }
  .news__bigColumn {
    display: none;
  }
}
</style>
