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
    themes: ["light", "dark", "starlight", "magnolia", "mint", "plum"],
  } as uiState,
  getters: {},
  mutations: {
    update(state: uiState, update: object) {
      Object.assign(state, update);
    },
  },
  actions: {
    setTheme({ commit }: ActionContext<uiState, any>, theme: theme) {
      commit("update", { theme });
    },
    nextTheme({ commit, state }: ActionContext<uiState, any>) {
      const { theme, themes } = state;
      const themeIndex = themes.indexOf(theme);
      const nextTheme = themes[themeIndex + 1];

      if (nextTheme) {
        commit("update", { theme: nextTheme });
      } else {
        commit("update", { theme: themes[0] });
      }
    },
    prevTheme({ commit, state }: ActionContext<uiState, any>) {
      const { theme, themes } = state;
      const themeIndex = themes.indexOf(theme);
      const previousIndex = themeIndex - 1;

      if (previousIndex >= 0) {
        commit("update", { theme: themes[previousIndex] });
      } else {
        commit("update", { theme: themes[themes.length - 1] });
      }
    },
  },
};
