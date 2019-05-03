<template>
  <div class="player-container">
    <div class="player">
      <img class="player__image" :alt="player.name" :src="player.imageSrc">
      <h2 class="player__name">{{ player.name}}</h2>
      <hr>
      <p class="player__score">Score - {{ player.score }}</p>
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

