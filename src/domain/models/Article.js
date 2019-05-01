import Base from "./Base";

class Article extends Base {
	constructor(title, content, imageSet) {
		super();

		this.title = title;
		this.content = content;
		this.imageSet = imageSet;
	}
}

export default Article;
