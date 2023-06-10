import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import getAwesomeSwiper from "@/plugins/vue-awesome-swiper";
import "@/assets/global.scss";
import "@/plugins/vee-validate";
import "@/plugins/v-mask";
import "@/plugins/cookie";
import Paginate from "vuejs-paginate";

Vue.use(getAwesomeSwiper);
Vue.use(Paginate);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
export default Vue;
