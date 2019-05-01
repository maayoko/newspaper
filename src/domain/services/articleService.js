import Article from "../models/Article";

const create = (title, content, imageSet) => {
	return new Article(title, content, imageSet);
};

export { create };
