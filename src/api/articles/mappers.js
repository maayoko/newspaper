import * as articleService from "@/domain/services/articleService";

const mapArticles = articles => {
	return articles.map(article =>
		articleService.create(
			article.title,
			article.content,
			article.link,
			article.imageSet
		)
	);
};

export { mapArticles };
