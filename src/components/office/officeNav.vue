<template>
  <div class="officeNav">
    <div class="officeNav__container">
      <div class="officeNav__burger">
        <button @click="openBurger = true" class="burger__btn">
          <Arrow />
        </button>
        <div class="burger__content" :class="{ isActive: openBurger }">
          <button @click="openBurger = false" class="burger-menu-close">
            <CloseIcon></CloseIcon>
          </button>
          <ul class="burger__bar">
            <li
              :class="{ isActive: officeTab === 'personalData' }"
              @click="switchBtn('personalData'), (openBurger = false)"
            >
              <a href="#?">
                {{
                  lang === "Ru" ? `Личная информация ` : `Personal information`
                }}
              </a>
              <Arrow />
            </li>
            <li
              :class="{ isActive: officeTab === 'passwordEdit' }"
              @click="switchBtn('passwordEdit'), (openBurger = false)"
            >
              <a href="#?">
                {{ lang === "Ru" ? `Смена пароля ` : `Change password` }}
              </a>
              <Arrow />
            </li>
            <li
              :class="{ isActive: officeTab === 'myAddresses' }"
              @click="switchBtn('myAddresses'), (openBurger = false)"
            >
              <a href="#?">
                {{ lang === "Ru" ? `Мои адреса ` : `My addresses` }}
              </a>
              <Arrow />
            </li>
            <li
              :class="{ isActive: officeTab === 'Favorites' }"
              @click="switchBtn('Favorites'), (openBurger = false)"
            >
              <a href="#?">
                {{ lang === "Ru" ? `Избранное ` : `Favorite` }}
              </a>
              <Arrow />
            </li>
            <li
              :class="{ isActive: officeTab === 'History' }"
              @click="switchBtn('History'), (openBurger = false)"
            >
              <a href="#?">
                {{ lang === "Ru" ? `История заказов ` : `History of orders` }}
              </a>
              <Arrow />
            </li>
            <li>
              <a
                @click="leave()"
                href="#?"
                style="
                  font-family: Lato Regular;
                  font-style: normal;
                  font-size: 1rem;
                  line-height: 130%;
                  color: #464c52;
                  margin-left: 5px;
                "
              >
                {{ lang === "Ru" ? `Выйти ` : `Leave` }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ul class="officeNav__bar">
        <li>
          <a
            @click="switchBtn('personalData')"
            :class="{ isActive: officeTab === 'personalData' }"
            href="#?"
          >
            {{ lang === "Ru" ? `Личная информация ` : `Personal information` }}
          </a>
        </li>
        <li>
          <a
            @click="switchBtn('passwordEdit')"
            :class="{ isActive: officeTab === 'passwordEdit' }"
            href="#?"
          >
            {{ lang === "Ru" ? `Смена пароля ` : `Change password` }}
          </a>
        </li>
        <li>
          <a
            @click="switchBtn('myAddresses')"
            :class="{ isActive: officeTab === 'myAddresses' }"
            href="#?"
          >
            {{ lang === "Ru" ? `Мои адреса ` : `My addresses` }}
          </a>
        </li>
        <li>
          <a
            @click="switchBtn('Favorites')"
            :class="{ isActive: officeTab === 'Favorites' }"
            href="#?"
          >
            {{ lang === "Ru" ? `Избранное ` : `Favorite` }}
          </a>
        </li>
        <li>
          <a
            @click="switchBtn('History')"
            :class="{ isActive: officeTab === 'History' }"
            href="#?"
          >
            {{ lang === "Ru" ? `История заказов ` : `History of orders` }}
          </a>
        </li>
        <li>
          <a @click="leave()" href="#?">
            {{ lang === "Ru" ? `Выйти ` : `Exit` }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import { actionTypes } from "@/store/modules/user";

export default {
  data() {
    return {
      openBurger: false,
      lang: this.$cookie.get("lang"),
    };
  },
  created() {
    window.addEventListener("resize", this.myEventHandler());
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler());
  },
  components: {
    Arrow: () => import("@/components/icons/arrowIcon.vue"),
    CloseIcon: () => import("@/components/icons/CloseIcon.vue"),
  },
  computed: {
    ...mapState("userModule", ["officeTab"]),
  },
  methods: {
    ...mapActions("userModule", {
      switchTabAction: actionTypes.switchTab,
    }),
    myEventHandler() {
      if (window.innerWidth < 750) {
        this.openBurger = true;
      } else {
        this.openBurger = false;
      }
    },
    switchBtn(tab) {
      this.switchTabAction(tab);
    },
    leave() {
      if (
        confirm(
          this.lang === "Ru"
            ? "Вы точно хотите выйти?"
            : "Are you sure to go out?"
        )
      ) {
        this.$cookie.delete("token");
        this.$cookie.delete("refresh");
        this.$router.push("/");
        location.reload();
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.burger-menu-close {
  background-color: white;
  position: absolute;
  right: 0;
  top: 15px;
}
.burger {
  &__content {
    min-height: 100%;
    transition: all 0.5s ease;
    position: fixed;
    left: 0;
    top: 70px;
    transform: translateX(-100%);
    background-color: #fff;
    width: 100%;
    z-index: 101;
    padding-top: 30px;
    padding-left: 20px;
  }
  &__bar {
    svg {
      position: relative;
      top: 2px;
      width: 25px;
      height: 25px;
    }
    .isActive {
      a {
        color: #f7bd7f;
      }
      svg {
        path {
          fill: #f7bd7f;
        }
      }
    }
    li {
      border-top: 1px solid #dbe0e9;
      border-bottom: 1px solid #dbe0e9;
      justify-content: space-between;
      margin: 0 !important;
      padding: 15px;
      display: flex;
    }
    a:last-child {
      font-family: cursive;
      position: relative;
      bottom: 2px;
      right: 6px;
    }
    a {
      font-size: 20px !important;
    }
  }
  &__content.isActive {
    transform: translateX(0);
  }
  &__btn {
    @media (max-width: 900px) {
      svg {
        path {
          fill: black;
        }
        width: 25px;
        height: 25px;
      }
      rotate: 180deg;
      display: block;
      position: absolute;
      font-family: monospace;
      left: 2vw;
      top: -32px;
    }
    display: none;
    flex-direction: column;
    background-color: unset;
    border: unset;
    span {
      width: 26px;
      height: 3px;
      background-color: #2d2929;
      margin-bottom: 3px;
    }
  }
}
.officeNav {
  // &__bar {
  //   font-family: "Lato Bold";
  //   font-style: normal;
  //   font-weight: 700;
  //   font-size: rem(16);
  //   line-height: rem(19);
  //   color: #464c52;
  // }
  // font-family: Lato;
  @media (min-width: 1901px) {
    &__bar {
      // padding-right: rem(120) !important;
    }
  }
  @media (min-width: 751px) {
    .officeNav {
      width: rem(27);
    }
    &__bar {
      padding-right: rem(30);

      li {
        min-width: rem(369);
        border-bottom: rem(1) solid #dbe0e9;
        padding-bottom: rem(25);
      }
      li:first-child {
        border-top: rem(1) solid #dbe0e9;
      }
    }
  }
  @media (max-width: 900px) {
    &__burger {
      display: block;
    }
    &__bar {
      display: none;
    }
    &__container {
      border: unset !important;
      position: relative;
      right: 21px;
      bottom: 55px;
    }
  }
  &__container {
    padding-top: rem(1);
    border-right: 1px solid #dbe0e9;
    ul li a {
      font-family: "Lato Regular";
      font-style: normal;
      // font-weight: 700;
      font-size: rem(20);
      line-height: 130%;
      color: #464c52;
    }
    ul {
      text-align: left;
      padding: 0;
      margin-top: 20px;
    }
    ul li {
      // border-top: 1px solid #dbe0e9;
      .isActive {
        color: #f7bd7f;
        font-weight: 500;
        font-family: "Lato Bold";
      }
      padding: rem(28) 0;
    }
  }
}
</style>
