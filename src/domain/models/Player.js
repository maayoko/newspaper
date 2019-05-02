import Base from "./Base";

class Player extends Base {
	constructor(id, name, score, imageSrc) {
		super();
		this.id = id;
		this.name = name;
		this.score = score;
		this.imageSrc = imageSrc;
	}
}

export default Player;
