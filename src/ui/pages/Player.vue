<template>
  <div>
    <h2>{{ player.name}}</h2>
    <p>{{ player.score }}</p>
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
