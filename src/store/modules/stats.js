export default {
  state: {
    sessions: [
      {
        date: new Date(2021, 2, 30),
        time: 15,
        label: "JavaScript",
      },
      {
        date: new Date(2021, 3, 1),
        time: 25,
        label: "Vue",
      },
    ],
  },
  mutations: {
    addSession(state, session) {
      state.sessions.push(session);
    },
  },
  getters: {
    totalSessions: (state) => state.sessions.length,
    totalTime: (state) =>
      state.sessions.reduce((sum, current) => sum + current.time, 0),

    todaySessions: (state) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return state.sessions.reduce(
        (sum, current) => (+current.date == +today ? ++sum : sum),
        0
      );
    },

    todayTime: (state) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      return state.sessions.reduce(
        (sum, current) =>
          +current.date == +today ? (sum += current.time) : sum,
        0
      );
    },

    weekSessions: (state) => {
      const today = new Date();
      const weekAgo = new Date(today);
      weekAgo.setDate(today.getDate() - 7);

      return state.sessions.reduce(
        (sum, current) =>
          +today > +current.date && +current.date > +weekAgo ? ++sum : sum,
        0
      );
    },

    weekTime: (state) => {
      const today = new Date();
      const weekAgo = new Date(today);
      weekAgo.setDate(today.getDate() - 7);

      return state.sessions.reduce(
        (sum, current) =>
          +today > +current.date && +current.date > +weekAgo
            ? (sum += current.time)
            : sum,
        0
      );
    },

    monthSession: (state) => {
      const today = new Date();
      const monthAgo = new Date(today);
      monthAgo.setDate(today.getDate() - 30);

      return state.sessions.reduce(
        (sum, current) =>
          +today > +current.date && +current.date > +monthAgo ? ++sum : sum,
        0
      );
    },

    monthTime: (state) => {
      const today = new Date();
      const monthAgo = new Date(today);
      monthAgo.setDate(today.getDate() - 30);

      return state.sessions.reduce(
        (sum, current) =>
          +today > +current.date && +current.date > +monthAgo
            ? (sum += current.time)
            : sum,
        0
      );
    },

    daysOfWeekSessions: (state) => (interval) => {
      const days = [0, 0, 0, 0, 0, 0, 0];

      const today = new Date();
      const intervalAgo = new Date(today);
      intervalAgo.setDate(today.getDate() - interval);

      state.sessions.forEach((value) => {
        if (+today > +value.date && +value.date > +intervalAgo)
          days[value.date.getDay()]++;
      });

      return days;
    },

    daysOfWeekTime: (state) => (interval) => {
      const days = [0, 0, 0, 0, 0, 0, 0];

      const today = new Date();
      const intervalAgo = new Date(today);
      intervalAgo.setDate(today.getDate() - interval);

      state.sessions.forEach((value) => {
        if (+today > +value.date && +value.date > +intervalAgo)
          days[value.date.getDay()] += value.time;
      });

      return days;
    },
  },
};
