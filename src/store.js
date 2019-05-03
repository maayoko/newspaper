import Vue from "vue";
import Vuex from "vuex";
import * as apiArticles from "@/api/articles";
import * as apiPlayers from "@/api/players";

Vue.use(Vuex);

export default new Vuex.Store({
	state: { articles: null, players: null },
	mutations: {
		updateArticles: (state, articles) => {
			state.articles = articles;
		},
		updatePlayers: (state, players) => {
			state.players = players;
		}
	},
	getters: {
		findArticleById: state => id => {
			return state.articles.find(article => article._id === id);
		},
		findPlayerById: state => id => {
			return state.players.find(player => player._id === id);
		}
	},
	actions: {
		getArticles: async ({ commit }) => {
			console.log("called");
			commit("updateArticles", await apiArticles.getAll());
		},
		getPlayers: async ({ commit }) => {
			commit("updatePlayers", await apiPlayers.getAll());
		}
	}
});
