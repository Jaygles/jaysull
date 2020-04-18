<template>
  <div id="app" :class="theme">
    <Nav />
    <main>
      <router-view />
      <Pixel />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Nav from "@/components/Nav/Nav";
import Pixel from "@/components/Pixel/Pixel";
import Footer from "@/components/Footer/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Pixel,
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

  &.light {
    background-color: #f0f0f0;
    color: #0f0f0f;
  }

  &.dark {
    background-color: #0f0f0f;
    color: #f0f0f0;

    a {
      color: #2828ff;

      &:visited {
        color: #9b45e5;
      }
    }
  }

  &.starlight {
    background-color: #19323c;
    color: #f3f7f0;

    a {
      color: #f2545b;

      &:visited {
        color: #a93f55;
      }
    }
  }

  &.magnolia {
    background-color: #f5efff;
    color: #2c363f;

    a {
      color: #a594f9;

      &:visited {
        color: #7a59fd;
      }
    }
  }

  &.mint {
    background-color: #bcebcb;
    color: #4c230a;

    a {
      color: #0b3c49;

      &:visited {
        color: #731963;
      }
    }
  }

  &.plum {
    background-color: #5b3758;
    color: #f4ecd6;

    a {
      color: #9790cd;

      &:visited {
        color: #707bc4;
      }
    }
  }
}
</style>
