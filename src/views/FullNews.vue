<template>
  <div class="news">
    <div class="news__container">
      <div class="news__main">
        <h3 class="news__main-title">
          {{ news.name }}
        </h3>
        <img class="news__main-img" :src="news.image" alt="" />
      </div>
      <div class="news__info">
        <div class="news__item" v-for="item in news.news" :key="item.id">
          <div class="news__item-content">
            <div class="news__item-text">
              <h6 class="news__item-title">
                {{ item.title }}
              </h6>
              <p>
                {{ item.text }}
              </p>
            </div>
            <img class="news__item-img" :src="item.image" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "FullNews",
  data() {
    return {
      news: "",
    };
  },
  created() {
    api.getNewsById(this.$route.params.id).then((res) => (this.news = res));
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";

.news {
  padding: rem(70) 0;
  &__container {
    max-width: rem(980);
    padding: 0 rem(10);
    margin: 0 auto;
  }

  &__main {
    text-align: center;
    margin-bottom: rem(60);
    &-title {
      font-family: "Playfair Display";
      font-weight: 400;
      font-size: rem(42);
      line-height: rem(45);
      color: #182040;
      margin-bottom: rem(10);
      text-align: center;
    }
    &-date {
      font-family: "Playfair Display";
      font-weight: 400;
      font-size: rem(25);
      line-height: rem(28);
      color: #182040;
      margin-bottom: rem(60);
    }
    &-img {
      width: rem(400);
      height: rem(400);
      margin: 0 auto;
      margin-top: rem(50);
    }
  }

  &__item {
    &:nth-child(2n) {
      .news__item-content {
        flex-direction: row-reverse;
      }
      .news__item-text {
        margin-left: rem(90);
      }
    }
    & + & {
      margin-top: rem(50);
    }
    &-title {
      text-align: start;
      font-family: "Playfair Display";
      font-size: rem(32);
      line-height: rem(45);
      color: #182040;
      margin-bottom: rem(32);
    }
    &-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-text {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: rem(18);
      line-height: 160%;
      color: #656c72;
      text-align: left;
      max-width: rem(610);
      margin-right: rem(90);
      p + p {
        max-width: rem(500);
        margin-top: rem(20);
      }
    }
    &-img {
      width: rem(260);
      height: rem(260);
      object-fit: cover;
      object-position: center;
    }
  }
}

@media (max-width: 600px) {
  .news {
    padding: rem(50) 0;
    &__main {
      &-title {
        font-size: 35px;
        line-height: 120%;
        margin-bottom: 10px;
      }
    }

    &__item {
      &:nth-child(2n) {
        .news__item-content {
          flex-direction: column;
        }
        .news__item-text {
          margin-bottom: 20px;
          margin-left: 0;
        }
      }
      & + & {
        margin-top: rem(50);
      }
      &-title {
        font-family: "Playfair Display";
        font-size: rem(32);
        line-height: rem(40);
        color: #182040;
        margin-bottom: rem(32);
      }
      &-content {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 0 20px;
      }
      &-text {
        font-family: "Playfair Display";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        max-width: 100%;
        margin-bottom: 20px;
        margin-right: 0;
        p + p {
          max-width: 100%;
          margin-top: 10px;
        }
      }
      &-img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        object-position: center;
      }
    }
  }
}
</style>
