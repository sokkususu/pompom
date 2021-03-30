let timerId = null;

export default {
  state: {
    status: "focus",
    workDuration: 3,
    shortBreakDuration: 2,
    longBreakDuration: 4,
    duration: 3,
    round: 1,
    rounds: 2,
    time: 3,
  },
  mutations: {
    countdown(state) {
      state.time--;
    },
    pause(state) {
      clearInterval(timerId);
      state.isPlay = false;
    },
    resetTimer(state) {
      clearInterval(timerId);
      state.isPlay = false;
      state.duration = state.time =
        state.status == "shortBreak"
          ? state.shortBreakDuration
          : state.status == "longBreak"
          ? state.longBreakDuration
          : state.workDuration;
    },
    addRound(state) {
      state.round++;
    },
    changeStatus(state) {
      let status;

      if (state.status == "focus") {
        status = state.round != state.rounds ? "shortBreak" : "longBreak";
      } else {
        state.status == "shortBreak" ? state.round++ : (state.round = 1);
        status = "focus";
      }

      state.status = status;
    },
    resetRounds(state) {
      state.round = 1;
    },
    skipTimer(state) {},
  },
  actions: {
    start({ commit, state }) {
      timerId = setInterval(() => {
        if (state.time > 0) {
          commit("countdown");
        } else {
          commit("changeStatus");
          commit("resetTimer");
        }
      }, 1000);
    },
  },
  getters: {
    progress: (state) => state.time / state.duration,
    isPlay: (state) => state.isPlay,

    status: (state) => {
      return state.status == "shortBreak"
        ? "short break"
        : state.status == "longBreak"
        ? "long break"
        : state.round + "/" + state.rounds;
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
