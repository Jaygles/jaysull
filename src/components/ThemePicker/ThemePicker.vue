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
    <label for="theme">{{ $t("themeLabel") }}</label>
    <select id="theme" :value="theme" @change="setTheme($event.target.value)">
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

  setTheme(theme: string) {
    this.uiModule.setTheme(theme);
  }
}
</script>
