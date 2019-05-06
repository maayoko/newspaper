<template>
  <aside class="players-stats">
    <div class="players-stats__title">
      <h2>{{ selectedPlayer.name }}</h2>
      <span>{{ selectedPlayer.score }} bodova</span>
    </div>
    <div class="players-stats__list">
      <div class="players-stats__list-title">
        <p>Korisnik</p>
        <p @click="reversePlayersList()">Bodovi</p>
      </div>
      <template v-for="(player, idx) in slicePlayers">
        <div @click="showAllPlayers()" class="players-stats__dots" :key="idx" v-if="player.last">
          <span :style="`background-image: url(${require('@/assets/dots.png')});`"/>
        </div>
        <Player :key="player._id" :player="player" :position="player.position"/>
      </template>
    </div>
  </aside>
</template>

<script>
import Player from "./Player";

const operations = {
	CROPPED: "CROPPED",
	FULLLIST: "FULLLIST",
	REVERSEDLIST: "REVERSEDLIST"
};

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
			selectedPlayer: this.players[0] || {},
			operation: operations.CROPPED,
			fullList: false,
			reversedList: false
		};
	},
	computed: {
		slicePlayers: function() {
			const { operation: operationType, fullList, reversedList } = this;
			if (operationType === operations.CROPPED) {
				return this._getCroppedPlayers();
			} else if (operationType === operations.FULLLIST) {
				return this._getFullListOfPlayers();
			} else if (operationType === operations.REVERSEDLIST) {
				return this._getReversedListOfPlayers();
			}
		}
	},
	methods: {
		showAllPlayers() {
			this.operation = operations.FULLLIST;
			this.fullList = !this.fullList;
		},
		reversePlayersList() {
			this.operation = operations.REVERSEDLIST;
			this.reversedList = !this.reversedList;
		},
		_getSlicedPlayers(players) {
			return [...players.slice(0, 7), ...players.slice(-1)];
		},
		_mapSlicedPlayers(slicedPlayers, currentPlayers, operation) {
			return slicedPlayers.map((player, idx, arr) => {
				// If full list is requested we don't want to mark any player with last: true
				const lastPlayer = idx === arr.length - 1 && !operation;
				const position = lastPlayer ? currentPlayers.length : idx + 1;
				return { ...player, position, last: lastPlayer };
			});
		},
		_setSelectedPlayer(player) {
			this.selectedPlayer = player;
		},
		_getCroppedPlayers() {
			const { fullList } = this;
			const slicedPlayers = this._getSlicedPlayers(this.currentPlayers);

			return this._mapSlicedPlayers(
				slicedPlayers,
				this.currentPlayers,
				fullList
			);
		},
		_getFullListOfPlayers() {
			const players = (this.currentPlayers = [...this.players]);
			return players.map((player, idx) => ({
				...player,
				position: idx + 1
			}));
		},
		_getReversedListOfPlayers() {
			const { fullList } = this;
			const reversedPlayers = this.players.reverse();
			const slicedPlayers = [
				...(fullList
					? reversedPlayers
					: this._getSlicedPlayers(reversedPlayers))
			];

			const newPlayersList = this._mapSlicedPlayers(
				slicedPlayers,
				reversedPlayers,
				fullList
			);

			this._setSelectedPlayer(newPlayersList[0]);
			return newPlayersList;
		}
	}
};
</script>

<style lang="scss" scoped>
@import "@/ui/styles/components/_players_stats.scss";
</style>
