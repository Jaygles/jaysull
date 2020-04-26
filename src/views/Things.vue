<i18n>
{
  "en": {
    "codeForThisWebsite": "Code for this website"
  },
  "es": {
    "codeForThisWebsite": "Código para este sitio web"
  }
}
</i18n>

<template>
  <div id="things">
    <h1>{{ $t("pages.things") }}</h1>
    <p>
      {{ $t("codeForThisWebsite") }} -&nbsp;
      <a
        href="https://github.com/Jaygles/jaysull"
        rel="noopener noreferrer"
        target="_blank"
        >https://github.com/Jaygles/jaysull</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Things",
})
export default class Things extends Vue {}
</script>
