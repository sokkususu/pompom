<template>
  <div class="timer">
    <Task />
    <div class="time-block">
      <TimerBar :height="clientWidth < 600 ? 200 : 280" :progress="progress" />
      <div class="time">{{ displayTime }}</div>
      <div class="status">{{ isPlay ? "focus" : "pause" }}</div>
    </div>
    <div class="control">
      <round-button @click.native="resetTimer">
        <icon-base
          width="12"
          height="12"
          icon-name="icon-stop"
          viewBox="0 0 12 12"
          ><icon-stop />
        </icon-base>
      </round-button>
      <round-button accent @click.native="play">
        <icon-base
          style="padding-left: 5px"
          width="18"
          height="18"
          icon-name="icon-stop"
          viewBox="0 0 12 12"
        >
          <icon-start v-if="!isPlay" />
          <icon-pause v-else />
        </icon-base>
      </round-button>
      <round-button>
        <icon-base
          width="12"
          height="12"
          icon-name="icon-stop"
          viewBox="0 0 12 12"
          ><icon-next stroke="currentColor" />
        </icon-base>
      </round-button>
    </div>
  </div>
</template>

<script>
import TimerBar from "./TimerBar";
import Task from "./Task";
import RoundButton from "../RoundButton";

import IconBase from "../IconBase";
import IconNext from "../icons/timer_icons/IconNext";
import IconStart from "../icons/timer_icons/IconStart";
import IconStop from "../icons/timer_icons/IconStop";
import IconPause from "../icons/timer_icons/IconPause";

import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    TimerBar,
    Task,
    RoundButton,
    IconBase,
    IconNext,
    IconStart,
    IconStop,
    IconPause,
  },
  computed: {
    ...mapGetters(["clientWidth", "isPlay", "progress", "displayTime"]),
  },
  created() {
    window.addEventListener("resize", this.updateClientWidth);
  },
  methods: {
    ...mapMutations(["updateClientWidth", "resetTimer"]),
    play() {
      if (!this.isPlay) {
        this.$store.dispatch("start");
      } else {
        this.$store.commit("pause");
      }
    },
  },
};
</script>

<style scoped>
.timer {
  text-align: center;
  position: relative;
}

.time-block {
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.time {
  font-size: 50px;
}

.status {
  font-size: 20px;
  color: #575757;
}

.control {
  display: flex;
  width: 178px;
  margin: auto;
  justify-content: space-between;
  align-items: center;
}

@media (min-width: 600px) {
  .time-block {
    height: 350px;
  }
}
</style>