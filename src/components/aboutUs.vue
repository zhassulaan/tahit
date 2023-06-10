<template>
  <div id="about" class="about">
    <div class="mobile-about__container">
      <h1 class="about__caption">{{ about.title }}</h1>
      <div class="about__content">
        {{ about.text }}
      </div>
      <div class="left">
        <div class="bigImg">
          <img
            v-if="about.images[0].image"
            :src="about.images[0].image"
            alt=""
          />
        </div>
        <div class="smallImages">
          <img
            v-if="about.images[1].image"
            :src="about.images[1].image"
            alt=""
          />
          <img
            v-if="about.images[2].image"
            :src="about.images[2].image"
            alt=""
          />
        </div>
      </div>
      <div class="about__right">
        <div class="benefits">
          <ul class="benefits__list">
            <li
              class="benefits__item"
              v-for="item in about.items"
              :key="item.id"
            >
              <img
                class="benefits__icon"
                src="../assets/about/benefit.png"
                alt=""
              />
              <p class="benefits__text">{{ item.content }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="about__container">
      <div class="left">
        <div class="bigImg">
          <img
            v-if="about.images[0].image"
            :src="about.images[0].image"
            alt=""
          />
        </div>
        <div class="smallImages">
          <img
            v-if="about.images[1].image"
            :src="about.images[1].image"
            alt=""
          />
          <img
            v-if="about.images[2].image"
            :src="about.images[2].image"
            alt=""
          />
        </div>
      </div>
      <div class="about__right">
        <h1 class="about__caption">{{ about.title }}</h1>
        <div class="about__content">
          {{ about.text }}
        </div>
        <div class="benefits">
          <ul class="benefits__list">
            <li
              class="benefits__item"
              v-for="item in about.items"
              :key="item.id"
            >
              <img
                class="benefits__icon"
                src="../assets/about/benefit.png"
                alt=""
              />
              <p class="benefits__text">{{ item.content }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  name: "AboutHome",
  components: {},
  data() {
    return {
      about: "",
    };
  },
  created() {
    api.getMainAbout().then((res) => {
      this.about = res[0];
      console.log(res, "aboutUs");
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.about {
  margin-top: rem(120);
  @media (max-width: 640px) {
    margin-top: 20px;
  }
}
.about__container {
  //   max-height: rem(430);
}
.bigImg img {
  width: rem(399);
  height: rem(430);
  object-fit: cover;
  @media (max-width: 840px) {
    width: rem(399);
    height: rem(399);
  }
}
.bigImg {
  padding-right: rem(30);
}
.smallImages {
  width: min-content;

  display: flex;
  flex-direction: column;
}
.smallImages img:first-child {
  width: rem(352);
  height: rem(250);
  @include media("tablet-landscape-up") {
    height: rem(150);
  }
}
.smallImages img:last-child {
  width: rem(352);
  height: rem(149);
  margin-top: rem(30);
}
h1.about__caption {
  margin-top: 0;
  text-align: left;
  margin-bottom: rem(23);
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: rem(42);
  line-height: rem(56);
  color: #182040;
}
.benefits {
  // margin-top: rem(103);
  border-top: rem(1) solid #dbe0e9;
  padding-top: rem(53);
  margin-top: rem(50);
  @media (max-width: 640px) {
    padding-top: 15px;
    margin-top: 15px;
  }
}
@media (max-width: 700px) {
  .benefits {
    margin-top: 20px;
  }
  .benefits__icon {
    width: 20px !important;
    height: 20px !important;
  }
  .benefits__item p {
    font-size: 14px !important;
    text-align: left;
  }
  .benefits__text {
    font-size: 14px;
  }
  .benefits__item {
    max-width: 350px;
  }
  .about__content {
    font-size: 14px !important;
    max-height: unset !important;
    height: unset !important;
  }
  .benefits__list {
    grid-template-columns: 1fr !important;
  }
  .left {
    width: 100%;
    // max-width: rem(200) !important;
  }
  .smallImages {
    width: 100% !important;
    max-width: 200px;
    display: block !important;
    img {
      object-fit: cover;
    }
  }
  .left img {
    width: 100% !important;
    width: 200px;
    height: 100%;
  }
}
@media (max-width: 700px) {
  .benefits__list {
    width: 320px !important;
  }
  .about__content {
    line-height: unset !important;
  }
}
.benefits__list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;
  margin: 0;
  width: rem(700);
}
.benefits__item {
  display: flex;
  align-items: center;
  //   width: rem(275);
}
.benefits__item p {
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  margin: 0;
  font-size: rem(18);
  line-height: 160%;
  display: flex;
  align-items: center;
  color: #656c72;
}
.benefits__item:nth-child(1n) {
  margin-bottom: rem(19);
}
.benefits__icon {
  margin-right: rem(12);
  width: rem(15);
  height: rem(15);
}

.left {
  display: flex;
  margin-right: rem(45);
  @include media("tablet-landscape-up") {
    justify-content: center;
  }
}
.about__content {
  text-align: left;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: 160%;
  color: #656c72;
  width: 100%;
  max-width: rem(1014);
  @media (max-width: 840px) {
    margin-bottom: 15px;
  }
}
.about__container {
  margin: 0 auto;
  width: 100%;
  padding: 0 rem(40);
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    display: none;
  }
}

.mobile-about__container {
  margin: 0 auto;
  width: 100%;
  padding: 0 rem(40);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 840px) {
    display: none;
  }
}
</style>
