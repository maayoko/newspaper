import Player from "../models/Player";

const create = (id, name, score, imageSrc) => {
	return new Player(id, name, score, imageSrc);
};

export { create };
