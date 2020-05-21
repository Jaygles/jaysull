<i18n>
{
  "en": {
    "welcome": "Welcome"
  },
  "es": {
    "welcome": "¡Bienvenido!"
  }
}
</i18n>

<template>
  <section id="home">
    <p>{{ $t("welcome") }}</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home",
})
export default class Home extends Vue {}
</script>
