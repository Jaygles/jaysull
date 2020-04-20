<template>
  <div class="pixel" :style="position" @click="handleClick">
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
      this.randomizePosition();
      this.incrementScore();
    },
    randomizePosition() {
      // Places pixel at a random location on the page. Shouldn't send
      // the pixel to be over top of a text node
      const coords = { X: 0, Y: 0 };
      const borderSize = 50;
      const { clientHeight, clientWidth } = document.body;
      const bounds = {
        X: {
          min: borderSize,
          max: clientWidth - borderSize,
        },
        Y: {
          min: borderSize,
          max: clientHeight - borderSize,
        },
      };

      // If our bounds overlap due to small document size just set to borderSize
      if (bounds.X.min >= bounds.X.max || bounds.Y.min >= bounds.Y.max) {
        this.X = borderSize;
        this.Y = borderSize;
        return;
      }

      function getCoords() {
        // Ensure X and Y are within 50 pixels of the viewport boundaries
        while (coords.X < bounds.X.min || coords.X > bounds.X.max) {
          coords.X = Math.floor(Math.random() * clientWidth);
        }

        while (coords.Y < bounds.Y.min || coords.Y > bounds.Y.max) {
          coords.Y = Math.floor(Math.random() * clientHeight);
        }
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
    this.randomizePosition();
  },
};
</script>

<style lang="scss">
.pixel {
  height: 1px;
  width: 1px;
  position: fixed;
  cursor: pointer;
  padding: 6px;
  transition: all 0.7s ease-in-out;

  .color {
    height: 1px;
    width: 1px;
  }
}
</style>
