<template>
  <div id="prize" v-if="prizeEligible">{{ prize }}</div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Prize",
  computed: {
    ...mapState({
      score: (state) => state.game.score,
    }),
    prizeEligible() {
      return this.score > 5;
    },
    prize() {
      if (this.score <= 5) {
        return "👍";
      } else if (this.score <= 10) {
        return "😂";
      } else if (this.score <= 20) {
        return "🔥";
      } else if (this.score <= 30) {
        return "✨";
      } else if (this.score > 30) {
        return "💯";
      }

      return "";
    },
  },
};
</script>

<style scoped>
#prize {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
