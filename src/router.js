import Vue from "vue";
import Router from "vue-router";
import Home from "./ui/pages/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/blog/:articleId",
			name: "blog",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () =>
				import(/* webpackChunkName: "article" */ "./ui/pages/Blog.vue")
		},
		{
			path: "/players/:playerId",
			name: "user",
			component: () =>
				import(/* webpackChunkName: "user" */ "./ui/pages/Player.vue")
		}
	]
});
