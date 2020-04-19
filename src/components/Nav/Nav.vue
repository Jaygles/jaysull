<template>
  <nav>
    <div class="links">
      <router-link to="/">Index</router-link>
      <router-link to="/Experience">Experience</router-link>
      <router-link to="/Contact">Contact</router-link>
      <router-link to="/Things">Things</router-link>
      <Score />
      <Prize />
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
import Score from "@/components/Score/Score";
import Prize from "@/components/Prize/Prize";

export default {
  name: "Nav",
  components: {
    Score,
    Prize,
  },
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
  height: 34px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  .links {
    > * {
      padding: 0 6px;
    }
  }
}
</style>
