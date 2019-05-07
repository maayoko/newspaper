import Vue from "vue";

const publicPathMixin = Vue.mixin({
	data: () => {
		return {
			publicPath: process.env.BASE_URL
		};
	}
});

export { publicPathMixin };
