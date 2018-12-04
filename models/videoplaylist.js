const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String
});

const VideoPlaylist = new Schema({
  title: String,
  url: String,
  comments: [Comment]
});

module.exports = {
  VideoPlaylist: mongoose.model("VideoPlaylist", VideoPlaylist),
  Comment: mongoose.model("Comment", Comment)
};
