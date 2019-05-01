import Article from "../models/Article";

const create = (title, content, link, imageSet) => {
	return new Article(title, content, link, imageSet);
};

export { create };
