<template>
  <div id="career">
    <h1>Companies I've worked with</h1>
    <br />
    <h2>Omnitracs (Current)</h2>
    <a
      href="https://www.omnitracs.com/"
      rel="noopener noreferrer"
      target="_blank"
      >Website</a
    >
    <p>Title - Senior Software Engineer</p>
    <p>With the company for {{ timeSpent }}</p>
    <br />
    <h2>IHS Markit</h2>
    <a
      href="https://www.ihsmarkit.com/"
      rel="noopener noreferrer"
      target="_blank"
      >Website</a
    >
    <p>Title - Software Engineer</p>
    <p>With the company for 1 year, 0 months, and 0 days</p>
    <br />
    <h2>Fennec Industries Llc</h2>
    <p>Title - Grand High Poobah De Doink of Web Development</p>
    <p>With the company for 1 year, 1 month, and 0 days</p>
  </div>
</template>

<script>
export default {
  name: "Career",
  computed: {
    timeSpent() {
      const msInDay = 86400000;
      const start = new Date("2019-07-08T08:00:00-0700");
      const now = new Date();
      const diff = now.getTime() - start.getTime();
      const years = Math.floor(diff / (86400000 * 365));
      const diffMinusYears = diff - years * (86400000 * 365);
      const months = Math.floor(diffMinusYears / (msInDay * 30));
      const diffMinusYearsAndMonths = diffMinusYears - months * (msInDay * 30);
      const days = Math.floor(diffMinusYearsAndMonths / msInDay);

      return `${years} years, ${months} months, and ${days} days`;
    },
  },
};
</script>

<style>
#career {
  padding-bottom: 34px;
}
</style>
