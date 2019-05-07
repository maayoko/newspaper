<template>
  <router-link
    :class="`player player--${position}`"
    :to="{ path: `/players/${player.name}`, query: { playerId: player._id } }"
  >
    <div class="player__position">
      <span class="content-1">{{ position }}.</span>
    </div>
    <div class="player__personal-info">
      <img :alt="player.name" :src="`${publicPath}${player.imageSrc}`">
      <span class="content-2">{{ player.name }}</span>
    </div>
    <div class="player__score">
      <strong class="content-1">{{ player.score }}</strong>
      <span class="content-4">bodova</span>
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

