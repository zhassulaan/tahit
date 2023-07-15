<template>
  <div class="news-page">
    <div class="container">
      <h3 class="news-page__title">{{ $cookie.get("lang") === "Ru" ? "Новости" : "Жаңалықтар" }}</h3>
      <div class="news-page__inner">
        <NewsCard
          v-for="(n, index) in news"
          :key="n.id"
          :item="n"
          v-show="index >= (page - 1) * 6 && index <= page * 6"
        />
      </div>
      <div class="news-content_pagination">
        <paginate
          v-if="paginationPages > 1"
          v-model="page"
          :page-count="paginationPages"
          :page-range="2"
          :margin-pages="1"
          :page-class="'page-item'"
          :active-class="'myActiveBtn'"
          :prev-text="'<'"
          :next-text="'>'"
          :container-class="'pagination'"
          class="qwe"
        >
        </paginate>
      </div>
      <!-- <button class="news-page__more" @click="seeMore">Показать еще</button> -->
    </div>
  </div>
</template>

<script>
import api from "../api/api";
import Paginate from "vuejs-paginate";

export default {
  name: "Blogs",
  components: {
    Paginate,
    NewsCard: () => import("@/components/news/NewsCard.vue"),
  },
  data() {
    return {
      page: 1,
      paginationPages: 0,
      currentPage: 1,
      filterMob: false,
      news: [],
    };
  },
  created() {
    api.getMainNews().then((res) => {
      this.news = res;
      this.paginationPages = Math.round(res.length / 6);
      console.log(res, "news");
    });
  },
  methods: {
    // close() {
    //   this.filterMob = false
    // }
    close() {
      this.filterMob = false;
    },
    seeMore() {
      this.news.push(...this.news.slice(0, 8));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.news-page {
  padding: rem(10) 0 rem(50);
  &__title {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 400;
    font-size: rem(42);
    line-height: rem(56);
    text-align: center;
    color: #182040;
    margin-bottom: rem(50);
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
    margin-bottom: rem(50);
  }

  &__more {
    background-color: #f7bd7f;
    padding: rem(10);
    width: rem(200);
    font-size: rem(18);
    color: #fff;
  }
}
.pagination {
  font-size: rem(18);
  display: flex;
  gap: rem(28);
  justify-content: center;
  align-items: center;
  margin-top: rem(60);
  &_items {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &_item {
    width: rem(28);
    height: rem(28);
    display: flex;
    justify-content: center;
    align-items: center;
    &.isActive {
      background: #f7bd7f;
    }
  }
  &_arr {
    svg {
      width: rem(7);
      height: rem(14);
    }
  }
}
@media (max-width: 900px) {
}

@media (max-width: 600px) {
  .news-page__inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .news-page__inner {
    grid-template-columns: 1fr;
  }
}
</style>
