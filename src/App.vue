<template>
  <div id="app" :class="theme">
    <Nav />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/Nav/Nav";

export default {
  name: "App",
  components: {
    Nav
  },
  computed: {
    ...mapState({
      theme: state => state.ui.theme
    })
  }
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
    padding: 10px 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    overflow-y: auto;
  }

  &.light {
    background-color: #f0f0f0;
    color: #0f0f0f;
  }

  &.dark {
    background-color: #0f0f0f;
    color: #f0f0f0;

    a:visited {
      color: #9b45e5;
    }
  }
}
</style>
