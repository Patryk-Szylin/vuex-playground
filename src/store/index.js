import Vuex from "vuex";
import Vue from "vue";
import appStore from "./modules/appStore";
import centralStore from "./modules/centralStore";
// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    app: appStore,
    central: centralStore
  }
});
