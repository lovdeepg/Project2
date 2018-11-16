const express = require("express");
const hbs = require("hbs");
const parser = require("body-parser");
const methodoverride = require("method-override");
const playlistController = require("./controllers/videoplaylistcontroller");
require("pretty-error").start();

// const cors = require("cors");
const app = express();

app.set("view engine", "hbs");
// app.use(cors());
app.use(methodoverride("_method"));
app.use(parser.json()); // interprets a stringified JSON object on the request body
app.use(parser.urlencoded({ extended: true })); // interprets key value pairs in URLs
app.use(express.static(__dirname + "/public"));
app.use("/", playlistController);

app.listen(3000, () => console.log("They see me rollin...on port 3000..."));
