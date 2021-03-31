let timerId = null;

export default {
  state: {
    isPlay: false,
    status: "focus",
    workDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 20 * 60,
    duration: 25 * 60,
    round: 1,
    rounds: 4,
    time: 25 * 60,
  },
  mutations: {
    play(state) {
      state.isPlay = true;
    },
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
    applySettings(state, settings) {
      state.rounds = settings.rounds;
      state.workDuration = state.time = state.duration =
        settings.workDuration * 60;
      state.shortBreakDuration = settings.shortBreakDuration * 60;
      state.longBreakDuration = settings.longBreakDuration * 60;

      clearInterval(timerId);
      state.isPlay = false;
      state.round = 1;
    },
  },
  actions: {
    start({ commit, state }) {
      commit("play");

      timerId = setInterval(() => {
        if (state.time > 0) {
          commit("countdown");
        } else {
          commit("changeStatus");
          commit("resetTimer");
        }
      }, 1000);
    },
    skipTimer({ commit }) {
      commit("changeStatus");
      commit("resetTimer");
    },
  },
  getters: {
    progress: (state) => state.time / state.duration,
    isPlay: (state) => state.isPlay,

    rounds: (state) => state.rounds,
    workDuration: (state) => state.workDuration / 60,
    shortBreakDuration: (state) => state.shortBreakDuration / 60,
    longBreakDuration: (state) => state.longBreakDuration / 60,

    status: (state) => {
      return {
        shortBreak: "short break",
        longBreak: "long break",
        focus: `${state.round}/${state.rounds}`,
      }[state.status];
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
