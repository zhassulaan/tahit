<template>
  <router-link
    :to="{ name: 'FullBlog', params: { id: blog.id } }"
    class="blog-card"
    :style="index % 2 === 0 ? 'flex-direction: row-reverse' : ''"
  >
    <img :src="blog.image" alt="" />
    <div class="blog-card_info">
      <div class="blog-card_info-title" style="color: black">
        {{ blog.name }}
      </div>
      <p class="blog-card_info-text">{{ blog.text }}</p>
      <div class="blog-card_info-bottom">
        <button
          style="text-decoration: underline; font-weight: 600; color: #f7bd7f"
        >
          {{ $cookie.get("lang") === "Ru" ? `Узнать больше` : `See more` }}
        </button>
        <div class="blog-card_info-data" style="color: black">
          {{ blog.updated_at.split("T")[0] }}
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "BlogCard",
  props: ["blog", "index"],
  data() {
    return {
      reverse: "",
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.blog-card {
  .blog-card_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 100%;
    max-height: 28.75rem;
  }
  & {
    display: flex;
    align-items: center;
    position: relative;
    flex-direction: wrap;
    @media (max-width: 640px) {
      flex-direction: column;
    }
    img {
      width: rem(460);
      height: rem(460);
      object-fit: cover;
    }
    .blog-card_info {
      font-size: rem(15);
      width: rem(460);
      height: rem(460);
      background: #f0f2f5;
      padding: rem(50) rem(30);
      text-align: left;
      @media (max-width: 640px) {
        height: rem(260);
      }

      &-title {
        font-size: rem(32);
        font-family: "Playfair Display";
        margin-bottom: rem(32);
      }
      &-text {
        font-size: rem(18);
        color: #656c72;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -moz-box;
        display: -webkit-box;
        line-clamp: 6;
        box-orient: vertical;
        -moz-box-orient: vertical;
        -webkit-line-clamp: 6;
        -webkit-box-orient: vertical;
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        font-weight: 500;
        margin-top: rem(52);
        a {
          text-decoration: underline;
          font-weight: 600;
          color: #f7bd7f;
        }
      }
    }
  }

  @media screen and (min-width: 0px) and (max-width: 640px) {
    .blog-card_info {
      text-align: center;
      height: rem(160);
    }
  }

  // &:nth-child(3) {
  //   display: flex;
  //   align-items: center;
  //   position: relative;
  //   width: rem(697);
  //   height: rem(505);
  //   img {
  //     width: rem(697);
  //     height: rem(505);
  //     object-fit: cover;
  //   }
  //   .blog-card_info {
  //     font-size: rem(15);
  //     background: #F0F2F5;
  //     padding: rem(45);
  //     width: rem(401);
  //     text-align: left;
  //     position: absolute;
  //     left: 0;
  //     bottom: 0;
  //     &-title {
  //       font-size: rem(16);
  //       font-family: 'Playfair Display';
  //       margin-bottom: rem(42);
  //     }
  //     &-bottom {
  //       display: flex;
  //       justify-content: space-between;
  //       font-weight: 500;
  //       margin-top: rem(42);
  //       a {
  //         text-decoration: underline;
  //         font-weight: 600;
  //       }
  //     }
  //   }
  // }
  // &:nth-child(4) {
  //   display: flex;
  //   align-items: center;
  //   position: relative;
  //   flex-direction: row-reverse;
  //   img {
  //     width: rem(576);
  //     height: rem(536);
  //     object-fit: cover;
  //   }
  // .blog-card_info {
  //   font-size: rem(15);
  //   background: #F0F2F5;
  //   padding: rem(50) rem(30);
  //   width: rem(341);
  //   text-align: left;

  //   &-title {
  //     font-size: rem(20);
  //     font-family: 'Playfair Display';
  //     margin-bottom: rem(32);
  //   }
  //   &-bottom {
  //     display: flex;
  //     justify-content: space-between;
  //     font-weight: 500;
  //     margin-top: rem(52);
  //     a {
  //       text-decoration: underline;
  //       font-weight: 600;
  //     }
  //   }
  // }
  // }

  //   img {
  //     width: rem(338);
  //   }
  //   p {
  //     font-size: rem(18);
  //   }
  //   a {
  //     font-weight: 700;
  //     font-size: rem(16);
  //     text-decoration-line: underline;
  //     color: #F7BD7F;
  //   }
  // }
  // @media (max-width: 767px) {
  //   .blog-card {
  //     width: 100%;
  //     img {
  //       width: 100%;
  //     }
  //   }
}
</style>
