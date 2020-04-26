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
  <div id="home">
    <p>{{ $t("welcome") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Home",
})
export default class Home extends Vue {}
</script>
