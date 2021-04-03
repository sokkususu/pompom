<template>
  <div id="stats">
    <div>totalSessions: {{ overview.totalSessions }}</div>
    <div>totalTime: {{ overview.totalTime }}</div>
    <div>todaySessions: {{ overview.todaySessions }}</div>
    <div>todayTime: {{ overview.todayTime }}</div>
    <div>weekSessions: {{ overview.weekSessions }}</div>
    <div>weekTime: {{ overview.weekTime }}</div>
    <div>monthSessions: {{ overview.monthSessions }}</div>
    <div>monthTime: {{ overview.monthTime }}</div>
    <div>daysOfWeek: {{ daysOfWeekStats(30) }}</div>
    <div>labels: {{ labelsStats(30) }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Stats",
  methods: {},
  computed: {
    ...mapGetters(["daysOfWeekStats", "overview", "labelsStats"]),
  },
};
</script>

<style>
</style>