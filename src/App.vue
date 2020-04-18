<template>
  <div id="app" :class="theme">
    <Nav />
    <main>
      <router-view />
      <Pixel />
      <Score />
      <Prize />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/Nav/Nav";
import Pixel from "@/components/Pixel/Pixel";
import Score from "@/components/Score/Score";
import Prize from "@/components/Prize/Prize";

export default {
  name: "App",
  components: {
    Nav,
    Pixel,
    Score,
    Prize,
  },
  computed: {
    ...mapState({
      theme: (state) => state.ui.theme,
    }),
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  main {
    height: 100%;
    padding: 10px 80px;
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

  &.adobe {
    background-color: #aa7141;
    color: #ecedf5;

    a {
      color: #423539;

      &:visited {
        color: #160c28;
      }
    }
  }
}
</style>
