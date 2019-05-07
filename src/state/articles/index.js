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
			apiArticles
				.getAll()
				.then(response => {
					console.log(response);
					return response.json();
				})
				.then(articles =>
					commit("updateArticles", mapArticles(articles))
				)
				.catch(err => console.error(err));
		}
	}
};

export { articles };
