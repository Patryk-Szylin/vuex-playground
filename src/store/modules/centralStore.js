import axios from "axios";

const state = {
  counter: 0,
  user: {
    name: "",
    email: ""
  }
};

const getters = {
  addCurrencyToCounter: function(state) {
    return `$ ${state.counter} (dollars)`;
  },
  incrementCounterByTen: function(state) {
    return state.counter + 10;
  }
};

const mutations = {
  increase: function(state) {
    state.counter++;
  },
  increaseBy: function(state, payload) {
    state.counter += payload.amount;
  },
  decrease: function(state) {
    state.counter--;
  },
  setUser: function(state, payload) {
    state.user.name = payload.name;
    state.user.email = payload.email;
  }
};

const actions = {
  increase: function({ commit }) {
    commit("increase");
  },

  decrease: function({ commit }) {
    commit("decrease");
  },

  asyncIncrement: function({ commit }) {
    setTimeout(() => {
      commit("increaseBy", { amount: 10 });
    }, 3000);
  },

  async getUser({ commit }, userId) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/` + userId
    );
    commit("setUser", response.data);
  }
};

export default {
  actions,
  mutations,
  getters,
  state
};
