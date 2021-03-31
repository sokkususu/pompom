import { DISPLAY_STATUS } from "@/consts";

let timerId = null;

export default {
  state: {
    isPlay: false,
    status: "focus",
    duration: 25 * 60,
    round: 1,
    time: 25 * 60,
  },
  mutations: {
    play(state) {
      state.isPlay = true;
    },
    stop(state) {
      state.isPlay = false;
    },
    countdown(state) {
      state.time--;
    },
    pause(state) {
      clearInterval(timerId);
      state.isPlay = false;
    },
    addRound(state) {
      state.round++;
    },
    resetRounds(state) {
      state.round = 1;
    },
    changeStatus(state, status) {
      state.status = status;
    },
    resetTime(state, duration) {
      state.time = state.duration = duration;
    },
  },
  actions: {
    start({ commit, state, dispatch }) {
      commit("play");

      timerId = setInterval(() => {
        if (state.time > 0) {
          commit("countdown");
        } else {
          commit("nextStatus");
          dispatch("resetTimer");
        }
      }, 1000);
    },
    skipTimer({ dispatch }) {
      dispatch("nextStatus");
      dispatch("resetTimer");
    },
    resetTimer({ state, commit, rootGetters }) {
      clearInterval(timerId);
      commit("stop");
      commit("resetTime", rootGetters[`${state.status}Duration`] * 60);
    },
    nextStatus({ state, commit, rootGetters }) {
      let status;
      if (state.status == "focus") {
        status = state.round != rootGetters.rounds ? "shortBreak" : "longBreak";
      } else {
        state.status == "shortBreak"
          ? commit("addRound")
          : commit("resetRounds");
        status = "focus";
      }
      commit("changeStatus", status);
    },
  },
  getters: {
    progress: (state) => state.time / state.duration,
    isPlay: (state) => state.isPlay,

    status: (state, rootGetters) => {
      let status = DISPLAY_STATUS[state.status];
      return state.status == "focus"
        ? `${status} ${state.round}/${rootGetters.rounds}`
        : status;
    },

    displayTime: (state) => {
      let minutes = Math.floor(state.time / 60);
      let seconds = state.time - minutes * 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return minutes + ":" + seconds;
    },
  },
};
