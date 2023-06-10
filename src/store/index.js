import Vue from "vue";
import Vuex from "vuex";
import { userModule } from "./modules/user";
import api from "@/api/api";

Vue.use(Vuex);

export const mutationTypes = {
  GET_COUNTRIES_MT: "mutation/GET_COUNTRIES_MT",
};
export const actionTypes = {
  GET_COUNTRIES: "action/GET_COUNTRIES",
};

export const currentCart = {
  GET_COUNT: "action/GET_COUNT",
};

export default new Vuex.Store({
  state: {
    countries: "",
    count: 0,
  },
  mutations: {
    [mutationTypes.GET_COUNTRIES_MT](state, payload) {
      state.countries = payload;
    },
    increment(state, data) {
      console.log(data, "count234");
      state.count = data;
    },
  },
  actions: {
    async [actionTypes.GET_COUNTRIES]({ commit }) {
      try {
        await api.getCountries().then((res) => {
          commit(mutationTypes.GET_COUNTRIES_MT, res);
        });
      } catch (error) {
        // console.log(error);
      }
    },
    async getCount(context) {
      let temp;
      await api.getCurrentCart().then((res) => {
        temp = res.cartitems.length;
      });
      context.commit("increment", temp);
    },
  },
  modules: {
    userModule,
  },
  // plugins: [vueLocalStorage.plugin],
});
