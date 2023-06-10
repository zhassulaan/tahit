<template>
  <div class="history">
    <div class="history__one__container" v-if="modalHistory">
      <div class="history__one__back" @click="modalHistory = ''">
        <button class="history__one__arrow">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.75 22.5L11.25 15L18.75 7.5"
              stroke="#63666C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {{ lang === "Ru" ? "Вернуться назад" : "Go back" }}
        </button>
      </div>
      <div class="history__one__block">
        <div class="history__one__left">
          <div class="border-yellow">
            <p>
              {{ lang === "Ru" ? "Номер заказа" : "Order number" }}: №{{
                modalHistory.id
              }}
            </p>
          </div>
          <p>Адрес доставки:</p>
          <span> Казахстан, Алматы </span>
          <span> Проспект Абая, дом 15.</span>
          <span> +777 7777 777</span>

          <p>Способ доставки:</p>
          <p>72753031-4b5f-4084-9b09-c50b84a23da6</p>
          <div class="border-yellow">
            <p>Способ оплаты:</p>
            <span> Платежная карта (онлайн)</span>
          </div>
          <p>Информация об оплате:</p>
          <span
            >Стоимость товара: {{ modalHistory.total_price }}
            {{ modalHistory.currency }}</span
          >
          <span>Стоимость доставки: бесплатно</span>
          <span
            >Итого: {{ modalHistory.total_price }}
            {{ modalHistory.currency }}</span
          >
          <span>Статус оплаты: оплачен</span>
        </div>
        <div class="history__one__right">
          <p class="history__one__h6">
            Товары: {{ modalHistory.orderitems.length }} шт
          </p>
          <div
            class="history__one__right__block"
            v-for="item in modalHistory.orderitems"
            :key="item.id"
          >
            <img :src="item.basis.template" alt="" />
            <div class="history__one__right__info">
              <div class="history__one__right__title">
                <div style="text-align: start">
                  <p>{{ item.basis.name }}</p>
                </div>
                <p style="color: #44bd26; font-weight: 500">Выдан</p>
              </div>
              <div class="history__one__right__stat">
                <span
                  >Ширина: {{ item.basis.width }}
                  {{ item.basis.width_unit }}</span
                >
                <span>Количество: {{ item.quantity }} </span>
                <span
                  >Длина: {{ item.length }} {{ item.basis.length_unit }}</span
                >
                <span
                  >Вес: {{ item.basis.weight }}
                  {{ item.basis.weight_unit }}</span
                >
              </div>
              <p>{{ item.amount }} {{ modalHistory.currency }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="history__container" v-else>
      <div
        class="history__block"
        @click="modalHistory = item"
        v-for="item in items"
        :key="item"
      >
        <div class="history__block__title">
          <p>
            {{ lang === "Ru" ? "Номер заказа" : "Order number" }}: №{{
              item.id
            }}
          </p>
        </div>
        <p>
          {{ lang === "Ru" ? "Дата создания" : "Date of creation" }}:
          {{ item.created_at.split("T")[0] }}
        </p>
        <p>
          {{ lang === "Ru" ? "Цена" : "Price" }} : {{ item.total_price }}
          {{ item.currency }}
        </p>
        <p>{{ lang === "Ru" ? "Оплата" : "Payment" }} : картой</p>
        <p>
          {{ lang === "Ru" ? "Доставка" : "Delivery" }}
          :
          {{
            lang === "Ru" && item.delivery === "self_delivery"
              ? "Самовывоз"
              : lang === "En" && item.delivery === "self_delivery"
              ? "Pickup"
              : lang === "Ru" && item.delivery === "delivery"
              ? "Доставка"
              : "Delivery"
          }}
        </p>
        <p>
          {{ lang === "Ru" ? "Статус" : "Status" }}

          :
          <span style="color: #44bd26">
            {{
              item.status === "new_order" && lang === "Ru"
                ? "Новый заказ"
                : item.status === "new_order" && lang === "En"
                ? "New order"
                : item.status === "in_delivery" && lang === "Ru"
                ? "Доставляется"
                : item.status === "in_delivery" && lang === "En"
                ? "In delivery"
                : item.status === "delivered" && lang === "Ru"
                ? "Доставлен"
                : item.status === "delivered" && lang === "En"
                ? "Delivered"
                : item.status === "canceled" && lang === "Ru"
                ? "Оплачен"
                : item.status === "canceled" && lang === "En"
                ? "Paid"
                : item.status === "ended" && lang === "Ru"
                ? "Завершен"
                : "Ended"
            }}</span
          >
        </p>
      </div>
      <!-- <div class="history__table">
        <table CELLSPACING="0" CELLPADDING="0" class="table">
          <thead>
            <tr class="table__caption">
              <th>
                {{ lang === "Ru" ? `Номер заказа` : `Order number` }}
              </th>
              <th>
                {{ lang === "Ru" ? `Дата создания` : `date of creation` }}
              </th>
              <th>
                {{ lang === "Ru" ? `Цена` : `Price` }}
              </th>
              <th>
                {{ lang === "Ru" ? `Оплата` : `Pay` }}
              </th>
              <th>
                {{ lang === "Ru" ? `Доставка` : `Delivery` }}
              </th>
              <th>
                {{ lang === "Ru" ? `Статус` : `Status` }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in items"
              :key="item.id"
              v-show="index >= (page - 1) * 6 && index <= page * 6"
            >
              <th>{{ item.id }}</th>
              <th>{{ item.created_at.split("T")[0] }}</th>
              <th>{{ item.total_price }}</th>
              <th>{{ item.total_price }}</th>
              <th>
                {{
                  lang === "Ru" && item.delivery === "self_delivery"
                    ? "Самовывоз"
                    : lang === "En" && item.delivery === "self_delivery"
                    ? "Pickup"
                    : lang === "Ru" && item.delivery === "delivery"
                    ? "Доставка"
                    : "Delivery"
                }}
              </th>
              <th>
                {{
                  item.status === "new_order" && lang === "Ru"
                    ? "Новый заказ"
                    : item.status === "new_order" && lang === "En"
                    ? "New order"
                    : item.status === "in_delivery" && lang === "Ru"
                    ? "Доставляется"
                    : item.status === "in_delivery" && lang === "En"
                    ? "In delivery"
                    : item.status === "delivered" && lang === "Ru"
                    ? "Доставлен"
                    : item.status === "delivered" && lang === "En"
                    ? "Delivered"
                    : item.status === "canceled" && lang === "Ru"
                    ? "Оплачен"
                    : item.status === "canceled" && lang === "En"
                    ? "Paid"
                    : item.status === "ended" && lang === "Ru"
                    ? "Завершен"
                    : "Ended"
                }}
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <paginate
        v-if="paginationPages > 1"
        v-model="page"
        :page-count="paginationPages"
        :page-range="2"
        :margin-pages="1"
        :page-class="'page-item'"
        :active-class="'myActiveBtn'"
        :prev-text="'<'"
        :next-text="'>'"
        :container-class="'pagination'"
        class="qwe"
      >
      </paginate> -->
    </div>
  </div>
</template>
<script>
import api from "../../api/api";

export default {
  data() {
    return {
      page: 1,
      lang: this.$cookie.get("lang"),
      history: "",
      modalHistory: "",
      items: "",
      paginationPages: 0,
      currentPage: 1,
      isModal: false,
    };
  },
  components: {},
  created() {
    api.currentOrder().then((res) => {
      this.items = res;
    });
  },
};
</script>
<style lang="scss">
p {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.history {
  width: 100%;
}
.history__container {
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 510px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  animation: opacity 300ms ease-in-out;
}

.history__one {
  &__container {
    width: 100%;
    padding: 0 20px;
  }
  &__back {
    display: flex;
    align-items: center;
  }
  &__arrow {
    display: flex;
    align-items: center;
    background: transparent;
    padding: 0;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 19px;
    color: #464c52;
  }
  &__block {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 803px;
    width: 100%;
    margin-top: 20px;
    padding: 14px 7px;
    background: #ffffff;
    box-shadow: 0px 1px 7px rgba(95, 99, 107, 0.25);
    border-radius: 10px;
  }

  &__left {
    width: 45%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    p {
      text-align: start;
      font-family: "Lato";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      color: #464c52;
    }

    span {
      font-family: "Lato";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 18px;
      text-align: start;
      color: #7d8389;
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    width: 50%;

    &__info {
      margin: 0 5px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 7px;
    }

    &__stat {
      align-items: flex-start;
      display: grid;
      gap: 5px;
      margin-top: 5px;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      span {
        text-align: start;
      }
    }

    &__title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      p {
        text-align: start;
      }
      span {
        text-align: start;
      }
    }

    &__block {
      display: flex;
      align-items: center;
      img {
        width: 87px;
        height: 87px;
        object-fit: cover;
      }
      width: 100%;
      border-bottom: 0.8px solid #ffc584;
      padding-bottom: 8px;
    }
  }

  &__h6 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 14px;
    text-align: start;
    color: #464c52;
  }
}

p {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: start;
}

span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 12px;
  color: #6b7076;
}

.history__block__title {
  text-align: start;
  border-bottom: 0.8px solid #ffc584;
  padding-bottom: 8px;
}

.border-yellow {
  border-bottom: 0.8px solid #ffc584;
  padding-bottom: 8px;
  width: 100%;
  text-align: start;
  p {
    text-align: start;
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #464c52;
  }
  span {
    font-family: "Lato";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: start;
    color: #7d8389;
  }
}

.history__block {
  cursor: pointer;
  padding: 8px;
  grid-column: span 1 / span 1;
  height: 215px;
  background: #ffffff;
  box-shadow: 0px 1px 7px rgba(95, 99, 107, 0.25);
  border-radius: 10px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  text-align: start;
  font-family: "Lato";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
  color: #464c52;
}

.prev {
  background: black;
  width: 10px;
  height: 10px;
}
.history__table {
  overflow-x: scroll;
}

.page-item {
  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 22px;
  color: #464c52;
}
.myActiveBtn {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7bd7f;
}

@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.pagination_arr {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #1d393c;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.history {
  &__table {
    border: rem(1) solid #dbe0e9;
  }
  @media (min-width: 1355px) {
    &__container {
      padding: rem(40);
    }
    // &__table {
    //   width: rem(1355);
    // }
  }
  @media (max-width: 1354px) {
    &__container {
      padding: rem(10);
    }
    &__table {
      max-width: 60vw;
      margin: 0 auto;
    }
  }
  @media (max-width: 500px) {
    &__table {
      max-width: 340px;
    }
  }
}
@media (max-width: 450px) {
  .history {
    position: relative;
    right: 0vw;
    max-width: 102vw;
  }
}
.table {
  border-collapse: collapse;
  tr:nth-child(2n) {
    background: #fafcff;
  }
  width: rem(1355);
  tr {
    height: rem(57);
    border: 1px solid #dbe0e9;
  }
  &__caption {
    padding: rem(18) rem(32);
    background: #f0f2f5;
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

.history__one__container {
  animation: opacity 300ms ease-in-out;
}

@keyframes opacity {
  from {
    opacity: 0%;
  }
  to {
    opacity: 100%;
  }
}
</style>
