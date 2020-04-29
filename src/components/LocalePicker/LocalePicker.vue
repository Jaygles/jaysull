<i18n>
{
  "en": {
    "localeLabel": "Language: "
  },
  "es": {
    "localeLabel": "Idioma: "
  }
}
</i18n>

<template>
  <div>
    <label for="locale">{{ $t("localeLabel") }}</label>
    <select id="locale" v-model="locale">
      <option v-for="loc in locales" :key="loc" :value="loc">
        {{ $t(`locales.${loc}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "LocalePicker",
})
export default class LocalePicker extends Vue {
  get locales() {
    return this.$i18n.availableLocales;
  }

  get locale() {
    return this.$root.$i18n.locale;
  }

  set locale(locale) {
    this.$root.$i18n.locale = locale;
    document.documentElement.lang = locale;
    localStorage.setItem("LocalePicker.locale", locale);
  }

  mounted() {
    const locale = localStorage.getItem("LocalePicker.locale");

    if (locale) {
      this.locale = locale;
    }
  }
}
</script>
