<i18n>
{
  "en": {
    "heading": "Companies I've worked with",
    "current": "Current",
    "title": "Title",
    "seniorSoftwareEngineer": "Senior Software Engineer",
    "softwareEngineer": "Software Engineer",
    "withTheCompanyFor": "With the company for",
    "years": "years",
    "year": "year",
    "months": "months",
    "month": "month",
    "and": "and",
    "days": "days"
  },
  "es": {
    "heading": "Compañías con las que he trabajado",
    "current": "Corriente",
    "title": "Título",
    "seniorSoftwareEngineer": "Ingeniero de software senior",
    "softwareEngineer": "Ingeniero de software",
    "withTheCompanyFor": "Con la empresa durante",
    "years": "años",
    "year": "año",
    "months": "meses",
    "month": "mes",
    "and": "y",
    "days": "dias"
  }
}
</i18n>

<template>
  <div id="career">
    <h1>{{ $t("heading") }}</h1>
    <br />
    <h2>Omnitracs ({{ $t("current") }})</h2>
    <a
      href="https://www.omnitracs.com/"
      rel="noopener noreferrer"
      target="_blank"
      >Website</a
    >
    <p>{{ $t("title") }} - {{ $t("seniorSoftwareEngineer") }}</p>
    <p>{{ $t("withTheCompanyFor") }} {{ timeSpent }}</p>
    <br />
    <h2>IHS Markit</h2>
    <a
      href="https://www.ihsmarkit.com/"
      rel="noopener noreferrer"
      target="_blank"
      >Website</a
    >
    <p>{{ $t("title") }} - {{ $t("softwareEngineer") }}</p>
    <p>
      {{ $t("withTheCompanyFor") }} 1 {{ $t("year") }}, 0 {{ $t("months") }},
      {{ $t("and") }} 0 {{ $t("days") }}
    </p>
    <br />
    <h2>Fennec Industries Llc</h2>
    <p>{{ $t("title") }} - Grand High Poobah De Doink of Web Development</p>
    <p>
      {{ $t("withTheCompanyFor") }} 1 {{ $t("year") }}, 1 {{ $t("month") }},
      {{ $t("and") }} 0 {{ $t("days") }}
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Career",
})
export default class Career extends Vue {
  get timeSpent() {
    const msInDay = 86400000;
    const start = new Date("2019-07-08T08:00:00-0700");
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (86400000 * 365));
    const diffMinusYears = diff - years * (86400000 * 365);
    const months = Math.floor(diffMinusYears / (msInDay * 30));
    const diffMinusYearsAndMonths = diffMinusYears - months * (msInDay * 30);
    const days = Math.floor(diffMinusYearsAndMonths / msInDay);

    return `${years} ${this.$t("years")}, ${months} ${this.$t(
      "months"
    )}, ${this.$t("and")} ${days} ${this.$t("days")}`;
  }
}
</script>
