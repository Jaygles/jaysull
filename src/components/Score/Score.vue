<template>
  <p v-if="renderScore" id="score">
    <span class="number">{{ score }}</span>
    <span class="clear" @click="clearScore">x</span>
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
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0 3px;

  .clear {
    cursor: pointer;
    font-size: 82%;
  }

  .number {
    margin-right: 2px;
  }
}
</style>
