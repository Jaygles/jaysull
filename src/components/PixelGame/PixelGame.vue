<template>
  <div class="pixel" :style="position" @click="handleClick">
    <div class="color" :style="backgroundColor" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import GameModule from "@/store/game.store";

@Component({
  name: "PixelGame",
})
export default class PixelGame extends Vue {
  color = "123456";
  X = 0;
  Y = 0;
  gameModule = getModule(GameModule, this.$store);

  get backgroundColor(): string {
    return `background-color: #${this.color};`;
  }

  get position(): string {
    return `
      top: ${this.Y}px;
      left: ${this.X}px;
    `;
  }

  incrementScore() {
    this.gameModule.incrementScore();
  }

  handleClick() {
    this.randomizePosition();
    this.incrementScore();
  }

  isTextNode(X: number, Y: number): boolean {
    const elemAtDestination = document.elementFromPoint(X, Y);

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

  randomizePosition() {
    // Places pixel at a random location on the page. Shouldn't send
    // the pixel to be over top of a text node
    const coords = { X: 0, Y: 0 };
    const borderSize = 80;
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
      coords.X = Math.floor(Math.random() * clientWidth);
      coords.Y = Math.floor(Math.random() * clientHeight);
      // Ensure X and Y are within 50 pixels of the viewport boundaries
      while (coords.X < bounds.X.min || coords.X > bounds.X.max) {
        coords.X = Math.floor(Math.random() * clientWidth);
      }

      while (coords.Y < bounds.Y.min || coords.Y > bounds.Y.max) {
        coords.Y = Math.floor(Math.random() * clientHeight);
      }
    }

    getCoords();

    while (this.isTextNode(coords.X, coords.Y)) {
      getCoords();
    }

    this.X = coords.X;
    this.Y = coords.Y;
    this.color = Math.floor(Math.random() * 16777215).toString(16);
  }

  mounted() {
    this.randomizePosition();
  }
}
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
