<template>
  <div class="timer">
    <Task />
    <div class="time-block">
      <TimerBar :height="width < 600 ? 200 : 280" :progress="progress()" />
      <div class="time">{{ displayTime() }}</div>
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
      <round-button accent @click.native="start">
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
// import TimerControl from "./TimerControl";
import RoundButton from "../RoundButton";

import IconBase from "../IconBase";
import IconNext from "../icons/timer_icons/IconNext";
import IconStart from "../icons/timer_icons/IconStart";
import IconStop from "../icons/timer_icons/IconStop";
import IconPause from "../icons/timer_icons/IconPause";

import { mapState } from "vuex";

let timerId;

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
  data() {
    return {
      // isPlay: false,
      // defaultTime: 25 * 60,
      // time: 25 * 60,
    };
  },
  computed: mapState(["width", "isPlay", "defaultTime", "time"]),
  created() {
    window.addEventListener("resize", this.updateWidth);
  },
  methods: {
    updateWidth() {
      this.$store.commit("updateWidth");
    },
    displayTime() {
      let minutes = Math.floor(this.$store.state.time / 60);
      let seconds = this.$store.state.time - minutes * 60;

      minutes = minutes < 10 ? "0" + minutes : +minutes;
      seconds = seconds < 10 ? "0" + seconds : +seconds;

      return minutes + ":" + seconds;
    },
    progress() {
      return this.$store.state.time / this.$store.state.defaultTime;
    },
    countdown() {
      timerId = setInterval(() => {
        if (this.$store.state.time > 0) {
          this.$store.state.time--;
        } else {
          clearInterval(timerId);
        }
      }, 1000);
    },
    resetTimer() {
      clearInterval(timerId);
      this.$store.state.time = this.$store.state.defaultTime;
      this.$store.state.isPlay = false;
    },
    start() {
      if (!this.$store.state.isPlay) {
        this.countdown();
      } else {
        clearInterval(timerId);
      }
      this.$store.state.isPlay = !this.$store.state.isPlay;
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