import express from "express";
import path from "path";
import fs from "fs";
import bodyParser from "body-parser";
import compression from "compression";
import cors from "cors";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "..", "dist")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(cors());

app.get("/api/v1/articles", (req, res, next) => {
	fs.readFile(
		path.join(__dirname, "api/articles/articles.json"),
		"utf8",
		(err, articles) => {
			if (err) {
				return next(err);
			}

			res.header("Content-Type", "application/json");
			res.status(200).json(JSON.parse(articles));
		}
	);
});

app.get("/api/v1/players", (req, res, next) => {
	fs.readFile(
		path.join(__dirname, "api/players/players.json"),
		"utf8",
		(err, players) => {
			if (err) {
				return next(err);
			}

			res.header("Content-Type", "application/json");
			res.status(200).json(JSON.parse(players));
		}
	);
});

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.use((err, req, res, next) => {
	console.log(err);
	// res.header("Content-Type", "application/html");
	res.status(400);
	res.send(`<h1>Error occured: ${err.statusCode}</h1>`);
});

const server = app.listen(3000, () => {
	console.log("Express is listening on port: " + server.address().port);
});
