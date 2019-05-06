import Vue from "vue";
import Vuex from "vuex";
import { articles } from "./articles";
import { players } from "./players";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		articles,
		players
	}
});
