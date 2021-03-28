export default {
  state: {
    isPlay: false,
    defaultTime: 25 * 60,
    time: 25 * 60,
    timerId: null,
  },
  mutations: {
    start(state) {
      function countdown(state) {
        state.timerId = setInterval(() => {
          state.time > 0 ? state.time-- : clearInterval(state.timerId);
        }, 1000);
      }

      !state.isPlay ? countdown(state) : clearInterval(state.timerId);
      state.isPlay = !state.isPlay;
    },
    resetTimer(state) {
      clearInterval(state.timerId);
      state.time = state.defaultTime;
      state.isPlay = false;
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
