export default {
  state: {
    clientWidth: document.documentElement.clientWidth,
    isMobile: /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(od|hone)/i.test(
      navigator.userAgent
    ),
  },
  mutations: {
    updateClientWidth(state) {
      state.clientWidth = document.documentElement.clientWidth;
    },
  },
  getters: {
    clientWidth: (state) => state.clientWidth,
    isMobile: (state) => state.isMobile,
  },
};
