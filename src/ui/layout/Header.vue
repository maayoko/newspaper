<template>
  <header class="header">
    <div class="container container--restricted">
      <div class="vertical-center">
        <Logo/>
      </div>
    </div>
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
@import "@/ui/styles/layout/_grid.scss";
@import "@/ui/styles/_utilities.scss";
</style>

