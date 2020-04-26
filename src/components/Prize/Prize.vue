<template>
  <span id="prize" v-if="showPrize">{{ prize }}</span>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import GameModule from "@/store/game.store";

@Component({
  name: "Prize",
})
export default class Prize extends Vue {
  gameModule = getModule(GameModule, this.$store);

  get showPrize(): boolean {
    return this.gameModule.score >= 5;
  }

  get prize(): string {
    const { score } = this.gameModule;

    if (score <= 10) {
      return "👍";
    } else if (score <= 20) {
      return "😂";
    } else if (score <= 30) {
      return "🔥";
    } else if (score <= 40) {
      return "✨";
    } else if (score <= 999) {
      return "💯";
    } else if (score <= 1000) {
      return "💩";
    }

    return "";
  }
}
</script>
