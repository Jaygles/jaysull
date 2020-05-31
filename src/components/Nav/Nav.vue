<template>
  <nav>
    <div class="links">
      <router-link to="/">{{ $t("pages.index") }}</router-link>
      <router-link to="/about">{{ $t("pages.about") }}</router-link>
      <router-link to="/experience">{{ $t("pages.experience") }}</router-link>
      <router-link to="/contact">{{ $t("pages.contact") }}</router-link>
      <router-link to="/things">{{ $t("pages.things") }}</router-link>
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
  height: 66px;
  padding: 0 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  flex-wrap: wrap;

  .links {
    padding: 6px 0;

    > * {
      padding: 0 6px;
    }
  }

  .controls {
    padding: 6px 0;
    display: flex;

    > div {
      padding: 0 6px;
    }
  }
}
</style>
