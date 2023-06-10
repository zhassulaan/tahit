<template>
  <div class="blog">
    <div class="container">
      <div class="blog-row">
        <div class="blog-content">
          <div class="blog-content_top">
            <div class="blog-content_title">
              {{ $cookie.get("lang") === "Ru" ? `Блог` : `Blog` }}
            </div>
          </div>
          <div class="blog-content_posts">
            <BlogCard
              v-for="(blog, index) in blogs"
              :key="blog.id"
              :blog="blog"
              :index="index % 2 !== 0 ? count++ : count"
            />
          </div>
          <!-- <button class="blog-content__more" @click="blogs.push(...blogs)">
            Показать еще
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "Blogs",
  components: {
    // Filterblog: () => import("@/components/blog/Filter.vue"),
    BlogCard: () => import("@/components/blog/BlogCard.vue"),
  },
  data() {
    return {
      filterMob: false,
      blogs: [],
      count: 1,
    };
  },
  created() {
    api.getMainBlog().then((res) => {
      this.blogs = res;
      console.log(res);
    });
  },
  methods: {
    // close() {
    //   this.filterMob = false
    // }
    close() {
      this.filterMob = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";

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
