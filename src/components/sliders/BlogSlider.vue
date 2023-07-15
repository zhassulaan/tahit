<template>
  <div class="blog-gallery">
    <div class="blog-slider">
      <swiper
        ref="swiperSlider"
        :options="sliderOptions"
        @slideChange="changeSlide"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <img class="blog-slider__img" :src="item.image" alt="" />
        </swiper-slide>
      </swiper>
    </div>
    <div class="blog-slider__pagination">
      <div class="blog-slider__pagination-inner">
        <swiper ref="swiperPagination" :options="paginationOptions">
          <swiper-slide v-for="(item, index) in items" :key="index">
            <img
              class="blog-slider__pagination-img"
              :class="{ active: index === slideIndex }"
              :src="item.image"
              alt=""
              @click.prevent="getSlideFromPagination(index)"
            />
            <p class="blog-slider__pagination-text">{{ item.text }}</p>
          </swiper-slide>
        </swiper>
      </div>
      <!-- <button @click="nextPagination" class="blog-slider__pagination-next">
        <img src="@/assets/img/icons/arrow-bottom.svg" alt="" />
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogSlider",
  props: ["items"],
  data() {
    return {
      slideIndex: 0,
      paginationOptions: {
        slidesPerView: 3,
        breakpoints: {
          900: {
            direction: "horizontal",
          },
          500: {
            direction: "horizontal",
          },
          300: {
            spaceBetween: 20,
          },
        },
        spaceBetween: 40,
      },
      sliderOptions: {
        slidesPerView: 1,
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs?.swiperSlider;
    },
    pagination() {
      return this.$refs?.swiperPagination;
    },
  },
  methods: {
    changeSlide(e) {
      this.slideIndex = e.activeIndex;
      this.pagination.swiperInstance.slideTo(this.slideIndex);
    },
    prevSlide() {
      this.swiper?.swiperInstance.slidePrev();
    },
    nextSlide() {
      this.swiper.swiperInstance.slideNext();
    },
    nextPagination() {
      this.pagination.swiperInstance.slideNext();
    },
    getSlideFromPagination(index) {
      this.slideIndex = index;
      this.swiper.swiperInstance.slideTo(this.slideIndex);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
// .blog-gallery {
//   width: 100%;
//   border-right: 1px solid #dbe0e9;
//   padding-right: rem(60);
//   justify-content: space-between;
//   display: flex;
// }
.blog-slider {
  // width: rem(989);
  // padding: 0 rem(50);
  position: relative;
  margin-bottom: rem(48);
  &__img {
    width: rem(883);
    height: rem(592);
    object-fit: cover;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    &-prev {
      left: 0;
      img {
        width: rem(40);
        height: rem(30);
      }
    }
    &-next {
      right: 0;
      img {
        width: rem(40);
        height: rem(30);
      }
    }
  }

  &__pagination {
    // margin-right: rem(50);
    .swiper-slide {
      // width: rem(184);
      // height: rem(175);
      // width: rem(883);
      // height: rem(592);
    }
    &-inner {
      width: 100%;
    }
    &-img {
      width: 100%;
      // width: rem(235);
      height: rem(235);
      // margin-bottom: rem(20);
      cursor: pointer;
      &.active {
        border: rem(5) solid #f7bd7f;
      }
    }
    &-text {
      font-size: rem(16);
      margin-top: rem(10);
      text-align: center;
    }

    &-next {
      background-color: #f0f2f5;
      padding: rem(10);
      width: 100%;
      display: flex;
      justify-content: center;
      img {
        width: rem(50);
        height: rem(25);
      }
    }
  }
}
.swiper-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
}

@media (max-width: 900px) {
  .blog-gallery {
    flex-direction: column-reverse;
    align-items: center;
    border: none;
    padding: 0;
  }
  .blog-slider__pagination {
    margin: 20px;
    display: flex;
    .swiper-container {
      height: auto;
    }
  }
  .blog-slider__pagination-inner {
    width: 100%;
  }
  .blog-slider__pagination-next {
    flex-direction: column;
    img {
      transform: rotate(-90deg);
    }
  }
}

@media (max-width: 550px) {
  .blog-slider {
    margin-bottom: 20px;
  }
  .blog-slider__pagination {
    margin: 0;
  }

  .blog-slider__pagination-img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  .blog-slider__pagination-next {
    display: none;
  }
}

@media (max-width: 400px) {
  .blog-slider__img {
    height: 300px;
  }
}
</style>
