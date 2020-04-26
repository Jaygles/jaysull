import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

@Module({ name: "GameModule" })
export default class GameModule extends VuexModule {
  score = 0;

  @Mutation
  increment() {
    this.score += 1;
  }

  @Mutation
  clear() {
    this.score = 0;
  }

  @Action({ commit: "increment" })
  async incrementScore() {
    return;
  }

  @Action({ commit: "clear" })
  async clearScore() {
    return;
  }
}
