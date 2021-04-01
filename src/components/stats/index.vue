<template>
  <div id="stats">
    <div>totalSessions: {{ totalSessions }}</div>
    <div>totalTime: {{ totalTime }}</div>
    <div>todaySessions: {{ todaySessions }}</div>
    <div>todayTime: {{ todayTime }}</div>
    <div>weekSessions: {{ weekSessions }}</div>
    <div>weekTime: {{ weekTime }}</div>
    <div>monthSession: {{ monthSession }}</div>
    <div>monthTime: {{ monthTime }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Stats",
  methods: {},
  computed: {
    ...mapGetters([
      "totalSessions",
      "totalTime",
      "todaySessions",
      "todayTime",
      "weekSessions",
      "weekTime",
      "monthSession",
      "monthTime",
    ]),
  },
};
</script>

<style>
</style>