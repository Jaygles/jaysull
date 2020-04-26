import { Module, VuexModule, Mutation } from "vuex-module-decorators";

@Module({ name: "GameModule" })
export default class GameModule extends VuexModule {
  score = 0;

  @Mutation
  incrementScore() {
    this.score += 1;
  }

  @Mutation
  clearScore() {
    this.score = 0;
  }
}
