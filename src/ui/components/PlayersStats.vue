<template>
  <aside class="players-stats">
    <div class="players-stats__title">
      <h2>{{ selectedPlayer.name }}</h2>
      <span>{{ selectedPlayer.score }} bodova</span>
    </div>
    <div class="players-stats__list">
      <div class="players-stats__list-title">
        <p>Korisnik</p>
        <p>Bodovi</p>
      </div>
      <template v-for="(player, idx) in slicePlayers">
        <div
          @click="showAllPlayers()"
          style="height: 3rem; text-align: center; line-height: 0.6rem; font-size: 4rem; color: #686868; cursor: pointer;"
          :key="idx"
          v-if="player.last"
        >. . .</div>
        <Player :key="player._id" :player="player" :position="player.position"/>
      </template>
    </div>
  </aside>
</template>

<script>
import Player from "./Player";

export default {
	name: "PlayersStats",
	components: {
		Player
	},
	props: {
		players: {
			type: Array,
			default: () => []
		}
	},
	data: function() {
		return {
			currentPlayers: [...this.players],
			selectedPlayer: this.players[0] || {}
		};
	},
	computed: {
		slicePlayers: function(shouldSlice) {
			const slicedPlayers = [
				...this.currentPlayers.slice(0, 7),
				...this.currentPlayers.slice(-1)
			];

			return slicedPlayers.map((player, idx, arr) => {
				const lastPlayer = idx === arr.length - 1;
				const position = lastPlayer
					? this.currentPlayers.length
					: idx + 1;
				return { ...player, position, last: lastPlayer };
			});
		}
	},
	methods: {
		showAllPlayers: function() {
			this.currentPlayers = [...this.players];
			this.currentPlayers.map((player, idx) => ({
				...player,
				position: idx + 1
			}));

			console.log(this.currentPlayers);
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/components/_players_stats.scss";
</style>
