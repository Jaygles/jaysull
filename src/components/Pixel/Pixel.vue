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
      // Places pixel at a random location on the page. Shouldn't send
      // the pixel to be over top of a text node
      const coords = { X: 0, Y: 0 };
      const { parentHeight, parentWidth } = this;

      function getCoords() {
        coords.X = Math.floor(Math.random() * parentWidth);
        coords.Y = Math.floor(Math.random() * parentHeight);
      }

      function isTextNode() {
        const elemAtDestination = document.elementFromPoint(coords.X, coords.Y);

        if (elemAtDestination) {
          if (elemAtDestination.nodeName === "#text") {
            return true;
          } else if (
            elemAtDestination.childNodes.length &&
            elemAtDestination.childNodes[0].nodeName === "#text"
          ) {
            return true;
          }

          return false;
        }

        throw new Error("No element at coordinates");
      }

      getCoords();

      while (isTextNode()) {
        getCoords();
      }

      this.X = coords.X;
      this.Y = coords.Y;
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
  transition: all 0.8s ease-in-out;

  .color {
    height: 1px;
    width: 1px;
  }
}
</style>
