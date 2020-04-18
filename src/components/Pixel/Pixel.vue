<template>
  <div ref="pixel" class="pixel" :style="position" @click="handleClick">
    <div class="color" :style="backgroundColor" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Pixel",
  data() {
    return {
      color: 123456,
      X: 0,
      Y: 0,
    };
  },
  computed: {
    backgroundColor() {
      return `background-color: #${this.color};`;
    },
    parentHeight() {
      if (this.$refs && this.$refs.pixel) {
        return this.$refs.pixel.parentElement.clientHeight;
      }

      return 0;
    },
    parentWidth() {
      if (this.$refs && this.$refs.pixel) {
        return this.$refs.pixel.parentElement.clientWidth;
      }

      return 0;
    },
    position() {
      return `
        top: ${this.Y}px;
        left: ${this.X}px;
      `;
    },
  },
  methods: {
    ...mapActions({
      incrementScore: "game/incrementScore",
    }),

    handleClick() {
      this.randomize();
      this.incrementScore();
    },

    randomize() {
      this.X = Math.ceil(Math.random() * this.parentWidth);
      this.Y = Math.ceil(Math.random() * this.parentHeight);
      this.color = Math.floor(Math.random() * 16777215).toString(16);
    },
  },
  mounted() {
    this.randomize();
  },
};
</script>

<style lang="scss">
.pixel {
  height: 1px;
  width: 1px;
  position: fixed;
  cursor: pointer;
  padding: 5px;

  .color {
    height: 1px;
    width: 1px;
  }
}
</style>
