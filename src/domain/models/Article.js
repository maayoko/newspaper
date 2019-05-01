import Base from "./Base";

class Article extends Base {
	constructor(title, content, link, imageSet) {
		super();

		this.title = title;
		this.content = content;
		this.link = link;
		this.imageSet = imageSet;
	}
}

export default Article;
