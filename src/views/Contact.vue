<template>
  <div id="contact">
    <h1>Contact</h1>
    <label for="email">Email - </label>
    <a id="email" href="mailto:jay@jaysull.dev">jay@jaysull.dev</a>
    <br />
    <label for="linkedin">LinkedIn - </label>
    <a
      id="linkedin"
      href="https://www.linkedin.com/in/the-jay-sullivan/"
      rel="noopener noreferrer"
      target="_blank"
      >https://www.linkedin.com/in/the-jay-sullivan/</a
    >
    <br />
    <label for="github">Github - </label>
    <a
      id="github"
      href="https://github.com/Jaygles"
      rel="noopener noreferrer"
      target="_blank"
      >https://github.com/Jaygles</a
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Contact",
})
export default class Contact extends Vue {}
</script>
