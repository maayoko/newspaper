import Vue from "vue";
import App from "./ui/App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./ui/styles/_main.scss";

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount("#app");
