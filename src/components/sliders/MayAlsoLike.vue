<template>
  <div class="may-like">
    <div class="container">
      <h3 class="may-like__title">
        {{ lang === "Ru" ? "Вам также может понравиться" : "May also like" }}
      </h3>
      <div class="may-like__slider">
        <swiper ref="swiperSlider" :options="sliderOptions">
          <swiper-slide v-for="item in print.prints" :key="item.id">
            <router-link
              :to="{ name: 'Product', params: { id: item.id } }"
              @click.native="$router.go()"
            >
              <div
                class="may-like__item"
                v-for="img in item.images"
                :key="img.id"
              >
                <img
                  v-if="img.is_main"
                  class="may-like__img"
                  :src="img.image"
                  alt=""
                  :class="{ active: index === slideIndex }"
                  @click.prevent="getSlideFromPagination(index)"
                />
                <p v-if="img.is_main" class="may-like__text">
                  {{ item.name }}
                </p>
              </div>
            </router-link>
          </swiper-slide>
        </swiper>
        <div class="may-like__arrows">
          <button
            class="may-like__arrow may-like__arrow-prev"
            @click="prevSlide"
          >
            <img src="@/assets/img/icons/arrow-left.svg" alt="" />
          </button>
          <button
            class="may-like__arrow may-like__arrow-next"
            @click="nextSlide"
          >
            <img src="@/assets/img/icons/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MayAlsoLike",
  props: ["print"],
  data() {
    return {
      lang: this.$cookie.get("lang"),
      sliderOptions: {
        slidesPerView: 6,
        breakpoints: {
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1023: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        },
      },
      items: [],
    };
  },
  computed: {
    swiper() {
      return this.$refs?.swiperSlider;
    },
  },

  methods: {
    prevSlide() {
      this.swiper?.swiperInstance.slidePrev();
    },
    nextSlide() {
      this.swiper.swiperInstance.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.swiper-container {
  overflow: hidden;
}
.may-like {
  .container {
    position: relative;
  }
  &__slider {
    margin: 0 auto;
    max-width: rem(1680);
  }
  &__title {
    font-family: "Lato Bold";
    font-style: normal;
    font-weight: 700;
    font-size: rem(22);
    line-height: 130%;
    color: #464c52;
    margin-bottom: rem(35);
    text-align: center;
  }

  &__item {
    text-align: center;
  }

  &__img {
    width: rem(226);
    height: rem(213);
    margin: 0 auto;
  }

  &__text {
    margin-top: rem(30);
    font-weight: 600;
    font-size: rem(16);
    line-height: 130%;
    color: #464c52;
  }

  &__arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    img {
      width: rem(24);
      height: rem(24);
    }

    &-prev {
      left: -15px;
    }
    &-next {
      right: -15px;
    }
  }
}
</style>
