<template>
  <footer />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Footer",
})
export default class Footer extends Vue {}
</script>

<style>
footer {
  height: 34px;
  padding: 0 14px;
  flex-shrink: 0;
}
</style>
