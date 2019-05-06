import * as apiPlayers from "@/api/players";

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
			commit("updatePlayers", await apiPlayers.getAll());
		}
	}
};

export { players };
