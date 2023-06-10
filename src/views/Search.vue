<template>
  <section class="search">
    <div class="search-prints" v-if="prints.length > 0">
      <h2 class="search-prints__text">
        {{ $cookie.get("lang") === "Ru" ? "Принты" : "Prints" }}
      </h2>
      <div class="catalog-content_products">
        <ProductCard
          v-for="(product, index) in prints"
          :key="index"
          :item="product"
        />
      </div>
    </div>
    <div class="search-news" v-if="news.length > 0">
      <h2 class="search-prints__text">
        {{ $cookie.get("lang") === "Ru" ? "Новости" : "News" }}
      </h2>
      <div class="news-page__inner">
        <NewsCard v-for="n in news" :key="n.id" :item="n" />
      </div>
    </div>
    <div class="search-blogs" v-if="blogs.length > 0">
      <h2 class="search-prints__text">
        {{ $cookie.get("lang") === "Ru" ? "Блог" : "Blogs" }}
      </h2>
      <div class="blog-content_posts">
        <BlogCard
          v-for="(blog, index) in blogs"
          :key="blog.id"
          :blog="blog"
          :index="index % 2 !== 0 ? count++ : count"
        />
      </div>
    </div>
  </section>
</template>

<script>
import api from "../api/api";
export default {
  name: "AppSearch",
  components: {
    ProductCard: () => import("@/components/ProductCard.vue"),
    NewsCard: () => import("@/components/news/NewsCard.vue"),
    BlogCard: () => import("@/components/blog/BlogCard.vue"),
  },
  data() {
    return {
      prints: "",
      news: "",
      blogs: "",
      tempo: this.$route.query.search,
    };
  },
  updated() {
    this.tempo = this.$route.query.search;
  },
  methods: {
    search() {
      let temp = this.$route.query.search;
      api.getSearch({ filter: temp }).then((res) => {
        this.prints = res.prints;
        this.news = res.news;
        this.blogs = res.blogs;
        console.log(this.prints, "prints");
      });
    },
  },
  watch: {
    "$route.query.search": {
      handler() {
        this.search();
      },
    },
  },
  created() {
    let temp = this.$route.query.search;
    api.getSearch({ filter: temp }).then((res) => {
      this.prints = res.prints;
      this.news = res.news;
      this.blogs = res.blogs;
      console.log(this.prints, "prints");
    });
  },
};
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  min-height: 100vh;
  padding: 15px;
  text-align: left;
}

.catalog-content_products {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
.blog {
  min-height: 80vh;
  padding: rem(50) rem(87);
  width: 100%;
  margin: auto;
  &-row {
    display: flex;
    gap: rem(60);
    justify-content: space-between;
  }
  &_filter {
    border-right: rem(1) solid #dbe0e9;
    padding: 0 rem(26);
  }
  &-content {
    width: 100%;
    &_title {
      font-size: rem(42);
      margin-bottom: rem(32);
    }
    &__more {
      background-color: #f7bd7f;
      padding: rem(10);
      width: rem(200);
      font-size: rem(18);
      color: #fff;
      margin-top: rem(50);
    }
    &_sort {
      padding: rem(18) 0;
      display: flex;
      align-items: center;
      font-weight: 600;
      gap: rem(50);
      font-size: rem(16);
      &-items {
        display: flex;
        align-items: center;
        gap: rem(20);
        .isActive {
          color: #f7bd7f;
          text-decoration: underline;
        }
      }
    }
    &_posts {
      display: flex;
      flex-wrap: wrap;
      // gap: rem(50);
      justify-content: space-between;
    }
    &_top-filter {
      display: none;
    }
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

@media (max-width: 767px) {
  .blog {
    padding: 10px;
  }
  .blog {
    &-content {
      &_posts {
        gap: 20px !important;
      }
    }
  }
  .blog_filter {
    display: none;
  }
  .blog_filter.isActive {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    overflow-y: auto;
    z-index: 10;
    height: 100%;
    background: #fff;
  }
  .blog-content_top-filter {
    display: block;
    background: #eee;
    padding: 5px 20px;
  }
  .blog-content_top {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
  .blog-content_posts {
    justify-content: center;
  }
}
</style>
