import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";
import store from "../state";

Vue.use(Router);

const router = new Router({
	scrollBehavior() {
		return { x: 0, y: 0 };
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/blog/:articleLink",
			name: "blog",
			component: () =>
				import(/* webpackChunkName: "article" */ "./pages/Blog.vue")
		},
		{
			path: "/players/:playerName",
			name: "user",
			component: () =>
				import(/* webpackChunkName: "user" */ "./pages/Player.vue")
		}
	]
});

router.beforeEach((to, from, next) => {
	const { articles, players } = store.state;
	const articlesFetched = articles.list != null;
	const playersFetched = players.list != null;

	if ((!articlesFetched || !playersFetched) && to.path !== "/") {
		router.push("/");
	}
	next();
});

export default router;
