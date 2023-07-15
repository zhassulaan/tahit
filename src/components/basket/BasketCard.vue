<!-- @format -->

<template>
  <div class="basket-card">
    <div class="basket-card__inner">
      <div class="basket-card__info">
        <div class="relative">
          <img class="basket-card__img" :src="item.basis.template" alt="" />
        </div>
        <div class="basket-card__content">
          <h6 class="basket-card__title">{{ item.basis.name }}</h6>
          <div class="basket-card__print">
            <p class="basket-card__label">
              {{
                $cookie.get("lang") === "Ru"
                  ? `Основа для принта`
                  : `Басып шығару үшін негіз`
              }}
            </p>
            <p class="basket-card__value">{{ item.print.comment }}</p>
          </div>
          <div class="basket-card__size">
            <p class="basket-card__label">
              {{ $cookie.get("lang") === "Ru" ? `Размер` : `Өлшем` }}
            </p>
            <p class="basket-card__value">
              {{ item.length }}
              {{ item.basis.width_unit }} x
              {{ item.basis.width }}
              {{ item.basis.length_unit }}
            </p>
          </div>
          <div class="basket-card__weight">
            <p class="basket-card__label">Вес:</p>
            <p class="basket-card__value">
              {{ item.weight }} {{ item.basis.weight_unit }}
            </p>
          </div>
          <count-input
            :itemCount="item.quantity"
            v-model="count"
            :disabled="true" />
        </div>
      </div>
      <div class="basket-card__right">
        <div class="basket-card__buttons">
          <router-link
            :to="{
              name: 'Product',
              params: { id: item.print.id },
              query: { basis: JSON.stringify(item) },
            }">
            <button class="basket-card__edit">
              <img src="@/assets/img/icons/edit.svg" alt="" />
            </button>
          </router-link>
          <button @click="handleDelete" class="basket-card__delete">
            <img src="@/assets/img/icons/delete.svg" alt="" />
          </button>
        </div>
        <div class="basket-card__price">
          {{ item.basis.amount }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../../api/api";
export default {
  name: "BasketCard",
  props: ["item"],
  components: {
    CountInput: () => import("@/components/common/CountInput.vue"),
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handleDelete() {
      if (confirm("Вы точно хотите удалить этот предмет?")) {
        api.deleteCart(this.item.id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";

.basket-card {
  border: rem(1) solid #dbe0e9;
  width: 100%;
  padding: rem(20);
  &__price {
    margin-top: rem(126);
    font-family: "Lato Regular";
    font-style: normal;
    font-weight: 400;
    font-size: rem(22);
    line-height: rem(26);
    color: #182040;
  }
  & + & {
    margin-top: rem(30);
  }
  &__inner {
    display: flex;
    justify-content: space-between;
  }

  &__info {
    display: flex;
    align-items: center;
  }

  &__img {
    width: rem(200);
    height: rem(200);
    object-fit: cover;
    object-position: center;
    margin-right: rem(20);
  }

  &__content {
    text-align: left;
    div {
      display: flex;
      align-items: center;
    }
  }

  &__title {
    margin-bottom: rem(5);
    font-weight: 700;
    font-size: rem(22);
    line-height: 130%;
  }

  &__label {
    margin-right: rem(11);
    font-weight: 700;
    font-size: rem(16);
    line-height: 130%;
  }

  &__value {
    font-weight: 400;
    font-size: rem(16);
    line-height: 130%;
  }

  &__print {
    margin-bottom: rem(16);
  }

  &__size {
    .basket-card__label {
      margin-right: rem(15);
    }
  }

  &__weight {
    .basket-card__label {
      margin-right: rem(43);
    }
  }

  &__size,
  &__weight {
    margin-bottom: rem(9);
  }

  &__count {
    display: block !important;
    max-width: max-content;
  }

  &__input {
    position: relative;
    margin-top: rem(10);
    input {
      max-width: rem(87);
      border: rem(1) solid #dbe0e9;
      padding: rem(10);
    }
  }

  &__arrows {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: rem(25);
    display: flex;
    flex-direction: column;
    button {
      img {
        width: rem(15);
        height: rem(15);
      }
    }
  }

  &__buttons {
    button {
      img {
        width: rem(25);
        height: rem(25);
      }
    }
  }

  &__delete {
    margin-left: rem(17);
  }
}

@media (max-width: 450px) {
  .basket-card__buttons {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    justify-content: space-between;
  }
  .basket-card__delete {
    margin-left: 0;
  }
}
</style>
