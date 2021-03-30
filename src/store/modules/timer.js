let timerId = null;

export default {
  state: {
    status: "focus",
    isPlay: false,
    workDuration: 5,
    shortBreakDuration: 4,
    longBreakDuration: 6,
    duration: 5,
    round: 1,
    rounds: 4,
    time: 5,
  },
  mutations: {
    countdown(state) {
      state.time--;
    },
    pause(state) {
      clearInterval(timerId);
      state.isPlay = false;
    },
    play(state) {
      state.isPlay = true;
    },
    resetTimer(state) {
      clearInterval(timerId);
      state.isPlay = false;
      state.time = state.workDuration;
    },
    addRound(state) {
      state.round++;
    },
    setStatus(state, status) {
      state.status = status;
    },
    break(state) {
      switch (state.status) {
        case "shortBreak":
          state.time = state.duration = state.shortBreakDuration;
          break;
        case "longBreak":
          state.time = state.duration = state.longBreakDuration;
          break;
      }
    },
  },
  actions: {
    start({ commit, state }) {
      commit("play");
      timerId = setInterval(() => {
        if (state.time > 0) {
          commit("countdown");
        } else {
          commit("resetTimer");
        }
      }, 1000);
    },
  },
  getters: {
    progress: (state) => state.time / state.duration,
    isPlay: (state) => state.isPlay,
    rounds: (state) => state.round + "/" + state.rounds,

    displayTime: (state) => {
      let minutes = Math.floor(state.time / 60);
      let seconds = state.time - minutes * 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return minutes + ":" + seconds;
    },
  },
};
