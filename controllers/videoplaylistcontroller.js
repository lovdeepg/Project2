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
router.post("/", (req, res) => {
  VideoPlaylist.create({
    title: req.body.title,
    url: req.body.url,
    comments: req.body.content
  }).then(videos => {
    res.redirect("/");
  });
});
// this is for show
// router.get("/:id", (req, res) => {
//   VideoPlaylist.findOne({ _id: req.params.id }).then(videos => {
//     res.render("show", videos);
//   });
// });

// this should be get route for update
router.get("/edit/:id", (req, res) => {
  VideoPlaylist.findById(req.params.id).then(video => {
    res.render("edit", video);
  });
});

// this should be for update
router.put("/update/:id", (req, res) => {
  VideoPlaylist.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(video => {
    console.log(video);
    res.redirect("/");
  });
});

router.get("/videoplaylist/delete/:id", (req, res) => {
  VideoPlaylist.findOneAndRemove({ _id: req.params.id }).then(video => {
    console.log(video);
    res.redirect("/");
  });
});

// router.get("/", (req, res) => {
//   res.redirect("/index");
// });
module.exports = router;

// not sure need to ask about this code

//   res.render("videoplalist/index");
// });

// this is for show
// router.get("/videoplaylist/:id", (req, res) => {
//   VideoPlaylist.findOne({ _id: req.params.id }).then(video => {
//     res.render("videoplaylist/show", video);
//   });
// });
// in the videoplaylist route
// router.get("/videoplaylist", (req, res) => {
//   VideoPlaylist.find().then(videos => {
//     res.render("videoplaylist/index", videos);
//   });
// });

// to get new form
// router.get("/videoplaylist/new", (req, res) => {
//   res.render("videoplaylist/new");
// });

// this is for create
// router.post("/videoplaylist", (req, res) => {
//   VideoPlaylist.create({
//     title: req.body.title,
//     url: req.body.url,
//     comments: req.body.comments
//   }).then(video => {
//     res.redirect("/videoplaylist/" + video.id);
//   });
// });
// this should be for edit
// router.get("/videoplaylist/edit/:id", (req, res) => {
//   VideoPlaylist.findById(req.params.id).then(video => {
//     res.render("videoplaylist/edit", video);
//   });
// });

// this is for updating
// router.put("/videoplaylist/:id", (req, res) => {
//   VideoPlaylist.findOneAndUpdate({ _id: req.params.id }, req.body, {
//     new: true
//   }).then(video => {
//     video.comments.push(comments);
//   });
//   video.save(err => {
//     res.redirect("/videoplaylist");
//   });
// });

// const mongoose = require("../db/connection");

// const VideoPlaylist = mongoose.model("Videoplaylist");

// router.get("/", (req, res) => {
//   VideoPlaylist.find({}).then(videos => res.json(videos));
// });

// router.get("/:id", (req, res) => {
//   VideoPlaylist.findById(req.params.id).then(video => {
//     res.json(video);
//   });
// });

// router.post("/", (req, res) => {
//   VideoPlaylist.create({
//     title: req.body.title,
//     url: req.body.url,
//     comments: req.content
//   }).then(video => {
//     req.comments.push({
//       content
//     });
//     // req.comments.save(err => {
//     //   res.redirect(`/`)
//     // });
//     res.json(video);
//   });
// });

// router.put("/:id", (req, res) => {
//   VideoPlaylist.findOneAndUpdate({ _id: req.params.id }, req.body).then(video =>
//     VideoPlaylist.find({}).then(videos => {
//       res.json(videos);
//     })
//   );
// });

// router.delete("/:id", (req, res) => {
//   VideoPlaylist.findOneAndRemove({ _id: req.params.id }, req.body).then(video =>
//     VideoPlaylist.find({}).then(videos => {
//       res.json(videos);
//   })
// );
