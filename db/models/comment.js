const mongoose = require("../db/connection");

const CommentsSchema = new mongoose.Schema({
  content: String
});

mongoose.model("Comment", CommentsSchema);

module.exports = mongoose;
