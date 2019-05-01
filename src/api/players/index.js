import players from "./players.json";

const getAll = () => {
	return Promise.resolve(players);
};

export { getAll };
