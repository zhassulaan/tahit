<template>
  <div class="select">
    <div class="select__title">
      {{ title }}
    </div>
    <div
      class="select__label"
      @click="
        {
          isShowDropdown = !isShowDropdown;
        }
      "
    >
      <p>{{ label }}</p>
      <img src="@/assets/img/icons/arrow-bottom.svg" alt="" />
    </div>
    <div v-if="isShowDropdown" class="select__dropdown">
      <ul class="select__list" v-if="items.length > 0">
        <div v-for="item in items" :key="item" @click="selectItem(item)">
          <li class="select__item">
            {{ item.name }}
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSelect",
  props: {
    title: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isShowDropdown: false,
      selectedItem: null,
    };
  },
  methods: {
    selectItem(item) {
      console.log(this.country, "iqbfiubqefiubewifbwiube");
      this.selectedItem = item;
      this.isShowDropdown = false;
      this.$emit("input", item);
    },
    check(item) {
      if (this.country) {
        if (this.country.name === item.name) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";
.select {
  user-select: none;
  text-align: left;
  position: relative;
  &__title {
    font-weight: 700;
    font-size: rem(16);
    line-height: 130%;
    color: #464c52;
    margin-bottom: rem(10);
  }

  &__label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: rem(16);
    line-height: 130%;
    color: #808997;
    padding: rem(15) rem(13);
    border: rem(1) solid #dbe0e9;
    width: 100%;
    cursor: pointer;
    img {
      width: rem(25);
      height: rem(18);
    }
  }

  &__dropdown {
    color: #808997;
    border: rem(1) solid #dbe0e9;
    position: absolute;
    background-color: #f0f2f5;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 5;
    max-height: 400px;
    overflow-y: scroll;

    &::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }

  &__list {
  }

  &__item {
    width: 100%;
    padding: rem(5);
    cursor: pointer;
    & + & {
      margin-top: rem(10px);
      border-top: rem(1) solid #dbe0e9;
    }
  }
}
</style>
