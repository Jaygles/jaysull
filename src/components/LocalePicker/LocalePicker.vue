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
    <select
      id="locale"
      :value="currentLocale"
      @change="setLocale($event.target.value)"
    >
      <option v-for="locale in locales" :key="locale" :value="locale">
        {{ $t(`locales.${locale}`) }}
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

  get currentLocale() {
    return this.$root.$i18n.locale;
  }

  setLocale(locale: string) {
    this.$root.$i18n.locale = locale;
  }
}
</script>
