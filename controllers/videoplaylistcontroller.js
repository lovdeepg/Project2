const express = require("express");
const router = express.Router();
const { VideoPlaylist, Comment } = require("../models/videoplaylist");
/*
make a new form for videoplaylist
get route to show post form
route to accept post request

create videoplaylist inside the post action

*/

// router.get("/", (req, res) => {
//   res.send("this is the test  route");
// });

// router.get("/", (req, res) => {
//   res.redirect("index");
// });

router.get("/", (req, res) => {
  VideoPlaylist.find({}).then(videos => {
    res.render("index", { videos });
  });
});

// to get new form
router.get("/new", (req, res) => {
  res.render("new");
});

// this is for create
router.post("/new", (req, res) => {
  VideoPlaylist.create({
    title: req.body.title,
    url: req.body.url,
    comments: req.body.comments
  })
    .then(videos => {
      res.redirect("new" + { videos });
    })
    .catch(err => {
      console.log(err);
    });
});
// this is for show
router.get("/:id", (req, res) => {
  VideoPlaylist.findOne({ _id: req.params.id }).then(videos => {
    res.redirect("show", { videos });
  });
});

router.get("edit/:id", (req, res) => {
  VideoPlaylist.findById(req.params.id).then(video => {
    res.render("edit", video);
  });
});

module.exports = router;
