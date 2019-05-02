import Vue from "vue";
import Router from "vue-router";
import Home from "./ui/pages/Home.vue";
import store from "./store";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			beforeEnter: async (to, from, next) => {
				const haveArticles = store.state.articles != null;
				if (!haveArticles) {
					await store.dispatch("getArticles");
				}
				next();
			},
			component: Home
		},
		{
			path: "/blog/:articleLink",
			name: "blog",
			beforeEnter: async (to, from, next) => {
				const havePlayers = store.state.players != null;
				if (!havePlayers) {
					await store.dispatch("getPlayers");
				}
				next();
			},
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "article" */ "./ui/pages/Blog.vue")
		},
		{
			path: "/players/:playerName",
			name: "user",
			component: () =>
				import(/* webpackChunkName: "user" */ "./ui/pages/Player.vue")
		}
	]
});
