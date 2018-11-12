const express = require("express");
const router = express.Router();

const mongoose = require("../db/connection");

const VideoPlaylist = mongoose.model("Videoplaylist");

router.get("/", (req, res) => {
  VideoPlaylist.find({}).then(videoplaylist => res.json(videoplaylist));
});
