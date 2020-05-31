<i18n>
{
  "en": {
    "firstParagraph": "Hello, my name is Jay and I am a software engineer. I am currently based out of Kansas City, Missouri, but have lived and worked in Washington, California, Kansas, and Colorado.",
    "secondParagraph": "My background is mostly in Javascript but I have experience with C# and am currently learning Rust. I am about 1/3 of the way in of",
    "bookTitle": "The Rust Programming Language",
    "bookAuthors": "by Steve Klabnik and Carol Nichols.",
    "thirdParagraph": "I enjoy finding performant and efficient solutions that fit well in the context of the codebase as a whole. Most of my experience is in building front-end UIs in Vue and React but I'm trying to branch out to areas that are more logic heavy like systems programming."
  },
  "es": {
    "firstParagraph": "Hola, mi nombre es Jay y soy ingeniero de software. Actualmente vivo en Kansas City, Missouri, pero he vivido y trabajado en Washington, California, Kansas y Colorado.",
    "secondParagraph": "Mi experiencia es principalmente en Javascript, pero tengo experiencia con C# y actualmente estoy aprendiendo Rust. Tengo aproximadamente 1/3 del camino del",
    "bookTitle": "The Rust Programming Language",
    "bookAuthors": "de Steve Klabnik y Carol Nichols.",
    "thirdParagraph": "Disfruto encontrando soluciones eficaces y eficaces que se ajusten bien al contexto de la base de código en su conjunto. La mayor parte de mi experiencia es en la construcción de interfaces de usuario de front-end en Vue y React, pero estoy tratando de diversificarme en áreas que son más lógicas, como la programación de sistemas."
  }
}
</i18n>
<template>
  <section id="about">
    <h1>{{ $t("pages.about") }}</h1>
    <p>{{ $t("firstParagraph") }}</p>
    <p>
      {{ $t("secondParagraph") }} <cite>{{ $t("bookTitle") }}</cite>
      {{ $t("bookAuthors") }}
    </p>
    <p>{{ $t("thirdParagraph") }}</p>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "About",
})
export default class Contact extends Vue {}
</script>
