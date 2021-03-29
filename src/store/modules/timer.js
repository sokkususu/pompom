let timerId = null;

export default {
  state: {
    isPlay: false,
    defaultTime: 25 * 60,
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
      state.time = state.defaultTime;
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
    progress: (state) => state.time / state.defaultTime,
    isPlay: (state) => state.isPlay,
    displayTime: (state) => {
      let minutes = Math.floor(state.time / 60);
      let seconds = state.time - minutes * 60;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      return minutes + ":" + seconds;
    },
  },
};
