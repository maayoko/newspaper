<template>
  <div class="player">
    <div>{{ position }}.</div>
    <div>{{ player.name }}</div>
    <div>
      <strong>{{ player.score }}</strong> bodova
    </div>
  </div>
</template>

<script>
import Player from "@/domain/models/Player";
import * as playerService from "@/domain/services/playerService";

export default {
	name: "Player",
	props: {
		player: {
			type: Player,
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

