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

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
