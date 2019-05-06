import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/Home.vue";

Vue.use(Router);

export default new Router({
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
