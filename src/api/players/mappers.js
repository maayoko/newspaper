import * as playerService from "@/domain/services/playerService";

const mapPlayers = players => {
	return players.map(player =>
		playerService.create(
			player.id,
			player.name,
			player.score,
			"img/players/person50x50.png"
		)
	);
};

export { mapPlayers };
