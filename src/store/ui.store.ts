import { ActionContext } from "vuex";

type theme = string;

export type uiState = {
  theme: theme;
  themes: theme[];
};

export default {
  namespaced: true,
  state: {
    theme: "light",
    themes: ["dark", "light", "starlight", "adobe"],
  } as uiState,
  getters: {},
  mutations: {
    update(state: uiState, update: object) {
      Object.assign(state, update);
    },
  },
  actions: {
    async setTheme({ commit }: ActionContext<uiState, any>, theme: theme) {
      commit("update", { theme });
    },
  },
};
