<template>
  <nav>
    <div class="links">
      <router-link to="/">{{ $t("pages.index") }}</router-link>
      <router-link to="/Experience">{{ $t("pages.experience") }}</router-link>
      <router-link to="/Contact">{{ $t("pages.contact") }}</router-link>
      <router-link to="/Things">{{ $t("pages.things") }}</router-link>
      <Score />
      <Prize />
    </div>
    <div class="controls">
      <LocalePicker />
      <ThemePicker />
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Score from "@/components/Score/Score.vue";
import Prize from "@/components/Prize/Prize.vue";
import LocalePicker from "@/components/LocalePicker/LocalePicker.vue";
import ThemePicker from "@/components/ThemePicker/ThemePicker.vue";

@Component({
  name: "Nav",
  components: {
    Score,
    Prize,
    LocalePicker,
    ThemePicker,
  },
})
export default class Nav extends Vue {}
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

  .controls {
    display: flex;

    > * {
      padding: 0 4px;
    }
  }
}
</style>
