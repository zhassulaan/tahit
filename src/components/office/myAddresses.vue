<template>
  <div class="myAddresses">
    <div class="myAddresses__container">
      <div
        v-for="(item, index) in user.addresses"
        :key="item.id"
        class="address"
      >
        <p class="address__item">
          {{ item.country.name }}
        </p>
        <p class="address__item">
          г.{{ item.city.name }}, {{ item.city.index }}
        </p>
        <p class="address__item">ул. {{ item.street }} {{ item.home }}</p>
        <div class="address__interact">
          <div
            class="address__edit"
            style="cursor: pointer"
            @click="
              {
                setModal('Редактировать адрес');
                addressId = item.id;
                editModal = true;
              }
            "
          >
            <img src="@/assets/office/pencil.png" alt="" />
            <p>
              {{ lang === "Ru" ? `Редактировать` : `Өзгерту` }}
            </p>
          </div>
          <div
            @click="del(item.id)"
            v-if="index > 0"
            style="cursor: pointer"
            class="address__delete"
          >
            <img src="@/assets/office/Delete.png" alt="" />
            <p>{{ lang === "Ru" ? `Удалить` : `Жою` }}</p>
          </div>
        </div>
      </div>
      <div
        @click="setModal('Добавить адрес')"
        class="myAddresses__createAddress"
      >
        <svg
          width="46"
          height="46"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.875 23C2.875 34.1134 11.8845 43.125 23 43.125C34.1134 43.125 43.125 34.1134 43.125 23C43.125 11.8866 34.1134 2.875 23 2.875C11.8845 2.875 2.875 11.8866 2.875 23Z"
            stroke="#F7BD7F"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M23.0009 12.4413V33.5046"
            stroke="#F7BD7F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M33.5413 22.9727H12.458"
            stroke="#F7BD7F"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>
          {{ lang === "Ru" ? `Добавить адрес` : `Мекенжайды қосу` }}
        </p>
      </div>
    </div>

    <edit-address-modal
      :id="addressId"
      :type="modalType"
      :method="getAddresses"
      v-if="modal"
      @close="qwe"
    />
  </div>
</template>
<script>
import api from "@/api/api";

export default {
  data() {
    return {
      lang: this.$cookie.get("lang"),
      editModal: false,
      user: {
        addresses: [],
      },
      addressId: "",
      modal: false,
      modalType: "Добавить адрес",
      deleteAddress: {
        address_id: "asdasd",
      },
    };
  },
  components: {
    EditAddressModal: () => import("@/components/modals/EditAddressModal.vue"),
    // AppSelect: () => import("@/components/common/AppSelect.vue"),
    // AppInput: () => import("@/components/common/AppInput.vue"),
  },
  methods: {
    qwe() {
      this.modal = false;
      this.getAddresses();
    },
    getAddresses() {
      api.getAddresses().then((res) => {
        this.user.addresses = res.result;
        this.modal = false;
      });
    },
    setModal(e) {
      this.modalType = e;
      this.modal = true;
    },
    del(id) {
      if (confirm("Удалить этот адрес?")) {
        console.log(id);
        api
          .deleteAddress(id)
          .then(() => {
            this.getAddresses();
            // console.log(res.status);
          })
          .catch(() => {
            alert("Не получилось удалить");
            // alert(err.response.data[0]);
          });
      } else {
        return;
      }
    },
  },
  created() {
    this.getAddresses();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";

.myAddresses__createAddress {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.address {
  width: rem(364);
  border: 1px solid #dbe0e9;
  text-align: left;
  padding: rem(23);
  &__interact {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #dbe0e9;
  }
  &__delete {
    display: flex;
    align-items: center;
    img {
      margin-right: rem(14);
      width: rem(14);
      height: rem(14);
    }
    p {
      font-family: "Lato Regular";
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 187.5%;
      color: #656c72;
    }
  }
  &__edit {
    align-items: center;
    display: flex;
    img {
      margin-right: rem(14);
      width: rem(14);
      height: rem(14);
    }
    p {
      font-family: "Lato Regular";
      font-style: normal;
      font-weight: 400;
      font-size: rem(16);
      line-height: 187.5%;
      color: #f7bd7f;
    }
  }
  &__item {
    font-family: "Lato Regular";
    font-style: normal;
    font-weight: 400;
    font-size: rem(16);
    line-height: 187.5%;
    color: #464c52;
  }
}
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  &__inner {
    background-color: #fefefe;
    margin: 15% auto;
    padding: rem(32);
    border: 1px solid #888;
    width: rem(512);
  }
}
.myAddresses {
  max-width: min-content;
  margin: 0;
  &__createAddress {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: rem(364);
    border: 1px solid #dbe0e9;
    img {
      width: rem(40);
      height: rem(40);
      margin: 0 auto;
    }
  }
  &__container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: rem(55);
    padding: 0 rem(53);
    @include media("tablet-landscape-up") {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
    }
  }
}
</style>
