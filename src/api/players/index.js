import * as http from "@/common/http";
import apiConfig from "@/config/api.json";
// import playersObj from "./players.json";
// import { mapPlayers } from "./mappers";

const getAll = () => {
	// return Promise.resolve(mapPlayers(playersObj.players));
	return http.get(`${apiConfig.API_URL}/players`);
};

export { getAll };
