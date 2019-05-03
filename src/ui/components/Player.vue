<template>
  <router-link
    :class="`player player--${position}`"
    :to="{ path: `/players/${player.name}`, query: { playerId: player._id } }"
  >
    <div>{{ position }}.</div>
    <div>
      <img :alt="player.name" :src="player.imageSrc">
      {{ player.name }}
    </div>
    <div>
      <strong>{{ player.score }}</strong> bodova
    </div>
  </router-link>
</template>

<script>
import Player from "@/domain/models/Player";
import * as playerService from "@/domain/services/playerService";

export default {
	name: "Player",
	props: {
		player: {
			type: Object,
			default: playerService.create(1, "John Doe", 3400, "")
		},
		position: {
			type: Number,
			default: 1
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/components/_player.scss";
</style>

