<template>
  <div id="time-block">
    <TimerBar :height="clientWidth < 600 ? 200 : 280" :progress="progress" />
    <div id="time">{{ displayTime }}</div>
    <div id="status">{{ status }}</div>
  </div>
</template>

<script>
import TimerBar from "./TimerBar";

import { mapGetters } from "vuex";

export default {
  name: "TimeBlock",
  components: {
    TimerBar,
  },
  computed: {
    ...mapGetters(["clientWidth", "progress", "displayTime", "status"]),
  },
};
</script>

<style>
#time-block {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#time {
  font-size: 50px;
}

#status {
  font-size: 20px;
  color: #575757;
}

@media (min-width: 600px) {
  #time-block {
    height: 350px;
  }
}
</style>