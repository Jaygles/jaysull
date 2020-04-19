<template>
  <div id="prize" v-if="showPrize">{{ prize }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Prize",
  computed: {
    ...mapState({
      score: (state) => state.game.score,
    }),
    showPrize() {
      return this.score >= 5;
    },
    prize() {
      if (this.score <= 10) {
        return "👍";
      } else if (this.score <= 20) {
        return "😂";
      } else if (this.score <= 30) {
        return "🔥";
      } else if (this.score <= 40) {
        return "✨";
      } else if (this.score <= 999) {
        return "💯";
      } else if (this.score <= 1000) {
        return "💩";
      }

      return "";
    },
  },
};
</script>
