import Vue from "vue";
import App from "./ui/App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./ui/styles/_main.scss";

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	const { articles, players } = store.state;
	if ((articles == null || players == null) && to.path !== "/") {
		router.replace("/");
	}
	next();
});

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");

store.dispatch("getPlayers");
store.dispatch("getArticles");
