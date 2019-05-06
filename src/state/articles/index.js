import * as apiArticles from "@/api/articles";

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
			commit("updateArticles", await apiArticles.getAll());
		}
	}
};

export { articles };
