import axios from "axios";
import $ from "jquery";

const state = {};

const getters = {};

const actions = {
  animateCards({ commit }, timeout) {
    setTimeout(() => {
      $(".card").addClass("fadeout");
    }, timeout);
  }
};

const mutations = {};

export default {
  state,
  getters,
  mutations,
  actions
};
