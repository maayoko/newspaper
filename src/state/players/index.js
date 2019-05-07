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
		getPlayers: ({ commit }) => {
			apiPlayers
				.getAll()
				.then(response => {
					console.log(response);
					return response.json();
				})
				.then(playersObj =>
					commit("updatePlayers", mapPlayers(playersObj.players))
				)
				.catch(err => console.error(err));
		}
	}
};

export { players };
