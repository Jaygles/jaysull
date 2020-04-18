import Vue from "vue";
import Vuex from "vuex";
import ui from "./ui.store";
import game from "./game.store";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    ui,
    game,
  },
});
