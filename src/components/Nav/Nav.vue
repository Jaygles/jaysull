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

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UiModule from "@/store/ui.store";
import Score from "@/components/Score/Score.vue";
import Prize from "@/components/Prize/Prize.vue";

@Component({
  name: "Nav",
  components: {
    Score,
    Prize,
  },
})
export default class Nav extends Vue {
  uiModule = getModule(UiModule, this.$store);
  themes = this.uiModule.themes;
  theme = this.uiModule.theme;

  setTheme(theme: string) {
    this.uiModule.setTheme(theme);
  }
}
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
      padding: 0 4px;
    }
  }
}
</style>
