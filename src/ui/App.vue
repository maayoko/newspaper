<template>
  <div id="app">
    <Header/>
    <Main>
      <router-view/>
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

