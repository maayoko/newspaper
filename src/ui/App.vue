<template>
  <div id="app">
    <Header/>
    <Main>
      <transition name="slide">
        <router-view/>
      </transition>
    </Main>
  </div>
</template>

<script>
import Header from "@/ui/layout/Header";
import Main from "@/ui/layout/Main";

export default {
	name: "app",
	components: {
		Header,
		Main
	}
};
</script>

<style lang="scss" scoped>
.slide-enter-active {
	animation: coming 1s;
	animation-delay: 0.5s;
	opacity: 0;
}

.slide-leave-active {
	animation: going 1s;
}

@keyframes going {
	from {
		transform: translateX(0);
	}
	to {
		transform: translateX(-50px);
		opacity: 0;
	}
}

@keyframes coming {
	from {
		transform: translateX(-50px);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
}
</style>


