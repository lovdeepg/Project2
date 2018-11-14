const express = require("express");
const router = express.Router();

const mongoose = require("../db/connection");
// mongoose.set("debug", true);
const VideoPlaylist = mongoose.model("Videoplaylist");

router.get("/", (req, res) => {
  VideoPlaylist.find({}).then(videos => res.json(videos));
});

// router.post("/", (req, res) => {
//   VideoPlaylist.create(req.body).then(videos => res.json(videos));
// });

router.get("/:id", (req, res) => {
  VideoPlaylist.findById(req.params.id).then(video => {
    res.json(video);
  });
});

router.post("/", (req, res) => {
  VideoPlaylist.create(req.body).then(video => {
    VideoPlaylist.find({}).then(videos => {
      res.json(videos);
    });
  });
});

module.exports = router;
