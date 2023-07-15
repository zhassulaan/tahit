<template>
  <div class="more">
    <div class="more__container">
      <div class="more__img">
        <img :src="baner.image" alt="" />
      </div>
      <div class="more__content">
        <h1>{{ baner.title }}</h1>
        <p>
          {{ baner.text }}
        </p>
        <button class="moreBtn">
          {{ $cookie.get("lang") === "Ru" ? "Узнать больше" : "Көбірек көру" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "AppMore",
  props: ["baner"],
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
.more__img img {
  width: rem(718);
}
@media (max-width: 600px) {
  .more__img img {
    width: rem(480);
  }
}
.more__container {
  display: flex;
  @include media("tablet-landscape-up") {
    max-width: min-content;
    display: block !important;
    margin: 0 auto;
  }
}
.more {
  margin-bottom: rem(126);
  margin-top: rem(120);
  padding-left: rem(40);
  padding-right: rem(40);
}
.moreBtn {
  margin-left: 0;
  padding: rem(15) rem(34);
  background: #f7bd7f;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(16);
  line-height: rem(19);
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
}
.more__content p {
  margin: 0;
  font-family: "Lato Regular";
  font-style: normal;
  font-weight: 400;
  font-size: rem(18);
  line-height: 160%;
  color: #656c72;

  margin-bottom: rem(33);
}
.more__content h1 {
  @include media("tablet-landscape-up") {
    margin-top: 0;
  }
  margin-top: rem(115);
  margin-bottom: rem(33);
  padding: 0;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: rem(42);
  line-height: rem(56);
  text-align: left;
  color: #182040;
}
.more__content {
  width: 100%;
  @include media("tablet-landscape-up") {
    padding-bottom: 50px;
    padding-top: 50px;
    padding-right: 20px;
  }
  padding-left: rem(53);
  padding-right: rem(5);
  text-align: left;
  background: #f0f2f5;
}

@media (max-width: 700px) {
  .more {
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .more__content {
    padding: 30px 20px 30px;
    h1 {
      line-height: 100%;
    }
    p {
      font-size: 14px;
      line-height: 120%;
    }
    button {
      font-size: 15px;
      padding: 10px 20px;
    }
  }
}
</style>
