<template>
  <div class="projects">
    <div class="projects__container">
      <h2 class="projects__header">
        {{ lang === "Ru" ? "Наши продукты" : "Біздің өнімдер" }}
      </h2>
      <h2 class="projects__subHeader comfort">
        {{ lang === "Ru" ? "Эксклюзивный дизайн" : "Эксклюзивті дизайн" }}
      </h2>
      <div>
        <div v-for="item in projectImages" :key="item.id">
          <div v-if="item.is_main" class="projects__list">
            <div
              v-for="print in item.prints"
              class="projects__item"
              :key="print.id"
            >
              <div v-for="img in print.images" :key="img.id">
                <router-link
                  v-if="img.is_main"
                  :to="{ name: 'Product', params: { id: print.id } }"
                >
                  <img :src="print.images[0].image" alt="" />
                  <img
                    src="../assets/projects/arrow.svg"
                    alt=""
                    style="z-index: 5"
                  />
                  <p class="item__name" style="z-index: 5">{{ print.name }}</p>
                </router-link>
                <router-link
                  :to="{ name: 'Product', params: { id: item.prints[0].id } }"
                  style=""
                >
                  <div class="background-print"></div
                ></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div v-for="item in projectImages" :key="item.id" class="overlow-sm">
          <div v-if="item.is_main" class="swiperSlider_mob">
            <div v-for="print in item.prints" :key="print.id">
              <li
                v-for="img in print.images"
                :key="img.id"
                class="projects__item"
                style="position: relative"
              >
                <router-link
                  v-if="img.is_main"
                  :to="{ name: 'Product', params: { id: item.prints[0].id } }"
                >
                  <img :src="print.images[0].image" alt="" />
                  <img src="../assets/projects/arrow.svg" alt="" />

                  <p class="item__name">{{ print.name }}</p>
                </router-link>
                <router-link
                  :to="{ name: 'Product', params: { id: item.prints[0].id } }"
                  class="background-print"
                ></router-link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";
import routeParams from "../store/index";

export default {
  components: {},
  data() {
    return {
      routeParams: routeParams,
      project: "",
      lang: this.$cookie.get("lang"),
      projectImages: [],
      hooperSettings: {
        itemsToShow: 1,
        // centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          900: {
            itemsToShow: 4,
            pagination: "fraction",
          },
        },
      },
    };
  },
  created() {
    api.getMainOffer().then((res) => {
      this.projectImages = res;
      console.log(res, "projImages");
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.projects {
  position: relative;
}
.projects__subHeader {
  position: absolute;
  left: 38%;
  top: rem(110);
  z-index: -1;
  font-family: "Comforter";
  font-style: normal;
  font-weight: 400;
  font-size: rem(64);
  line-height: rem(90);
  text-align: center;
  color: #dbe0e9;
  transform: rotate(-0.88deg);
}
.item__name {
  font-family: "Lato Black";
  font-style: normal;
  font-weight: 700;
  font-size: rem(20);
  line-height: rem(24);
  color: #ffffff;
  position: absolute;
  margin: 0;
  bottom: rem(34);
  left: rem(27);
}
.projects__header {
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: rem(42);
  line-height: rem(56);
  text-align: center;
  color: #182040;
  margin: 0;
  margin-bottom: rem(60);
  margin-top: rem(128);
  @media (max-width: 640px) {
    margin-bottom: 15px;
    margin-top: 25px;
  }
}
.projects__container {
  padding: rem(40);
  margin: 0 auto;
}
.projects__item {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  img:nth-child(2) {
    width: rem(30);
    height: rem(30);
    position: absolute;
    right: rem(30);
    bottom: rem(30);
  }
}
@media (max-width: 801px) {
  .item__name {
    bottom: 10px;
    left: 10px;
  }

  .overlow-sm {
    overflow: scroll;
  }

  .projects__item {
    img:nth-child(2) {
      width: 100%;
      height: auto;
      max-width: 20px;
      right: 10px;
      bottom: 10px;
    }
  }
}

.projects__list {
  max-width: fit-content;
  margin: 0 auto;
}

.projects__item {
}

.projects__item img:first-child {
  width: rem(587);
  height: rem(587);
  @include media("phone-only") {
    width: 170px;
    height: 170px;
  }
}
.projects__list {
  max-width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: rem(20);
  @include media("desktop-up") {
    grid-template-columns: repeat(3, 1fr);
  }
}
.swiperSlider_mob {
  display: none;
}

// .projects__list {
//     display: block;
//   }
@media (max-width: 700px) {
  .projects__header {
    margin: 10px 0 5px;
    margin-bottom: 15px;
    text-align: start;
  }
  .projects__subHeader {
    color: transparent;
  }
  .comfort {
    margin: 0;
    top: 4vh;
    left: 15%;
    max-height: 50px;
  }
  .item__name {
    font-size: 14px;
  }
}
@media (max-width: 800px) {
  .projects__list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: rem(40);
  }
  .swiperSlider_mob {
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 10px;
    padding-top: rem(15);
  }
  .projects__list {
    display: none;
  }
}

.background-print {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 120%
  );
  position: absolute;
  bottom: 2px;
  width: 100%;
  height: 30%;
  left: 0;
  z-index: 0;
  cursor: pointer;
  @media screen and (max-width: 640px) {
    bottom: 5px;
  }
}

img {
  object-fit: cover;
}
a {
  position: relative;
}

.hooper-indicator {
  margin-top: 20px;
  border: 1px solid #dbe0e9 !important;
  width: rem(14) !important;
  height: rem(14) !important;
}

li {
  list-style: none;
}
</style>
