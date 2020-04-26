import Vue from "vue";
import Vuex from "vuex";
import UiModule from "./ui.store";
import GameModule from "./game.store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UiModule,
    GameModule,
  },
});
