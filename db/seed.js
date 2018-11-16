const { VideoPlaylist, Comment } = require("../models/videoplaylist");

// User.find({}).remove(() => {
//   Tweet.find({}).remove(() => {
VideoPlaylist.collection.drop();
Comment.collection.drop();
// VideoPlaylist.find({}).remove(() => {
//   Comment.find({}).remove(() => {
let lov = VideoPlaylist.create({
  title: "Video killed the radio Star",
  url: "https://www.youtube.com/watch?v=Iwuy4hHO3YQ",
  comments: " this video rocks"
});
//   });
// });

// const mongoose = require("./connection");
// const seeds = require("./seedData");

// const VideoPlaylist = mongoose.model("Videoplaylist");

// mongoose.Promise = Promise;

// VideoPlaylist.remove({}).then(_ => {
//   console.log("Dropped the DB");
//   VideoPlaylist.collection.insert(seeds).then(seededEntries => {
//     console.log(seededEntries);
//     mongoose.connection.close();
//   });
// });
