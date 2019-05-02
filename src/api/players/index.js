import playersObj from "./players.json";
import { mapPlayers } from "./mappers";

const getAll = () => {
	return Promise.resolve(mapPlayers(playersObj.players));
};

export { getAll };
