import { ActionContext } from "vuex";

export type gameState = {
  score: number;
};

export default {
  namespaced: true,
  state: {
    score: 0,
  } as gameState,
  getters: {},
  mutations: {
    update(state: gameState, update: object) {
      Object.assign(state, update);
    },
  },
  actions: {
    async incrementScore({ commit, state }: ActionContext<gameState, any>) {
      commit("update", { score: state.score + 1 });
    },
    async clearScore({ commit }: ActionContext<gameState, any>) {
      commit("update", { score: 0 });
    },
  },
};
