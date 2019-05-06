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
@import "@/ui/styles/_animations.scss";
.slide-enter-active {
	animation: coming 1s;
	animation-delay: 0.5s;
	opacity: 0;
}

.slide-leave-active {
	animation: going 1s;
}
</style>


