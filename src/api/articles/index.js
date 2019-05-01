// import * as http from "@/common/http";
// import apiConfig from "@/config/api.json";
import articles from "./articles.json";
import { mapArticles } from "./mappers";

const getAll = () => {
	return Promise.resolve(mapArticles(articles));
	// return http.get(`${apiConfig.API_URL}/articles`);
};

export { getAll };
