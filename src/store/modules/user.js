import api from "@/api/api";

export const mutationTypes = {
  switchTabMt: "mutation/switchTabMt",
  IS_AUTH_MT: "mutation/IS_AUTH_MT",
  GET_USER_MT: "mutation/GET_USER_MT",
};
export const actionTypes = {
  switchTab: "action/switchTab",
  IS_AUTH: "action/IS_AUTH",
  GET_USER: "mutation/GET_USER",
};

export const userModule = {
  namespaced: true,
  state: () => ({
    isUserAuth: false,
    officeTab: "personalData",
    user: "",
  }),
  mutations: {
    [mutationTypes.GET_USER_MT](state, payload) {
      state.user = payload;
      localStorage.setItem("user", JSON.stringify(payload));
    },
    [mutationTypes.IS_AUTH_MT](state, payload) {
      state.isUserAuth = payload;
    },
    [mutationTypes.switchTabMt](state, payload) {
      state.officeTab = payload;
    },
  },
  actions: {
    async [actionTypes.GET_USER]({ commit }) {
      try {
        await api.getUserData().then((res) => {
          commit(mutationTypes.GET_USER_MT, res);
        });
      } catch (error) {
        // console.log(error);
      }
    },
    [actionTypes.switchTab]({ commit }, payload) {
      commit(mutationTypes.switchTabMt, payload);
    },
    [actionTypes.IS_AUTH]({ commit }, payload) {
      commit(mutationTypes.IS_AUTH_MT, payload);
    },
  },
};
