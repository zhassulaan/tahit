<template>
  <div class="product-gallery">
    <div class="product-slider__pagination">
      <div class="product-slider__pagination-inner">
        <swiper ref="swiperPagination" :options="paginationOptions">
          <swiper-slide v-for="(item, index) in prints" :key="item">
            <img
              class="product-slider__pagination-img"
              :class="{ active: index === slideIndex }"
              :src="item"
              alt=""
              @click.prevent="getSlideFromPagination(index)"
            />
          </swiper-slide>
        </swiper>
      </div>
      <button @click="nextPagination" class="product-slider__pagination-next">
        <img src="@/assets/img/icons/arrow-bottom.svg" alt="" />
      </button>
    </div>
    <div class="product-slider">
      <swiper
        ref="swiperSlider"
        :options="sliderOptions"
        @slideChange="changeSlide"
      >
        <swiper-slide v-for="item in prints" :key="item">
          <img :src="bazis" alt="" class="product-bazis" />
          <img class="product-slider__img" :src="item" alt="" />
        </swiper-slide>
      </swiper>
      <button
        class="product-slider__arrow product-slider__arrow-prev"
        @click="prevSlide"
      >
        <img src="@/assets/img/icons/arrow-left.svg" alt="" />
      </button>
      <button
        class="product-slider__arrow product-slider__arrow-next"
        @click="nextSlide"
      >
        <img src="@/assets/img/icons/arrow-right.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSlider",
  props: ["bazis", "prints"],
  data() {
    return {
      slideIndex: 0,
      paginationOptions: {
        slidesPerView: 3,
        breakpoints: {
          900: {
            direction: "vertical",
          },
          500: {
            direction: "horizontal",
          },
        },
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
  watch: {
    slideIndex: {
      handler() {
        this.getValue();
      },
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

.product-bazis {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 0;
  opacity: 100;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  transform: translate(-50%, -50%);
}
.product-gallery {
  width: 100%;
  border-right: 1px solid #dbe0e9;
  padding-right: rem(60);
  justify-content: space-between;
  display: flex;
}
.product-slider {
  // width: rem(989);
  padding: 0 rem(50);
  position: relative;
  &__img {
    width: 100%;
    height: 100%;
    opacity: 0.7;
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
    margin-right: rem(50);
    .swiper-slide {
      width: rem(184);
      height: rem(175);
    }
    &-inner {
      width: rem(185);
    }
    &-img {
      width: rem(184);
      height: rem(175);
      margin-bottom: rem(20);
      cursor: pointer;
      &.active {
        border: rem(5) solid #f7bd7f;
      }
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
  width: rem(623);
  height: rem(620);
}

@media (max-width: 900px) {
  .product-gallery {
    flex-direction: column-reverse;
    align-items: center;
    border: none;
    padding: 0;
  }
  .product-slider__pagination {
    margin: 20px;
    display: flex;
    .swiper-container {
      height: auto;
    }
  }
  .product-slider__pagination-inner {
    width: 100%;
  }
  .product-slider__pagination-next {
    flex-direction: column;
    img {
      transform: rotate(-90deg);
    }
  }
}

@media (max-width: 550px) {
  .product-slider {
    .swiper-container {
      width: 250px;
      height: 250px;
    }
  }
  .product-slider__pagination-img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  .product-slider__pagination-next {
    display: none;
  }
}
</style>
