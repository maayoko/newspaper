import Vue from "vue";
import Vuex from "vuex";
import * as apiArticles from "@/api/articles";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {
		articles: {
			state: { articles: null },
			mutations: {
				getArticles: async state => {
					state.articles = await apiArticles.getAll();
				}
			},
			getters: {
				findOneById: state => id => {
					return state.articles.find(article => article._id === id);
				}
			}
		}
	}
});
