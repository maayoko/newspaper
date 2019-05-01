<template>
  <header class="header">
    <Logo/>
  </header>
</template>

<script>
import Logo from "@/ui/components/Logo";

export default {
	name: "Header",
	components: {
		Logo
	}
};
</script>


<style lang="scss" scoped>
@import "@/ui/styles/layout/_header.scss";
</style>

