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
    url: req.body.url
  })
    .then(video => {
      Comment.create({
        content: req.body.comments['content']
      })
        .then(comment => {
          video.comments.push(comment);
          video.save(err => {
            res.redirect("/");
          });
        })
        .catch(err => {
         console.log(err)
    })
});
})
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

module.exports = router;
