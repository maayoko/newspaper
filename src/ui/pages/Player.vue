<template>
  <div class="player-container u-full-width">
    <div class="player">
      <img class="player__image" :alt="player.name" :src="`${publicPath}${player.imageSrc}`">
      <h2 class="player__name heading-4">{{ player.name}}</h2>
      <hr>
      <p class="player__score content-1">Score - {{ player.score }}</p>
    </div>
  </div>
</template>

<script>
export default {
	name: "PlayerPage",
	data() {
		const { playerId } = this.$route.query;
		const player = this.$store.getters.findPlayerById(playerId);
		return { player };
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/pages/_player.scss";
</style>

