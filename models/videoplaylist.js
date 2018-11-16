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
  VideoPlaylist: mongoose.model("Videoplaylist", VideoPlaylist),
  Comment: mongoose.model("Comment", Comment)
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const CommentsSchema = new Schema({
//   content: String
// });

// const VideoPlaylistSchema = new Schema({
//   title: String,
//   url: String,
//   comments: [CommentsSchema]
// });

// mongoose.model("Videoplaylist", VideoPlaylistSchema);
// mongoose.model("Comments", CommentsSchema);

// module.exports = mongoose;

// _________________________________________________________________________________
// const VideoPlaylistSchema = new Schema({
//   title: String,
//   url: String,
//   comments: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "comment"
//     }
//   ]
// });

// module.exports = mongoose.model("Videoplaylist", VideoPlaylistSchema);

// const mongoose = require("mongoose");
// const VideoPlaylistSchema = new mongoose.Schema({
//   title: String,
//   url: String,
//   comments: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: "Comment"
//     }
//   ]
// });

// mongoose.model("Videoplaylist", VideoPlaylistSchema);
// module.exports = mongoose;