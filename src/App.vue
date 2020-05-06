<template>
  <div id="app" :class="theme">
    <Nav />
    <main>
      <router-view />
    </main>
    <Footer />
    <PixelGame />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UiModule from "@/store/ui.store";
import Nav from "@/components/Nav/Nav.vue";
import Footer from "@/components/Footer/Footer.vue";
import PixelGame from "@/components/PixelGame/PixelGame.vue";

@Component({
  name: "App",
  components: {
    Nav,
    Footer,
    PixelGame,
  },
})
export default class App extends Vue {
  uiModule = getModule(UiModule, this.$store);

  get theme() {
    return this.uiModule.theme;
  }

  set theme(theme) {
    this.uiModule.setTheme(theme);
  }

  mounted() {
    document.addEventListener("keypress", this.handleKeypress);

    const { storedTheme } = this.uiModule;
    const { matchMedia } = window;

    if (storedTheme) {
      this.theme = storedTheme;
    } else if (matchMedia) {
      const isDark = matchMedia("(prefers-color-scheme: dark)").matches;
      const isLight = matchMedia("(prefers-color-scheme: light)").matches;

      if (isDark) {
        this.theme = "dark";
      } else if (isLight) {
        this.theme = "light";
      }
    }
  }

  destroyed() {
    document.removeEventListener("keypress", this.handleKeypress);
  }

  handleKeypress(event: KeyboardEvent): void {
    if (event.key === "a") {
      this.uiModule.prevTheme();
    } else if (event.key === "d") {
      this.uiModule.nextTheme();
    }
  }
}
</script>

<style lang="scss">
/* Theme applied as a class on #app */
@import "themes.scss";

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease;

  main {
    height: 100%;
    padding: 10px 40px;
    display: flex;
    align-items: safe center;
    justify-content: safe center;
    overflow-y: auto;
  }
}
</style>
