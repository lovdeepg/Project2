const express = require("express");
const router = express.Router();

// const mongoose = require("../db/connection");

// const VideoPlaylist = mongoose.model("Videoplaylist");

router.get("/", (req, res) => {
  res.send("<h1>Sup Multiverse?</h1>");
});

module.exports = router;
