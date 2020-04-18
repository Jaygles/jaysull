<template>
  <nav>
    <div class="links">
      <router-link to="/">Index</router-link>
      <router-link to="/Experience">Experience</router-link>
      <router-link to="/Contact">Contact</router-link>
    </div>
    <div class="themes">
      <label for="theme">Theme: </label>
      <select id="theme" :value="theme" @change="setTheme($event.target.value)">
        <option v-for="theme in themes" :key="theme">
          {{ theme }}
        </option>
      </select>
    </div>
  </nav>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Nav",
  computed: {
    ...mapState({
      themes: (state) => state.ui.themes,
      theme: (state) => state.ui.theme,
    }),
  },
  methods: {
    ...mapActions({
      setTheme: "ui/setTheme",
    }),
  },
};
</script>

<style lang="scss">
nav {
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .links {
    a {
      padding: 0 6px;
    }
  }
}
</style>
