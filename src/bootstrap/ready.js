import Vue from "vue";
import App from "../ui/App.vue";
import router from "../ui/router";
import store from "../state";
import "../registerServiceWorker";
import "../ui/styles/_main.scss";

export const ready = app => {
	Vue.config.productionTip = false;

	new Vue({ router, store, render: h => h(App) }).$mount("#app");

	store.dispatch("getPlayers");
	store.dispatch("getArticles");
};
