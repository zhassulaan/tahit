<!-- @format -->

<template>
  <div class="blog">
    <div class="container">
      <div class="blog-title">
        {{ blogs.name }}
      </div>
      <div class="blog-header">
        <div class="blog-header_info">
          <div class="blog-header_info-title">
            {{ blogs.title }}
          </div>
          <div class="blog-header_info-text">
            {{ blogs.text }}
          </div>
        </div>
        <div class="blog-header_img">
          <img :src="blogs.image" alt="" />
        </div>
      </div>
      <div class="blog-row">
        <div class="blog-contents">
          <div class="blog-content" v-for="item in blogs.blogs" :key="item.id">
            <div class="blog-content_title">
              {{ item.title }}
            </div>
            <div class="blog-content_gallery">
              <blog-slider :items="item.images" />
            </div>
            <div class="blog-content_text">
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="blog-content_sitebar">
          <div class="blog-sitebar" v-for="(item, index) in news" :key="index">
            <router-link
              :to="{ name: 'FullNews', params: { id: item.id } }"
              class="blog-sitebar_info"
              v-if="index < 3">
              <div class="blog-sitebar_info-title">
                {{ item.name }}
              </div>
              <div class="blog-sitebar_info-text">
                {{ item.text }}
              </div>
              <div class="blog-sitebar_info-row">
                <div class="blog-sitebar_info-data">
                  {{ item.updated_at.split("T")[0] }}
                </div>
                <router-link
                  :to="{ name: 'FullNews', params: { id: item.id } }">
                  <div class="blog-sitebar_info-btn">
                    {{
                      $cookie.get("lang") === "Ru"
                        ? `Узнать больше`
                        : `Көбірек көру`
                    }}
                  </div>
                </router-link>
              </div>
            </router-link>
            <router-link
              :to="{ name: 'FullNews', params: { id: item.id } }"
              class="blog-sitebar_img"
              v-if="index < 3">
              <img :src="item.image" alt="" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
export default {
  name: "FullBlog",
  components: {
    BlogSlider: () => import("@/components/sliders/BlogSlider.vue"),
  },
  data() {
    return {
      blogs: "",
      news: "",
      lang: this.$cookie.get("lang"),
    };
  },
  created() {
    api.getMainNews().then((res) => {
      this.news = res;
    });
    api.getBlogById(this.$route.params.id).then((res) => {
      this.blogs = res;
      console.log(res, "blogs");
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.container {
  max-width: rem(1800);
}
.blog {
  font-family: "Playfair Display";
  &-title {
    margin: rem(32) 0;
    font-size: rem(42);
  }
  &-header {
    display: flex;
    justify-content: space-between;
    gap: rem(30);
    margin-bottom: rem(90);
    &_img {
      width: 50%;
      img {
        width: 100%;
        height: rem(550);
        object-fit: cover;
      }
    }
    &_info {
      width: 50%;
      text-align: left;
      // width: rem(764);
      &-title {
        font-size: rem(32);
        line-height: rem(39);
        margin-bottom: rem(60);
      }
      &-text {
        color: #656c72;
        font-size: rem(20);
        & + & {
          margin-top: 10px;
        }
      }
    }
  }
  &-row {
    display: flex;
    justify-content: space-between;
  }
  &-content {
    width: rem(883);
    text-align: left;

    &_title {
      font-family: "Playfair Display";
      font-style: normal;
      font-weight: 400;
      font-size: rem(42);
      line-height: rem(56);
      text-align: center;
      color: #182040;
      margin-bottom: rem(50);
    }
    &_text {
      color: #656c72;
      font-size: rem(20);
      margin: rem(82) 0;
    }
  }
  &-sitebar {
    display: flex;
    margin-bottom: rem(50);
    // align-items: center;
    &_info {
      width: rem(380);
      background: #f0f2f5;
      padding: rem(30);
      text-align: left;
      &-title {
        font-size: rem(24);
        margin-bottom: rem(10);
      }
      &-text {
        font-size: rem(16);
        color: #656c72;
        margin-bottom: rem(16);
      }
      &-data {
        font-size: rem(16);
        font-weight: 500;
        color: #464c52;
      }
      &-btn {
        font-size: rem(16);
        text-decoration-line: underline;
        color: #f7bd7f;
        font-weight: 600;
        cursor: pointer;
      }
      &-row {
        display: flex;
        justify-content: space-between;
      }
    }
    &_img {
      width: rem(256);
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
@media (max-width: 900px) {
  .blog-row {
    display: block;
  }
  .blog-content {
    margin: 0 auto;
  }
  .blog-sitebar {
    justify-content: center;
  }
}

@media (max-width: 600px) {
  .blog-header {
    display: block;
  }
  .blog-header_info-title {
    margin-bottom: 20px;
  }
  .blog-header_info-text {
    margin-top: 5px;
  }
  .blog-header_info {
    width: 100%;
    margin-bottom: 30px;
  }
  .blog-header_img {
    width: 100%;
  }
  .blog-content {
    width: 100%;
  }
  .blog-content_text {
    margin: 30px 0;
  }
}
</style>
