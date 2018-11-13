const express = require("express");
const router = express.Router();

const mongoose = require("../db/connection");
// mongoose.set("debug", true);
const VideoPlaylist = mongoose.model("Videoplaylist");

router.get("/", (req, res) => {
  VideoPlaylist.find({}).then(videos => res.json(videos));
});

module.exports = router;
