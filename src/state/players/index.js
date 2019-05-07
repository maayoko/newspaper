import * as apiPlayers from "@/api/players";
import { mapPlayers } from "@/api/players/mappers";

const players = {
	state: { list: null },
	mutations: {
		updatePlayers: (state, players) => {
			state.list = players;
		}
	},
	getters: {
		findPlayerById: state => id => {
			return state.list.find(player => player._id === id);
		}
	},
	actions: {
		getPlayers: async ({ commit }) => {
			try {
				const response = await apiPlayers.getAll();
				const playersObj = await response.json();
				commit("updatePlayers", mapPlayers(playersObj.players));
			} catch (e) {
				console.error(e);
			}
		}
	}
};

export { players };
