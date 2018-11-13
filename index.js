const express = require("express");
const parser = require("body-parser");
const app = express();

const playlistController = require("./controllers/videoplaylistcontroller");

app.use(parser.urlencoded({ extended: true })); // interprets key value pairs in URLs
app.use(parser.json()); // interprets a stringified JSON object on the request body
app.use("/", playlistController);

app.listen(4000, () => console.log("They see me rollin...on port 4000..."));
