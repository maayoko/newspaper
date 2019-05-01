// import * as http from "@/common/http";
// import apiConfig from "@/config/api.json";
import articles from "./articles.json";

const getAll = () => {
	return articles;
	// return http.get(`${apiConfig.API_URL}/articles`);
};

export { getAll };
