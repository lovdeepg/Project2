const express = require("express");
const parser = require("body-parser");

const cors = require("cors");
const app = express();

app.use(cors());
const playlistController = require("./controllers/videoplaylistcontroller");

app.use(parser.urlencoded({ extended: true })); // interprets key value pairs in URLs
app.use(parser.json()); // interprets a stringified JSON object on the request body
app.use("/videoplaylist", playlistController);

app.listen(3000, () => console.log("They see me rollin...on port 3000..."));
