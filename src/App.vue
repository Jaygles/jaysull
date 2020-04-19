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

<script>
import { mapState, mapActions } from "vuex";
import Nav from "@/components/Nav/Nav";
import PixelGame from "@/components/PixelGame/PixelGame";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    Nav,
    PixelGame,
    Footer,
  },
  computed: {
    ...mapState({
      theme: (state) => state.ui.theme,
    }),
  },
  mounted() {
    document.addEventListener("keypress", this.handleKeypress);
  },
  destroyed() {
    document.removeEventListener("keypress", this.handleKeypress);
  },
  methods: {
    ...mapActions({
      nextTheme: "ui/nextTheme",
      prevTheme: "ui/prevTheme",
    }),
    handleKeypress(event) {
      if (event.key === "a") {
        this.prevTheme();
      } else if (event.key === "d") {
        this.nextTheme();
      }
    },
  },
};
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
    align-items: center;
    justify-content: center;
    overflow-y: auto;
  }
}
</style>
