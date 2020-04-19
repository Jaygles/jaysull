<template>
  <span v-if="renderScore" id="score">
    <span class="number">{{ score }}</span>
  </span>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Score",
  computed: {
    ...mapState({
      score: (state) => state.game.score,
    }),

    renderScore() {
      return this.score > 0;
    },
  },
};
</script>
