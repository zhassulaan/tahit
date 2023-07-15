<!-- @format -->

<template>
  <div class="product">
    <div class="container">
      <div class="product-top">
        <product-slider :bazis="inputValue.template" :prints="prints" />
        <div class="product-top_info">
          <div class="product-top_info-title">{{ print.name }}</div>
          <div class="product-top_info-price">
            {{ cost.cost }} {{ cost.currency }}
          </div>
          <form action="" class="product-form">
            <div class="product-form_one">
              <app-select
                :title="inputValue.name"
                :label="inputValue.name"
                :items="basises"
                @input="changeInput" />
            </div>
            <div class="product-form_two" v-if="cost.cost">
              <div class="product-form_two-col">
                <app-input
                  :disabled="true"
                  :title="lang === 'Ru' ? 'Ширина' : 'Ені'"
                  :placeholder="inputValue.width"
                  :isUnit="true"
                  :unit="inputValue.width_unit" />
              </div>
              <div class="product-form_two-col">
                <app-input
                  :type="'number'"
                  :title="lang === 'Ru' ? 'Длина' : 'Ұзындығы'"
                  :placeholder="length1 ? length1 : 'Длина'"
                  :isUnit="true"
                  :unit="inputValue.width_unit"
                  v-model="length1" />
              </div>
            </div>
            <div class="product-form_two" v-if="cost.cost">
              <div class="product-form_two-col">
                <count-input :itemCount="quantity" v-model="quantity" />
              </div>
              <div class="product-form_two-col">
                <app-input
                  :disabled="true"
                  :title="lang === 'Ru' ? 'Вес' : 'Салмағы'"
                  :placeholder="inputValue.weight"
                  :isUnit="true"
                  :unit="inputValue.weight_unit" />
              </div>
            </div>
            <p v-if="err" style="color: red">
              {{
                lang === "Ru"
                  ? `Вы не заполнили поля`
                  : `Сіз өрістерді толтырмадыңыз`
              }}
            </p>
            <div class="product-form_btn">
              <div
                v-if="$route.query.basis"
                @click="handleChange"
                class="product-form_btn-dark">
                <img src="@/assets/img/icons/buy.svg" alt="" />

                {{ lang === "Ru" ? `Сохранить` : `Сақтау` }}
              </div>
              <div
                @click="handleCart"
                class="product-form_btn-dark"
                v-else-if="cost.cost">
                <img src="@/assets/img/icons/buy.svg" alt="" />

                {{ lang === "Ru" ? `Добавить в корзину` : `Себетке қосу` }}
              </div>
              <div
                @click="handleFavorite"
                class="product-form_btn-white"
                v-if="cost.cost">
                <img src="@/assets/img/icons/heart.svg" alt="" />
                {{
                  lang === "Ru" ? `Добавить в избранное` : `Таңдаулыларға қосу`
                }}
              </div>
              <span
                v-if="cartFalse"
                style="
                  color: green;
                  display: block;
                  text-align: start;
                  font-size: 15px;
                ">
                {{ lang === "Ru" ? `Добавлено в Корзину` : `Себетке қосылды` }}
              </span>
              <span
                v-if="favoriteFalse"
                style="
                  color: green;
                  display: block;
                  text-align: start;
                  font-size: 15px;
                ">
                {{
                  lang === "Ru" ? `Добавлено в Избранные` : `Таңдаулыларға қосылды`
                }}
              </span>
              <span
                v-if="!token"
                style="color: gray; display: block; text-align: start">
                {{
                  lang === "Ru"
                    ? `Вы не авторизованы`
                    : `Сізге рұқсат жоқ`
                }}
              </span>
            </div>
          </form>
        </div>
      </div>
      <div class="product-info">
        <div class="product-info_description">
          <div class="product-info_title">
            {{ lang === "Ru" ? `Описание товара` : `Өнім Сипаттамасы` }}
          </div>
          <p class="product-info_text" v-if="inputValue.description">
            {{ inputValue.description.split("\r\n")[0] }}
          </p>
          <ul v-for="(text, index) in description" :key="index">
            <li v-if="index > 0">
              {{ text }}
            </li>
          </ul>
        </div>
        <div class="product-info_delivery">
          <div class="product-info_title">
            {{ lang === "Ru" ? `Доставка` : `Доставка` }}
          </div>
          <p class="product-info_text">
            {{
              lang === "Ru"
                ? `Продукция изготавливается на заказ, то есть у нас нет склада готовых
            к отправке товаров. Это позволяет нам предлагать огромную библиотеку
            дизайнов от независимых дизайнеров, доступных для более чем 50
            различных продуктов. И мы подкрепляем каждую покупку нашей гарантией
            счастья. Посетите нашу справочную страницу для получения информации.`
                : `Өнімдер тапсырыспен жасалады, яғни бізде дайын қойма жоқ
             тауарларды жіберу үшін. Бұл бізге үлкен кітапхананы ұсынуға мүмкіндік береді
             тәуелсіз дизайнерлердің дизайны 50-ден астам қол жетімді
             әртүрлі өнімдер. Және біз әрбір сатып алуды өз кепілдікпен қайтарамыз.
             бақыт. Ақпарат алу үшін біздің анықтама бетіне кіріңіз.`
            }}
          </p>
        </div>
      </div>
      <div class="product-recommendation">
        <may-also-like :print="print.attached_prints" />
      </div>
    </div>
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  name: "Product",
  components: {
    AppSelect: () => import("@/components/common/AppSelect.vue"),
    AppInput: () => import("@/components/common/AppInput.vue"),
    ProductSlider: () => import("@/components/sliders/ProductSlider.vue"),
    MayAlsoLike: () => import("@/components/sliders/MayAlsoLike.vue"),
    CountInput: () => import("@/components/common/CountInput.vue"),
  },
  data() {
    return {
      cartFalse: false,
      favoriteFalse: false,
      timer: 0,
      lang: this.$cookie.get("lang"),
      items: [],
      printsId: this.$route.params.id,
      inputValue: "",
      prints: [],
      basises: [],
      currentCart: {},
      cartitems: [],
      err: false,
      quantity: 0,
      length1: "",
      favorite_items: [{ basis: [], print: [] }],
      cost: "",
      print: "",
      description: "",
      token: this.$cookie.get("token"),
    };
  },
  watch: {
    length1: {
      handler() {
        this.err = false;
      },
    },
    quantity: {
      handler() {
        this.err = false;
      },
    },
    timer: {
      handler() {
        if (this.timer > 0) {
          setTimeout(() => {
            this.timer--;
            localStorage.setItem("123", this.timer);
          }, 1000);
        } else if (this.timer === 0) {
          this.favoriteFalse = false;
          this.cartFalse = false;
        }
      },
    },
  },
  created() {
    this.token = this.$cookie.get("token");
    let formData = new FormData();
    formData.append("id", this.printsId);
    api.getPrintsById(this.printsId).then((res) => {
      this.prints = res[0].images;
      this.currentCart.print_item = res[0].id;
      this.favorite_items[0].print[0] = res[0].id;
      this.print = res[0];
      console.log(res, "product");
    });
    if (this.$route.query.basis) {
      let temp = JSON.parse(this.$route.query.basis);
      this.inputValue = temp.basis;
      this.description = this.inputValue.description.split("\r\n");
      this.length1 = temp.length;
      this.quantity = temp.quantity;
      console.log(temp, "ieretrbgibetrgietrbgietrg");
      api.getBasisesCost(temp.basis.id).then((res) => (this.cost = res));
    } else {
      api.getBasises().then((res) => {
        this.basises = res;
        this.inputValue = this.basises[0];
        this.description = this.inputValue.description.split("\r\n");
        console.log(this.inputValue.description);
        api.getBasisesCost(this.basises[0].id).then((res) => {
          this.cost = res;
        });
      });
    }
  },
  methods: {
    changeInput(event) {
      this.inputValue = event;
      this.description = this.inputValue.description.split("\r\n");
      api.getBasisesCost(this.inputValue.id).then((res) => {
        this.cost = res;
      });
    },
    handleChange() {
      let temp = JSON.parse(this.$route.query.basis);

      api
        .changeCart(temp.id, {
          length: parseInt(this.length1),
          quantity: this.quantity,
        })
        .then(() => this.$router.push("/basket"));
    },
    handleCart() {
      this.currentCart.quantity = parseInt(this.quantity);
      this.currentCart.length = parseInt(this.length1);
      this.currentCart.basis = this.inputValue.id;
      if (this.currentCart.quantity >= 1 || this.currentCart.length > 0) {
        this.cartitems.push(this.currentCart);
        api.createCart({ cartitems: this.cartitems }).then(() => {
          this.cartFalse = true;
          this.timer = 5;
          this.$store.dispatch("getCount");
        });
        this.cartitems = [];
      } else {
        this.err = true;
      }
    },
    handleFavorite() {
      this.favorite_items[0].basis[0] = this.inputValue.id;
      api
        .addFavorite({
          basis: this.favorite_items[0].basis[0],
          print: this.favorite_items[0].print[0],
        })
        .then(() => {
          this.favoriteFalse = true;
          this.timer = 5;
        })
        .catch("Не удалось Добавить :(");
    },
    errFalse() {
      console.log("err changed");
      this.err = false;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.product {
  text-align: left;
  padding: rem(40) 0 rem(80);
  &-top {
    display: flex;
    gap: rem(60);
    &_gallery {
      width: 100%;
      border-right: rem(1) solid #dbe0e9;
      padding-right: rem(60);
    }
    &_info {
      width: 100%;
      font-weight: 500;
      font-size: rem(16);
      &-title {
        font-family: "Playfair Display";
        font-style: normal;
        font-weight: 400;
        font-size: rem(42);
        line-height: rem(56);
        color: #182040;
        font-size: rem(42);
        margin-bottom: rem(10);
      }
      &-text {
        font-family: "Lato Medium";
        font-style: normal;
        font-weight: 500;
        font-size: rem(16);
        line-height: 130%;
        color: #464c52;
      }
      &-price {
        font-size: rem(22);
        margin-bottom: rem(28);
        margin-top: rem(10);
      }
    }
  }
  &-form {
    width: rem(500);

    &_one {
      margin-bottom: rem(26);
    }
    &_two {
      display: flex;
      gap: rem(26);
      margin-bottom: rem(26);
    }
    &_two-col {
      width: rem(150);
    }
    button {
      width: 100%;
    }
    &_btn {
      font-size: rem(16);
      font-weight: 600;
      &-dark {
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-size: rem(16);
        line-height: rem(19);
        background: #f7bd7f;
        padding: rem(15);
        color: #fff;
        margin-bottom: rem(20);
        border: rem(2) solid #f7bd7f;
        position: relative;
        cursor: pointer;

        img {
          margin-right: rem(10);
          width: rem(20);
          height: rem(20);
        }
      }
      &-white {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: rem(16);
        line-height: rem(19);
        padding: rem(15);
        color: #f7bd7f;
        border: rem(2) solid #f7bd7f;
        background: #fff;
        margin-bottom: rem(20);
        cursor: pointer;
        img {
          margin-right: rem(10);
          width: rem(20);
          height: rem(20);
        }
      }
    }
  }
  &-info {
    display: flex;
    font-size: rem(18);
    line-height: 160%;
    color: #656c72;
    padding: rem(80) 0;
    gap: rem(180);
    &_title {
      font-family: "Lato Regular";
      font-style: normal;
      line-height: 130%;
      font-weight: 700;
      font-size: rem(22);
      margin-bottom: rem(27);
      color: #464c52;
    }
    &_text {
      font-family: "Lato Regular";
      font-style: normal;
      font-weight: 400;
      font-size: rem(18);
      line-height: 160%;
      color: #656c72;
      margin-bottom: rem(60);
    }
    ul {
      list-style: disc;
      padding-left: rem(14);
      li {
        font-family: "Lato Regular";
        font-style: normal;
        font-weight: 400;
        font-size: rem(18);
        line-height: 202%;
        color: #656c72;
      }
    }
    &_description {
      width: rem(900);
    }
    &_delivery {
      width: rem(851);
      background: #f0f2f5;
      padding: rem(50) rem(60);
      height: fit-content;
    }
  }
}

@media (max-width: 900px) {
  .product-top {
    flex-direction: column;
    align-items: center;
  }
  .product-top_info {
    width: max-content;
  }
}

@media (max-width: 767px) {
  .product-info {
    display: block;
  }
  .product-info_description {
    width: 100%;
  }
  .product-info_delivery {
    width: 100%;
  }
}
</style>
