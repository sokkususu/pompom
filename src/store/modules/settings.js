export default {
  state: {
    focusDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 20 * 60,
    rounds: 4,
  },
  mutations: {
    applySettings(state, settings) {
      state.rounds = settings.rounds;
      state.focusDuration = state.time = state.duration =
        settings.focusDuration * 60;
      state.shortBreakDuration = settings.shortBreakDuration * 60;
      state.longBreakDuration = settings.longBreakDuration * 60;
    },
  },
  getters: {
    rounds: (state) => state.rounds,
    focusDuration: (state) => state.focusDuration / 60,
    shortBreakDuration: (state) => state.shortBreakDuration / 60,
    longBreakDuration: (state) => state.longBreakDuration / 60,
  },
};
