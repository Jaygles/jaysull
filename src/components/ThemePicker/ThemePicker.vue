<i18n>
{
  "en": {
    "themeLabel": "Theme: ",
    "light": "Light",
    "dark": "Dark",
    "starlight": "Starlight",
    "magnolia": "Magnolia",
    "mint": "Mint",
    "plum": "Plum"
  },
  "es": {
    "themeLabel": "Tema: ",
    "light": "Luz",
    "dark": "Oscuro",
    "starlight": "Luz de las estrellas",
    "magnolia": "Magnolia",
    "mint": "Menta",
    "plum": "Ciruelo"
  }
}
</i18n>

<template>
  <div class="themes">
    <label for="themeSelect">{{ $t("themeLabel") }}</label>
    <select id="themeSelect" v-model="theme">
      <option v-for="theme in themes" :key="theme" :value="theme">
        {{ $t(theme) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getModule } from "vuex-module-decorators";
import UiModule from "@/store/ui.store";

@Component({
  name: "ThemePicker",
})
export default class ThemePicker extends Vue {
  uiModule = getModule(UiModule, this.$store);

  get themes() {
    return this.uiModule.themes;
  }

  get theme() {
    return this.uiModule.theme;
  }

  set theme(theme) {
    this.uiModule.setTheme(theme);
  }
}
</script>
