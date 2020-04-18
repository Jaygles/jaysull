<template>
  <footer>
    <Score />
    <Prize />
  </footer>
</template>

<script>
import Score from "@/components/Score/Score";
import Prize from "@/components/Prize/Prize";

export default {
  name: "Footer",
  components: {
    Score,
    Prize,
  },
};
</script>

<style scoped>
footer {
  height: 34px;
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
