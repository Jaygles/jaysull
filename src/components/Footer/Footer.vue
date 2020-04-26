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
  height: 66px;
  padding: 0 22px;
  flex-shrink: 0;
}
</style>
