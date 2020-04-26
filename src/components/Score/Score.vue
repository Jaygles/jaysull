<template>
  <span v-if="renderScore" id="score">
    <span class="number">{{ gameModule.score }}</span>
  </span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import GameModule from "@/store/game.store";

@Component({
  name: "Score",
})
export default class Score extends Vue {
  gameModule = getModule(GameModule, this.$store);

  get renderScore(): boolean {
    return this.gameModule.score > 0;
  }
}
</script>
