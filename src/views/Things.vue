<template>
  <div id="things">
    <h1>Things</h1>
    <p>
      Code for this website -&nbsp;
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
