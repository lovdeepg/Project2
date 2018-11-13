const mongoose = require("mongoose");

const VideoPlaylistSchema = new mongoose.Schema({
  title: String,
  url: String
  // comments: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Comment"
  //   }
  // ]
});

mongoose.model("VideoPlaylist", VideoPlaylistSchema);

module.exports = mongoose;
