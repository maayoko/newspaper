import * as apiArticles from "@/api/articles";
import { mapArticles } from "@/api/articles/mappers";

const articles = {
	state: { list: null },
	mutations: {
		updateArticles: (state, articles) => {
			state.list = articles;
		}
	},
	getters: {
		findArticleById: state => id => {
			return state.list.find(article => article._id === id);
		}
	},
	actions: {
		getArticles: async ({ commit }) => {
			try {
				const response = await apiArticles.getAll();
				const articles = await response.json();
				commit("updateArticles", mapArticles(articles));
			} catch (e) {
				console.error(e);
			}
		}
	}
};

export { articles };
