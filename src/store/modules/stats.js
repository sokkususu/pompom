export default {
  state: {
    labels: ["JavaScript", "Vue"],
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
    addLabel(state, label) {
      state.labels.push(label);
    },
    addSession(state, session) {
      state.sessions.push(session);
    },
  },
  getters: {
    labels: (state) => state.labels,
    overview: (state) => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const weekAgo = new Date(today);
      weekAgo.setDate(today.getDate() - 7);

      const monthAgo = new Date(today);
      monthAgo.setDate(today.getDate() - 30);

      const stats = {
        totalSessions: state.sessions.length,
        totalTime: 0,
        todaySessions: 0,
        todayTime: 0,
        weekSessions: 0,
        weekTime: 0,
        monthSessions: 0,
        monthTime: 0,
      };

      state.sessions.forEach((session) => {
        stats.totalTime += session.time;

        if (session.date == today) {
          stats.todaySessions++;
          stats.todayTime += session.time;
        }

        if (weekAgo < session.date && session.date <= today) {
          stats.weekSessions++;
          stats.weekTime += session.time;
        }

        if (monthAgo < session.date && session.date <= today) {
          stats.monthSessions++;
          stats.monthTime += session.time;
        }
      });

      return stats;
    },

    daysOfWeekStats: (state) => (interval) => {
      const days = {
        sessions: [0, 0, 0, 0, 0, 0, 0],
        time: [0, 0, 0, 0, 0, 0, 0],
      };

      const today = new Date();
      const intervalAgo = new Date(today);
      intervalAgo.setDate(today.getDate() - interval);

      state.sessions.forEach((session) => {
        if (today > session.date && session.date > intervalAgo) {
          days.sessions[session.date.getDay()]++;
          days.time[session.date.getDay()] += session.time;
        }
      });

      return days;
    },

    labelsStats: (state) => (interval) => {
      const labels = {};
      for (let label of state.labels) {
        labels[label] = 0;
      }

      const today = new Date();
      const intervalAgo = new Date(today);
      intervalAgo.setDate(today.getDate() - interval);

      state.sessions.forEach((session) => {
        if (today > session.date && session.date > intervalAgo) {
          labels[session.label]++;
        }
      });

      return labels;
    },
  },
};
