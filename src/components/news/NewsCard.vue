<template>
  <router-link
    :to="{ name: 'FullNews', params: { id: item.id } }"
    v-if="item"
    class="news-card"
  >
    <img class="news-card__img" :src="item.image" alt="" />
    <div class="news-card__info">
      <p class="news-card__title">{{ item.name }}</p>
      <p class="news-card__text">
        {{ item.text }}
      </p>
      <div class="news-card__row">
        <router-link
          :to="{ name: 'FullNews', params: { id: item.id } }"
          style="text-decoration: underline; font-weight: 600; color: #f7bd7f"
        >
          {{ $cookie.get("lang") === "Ru" ? `Узнать больше` : `See more` }}
        </router-link>
        <p class="news-card__date">{{ item.updated_at.split("T")[0] }}</p>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "BlogCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/functions.scss";
@import "@/assets/scss/media.scss";
@import "@/assets/scss/reset.sass";

.news-card {
  display: flex;
  // gap: rem(50);
  width: rem(864);
  // padding: rem(30);
  background: #f0f2f5;
  width: 100%;
  &__info {
    text-align: left;
    padding: rem(40);
    width: 100%;
  }
  &__img {
    width: rem(300);
    object-fit: cover;
  }
  &__title {
    font-size: rem(32);
    margin-bottom: rem(16);
    color: #182040;
    font-family: "Playfair Display";
  }
  &__text {
    font-size: rem(18);
    color: #656c72;
    margin-bottom: rem(32);
  }
  &__row {
    display: flex;
    justify-content: space-between;
  }
  &__date {
    font-size: rem(18);
    color: #464c52;
    font-weight: 500;
  }
  &__link {
    font-size: rem(18);
    color: #f7bd7f;
    text-decoration: underline;
    font-weight: 600;
  }
}

@media (max-width: 900px) {
  .news-card__img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .news-card {
    flex-direction: column;
  }
}
</style>
