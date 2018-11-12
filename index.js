const express = require("express");
const playlistController = require("./controllers/videoplaylistcontroller");
const app = express();

app.use("/controllers/", playlistController);

app.listen(3000, () => console.log("They see me rollin...on port 3000..."));
