<template>
  <p v-if="renderScore" id="score">
    <span class="number">{{ score }}</span>
    <span class="clear" @click="clearScore">(X)</span>
  </p>
</template>

<script>
import { mapState, mapActions } from "vuex";

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
  methods: {
    ...mapActions({
      clearScore: "game/clearScore",
    }),
  },
};
</script>

<style lang="scss">
#score {
  .clear {
    cursor: pointer;
    font-size: 60%;
  }

  .number {
    padding: 0 6px;
  }
}
</style>
