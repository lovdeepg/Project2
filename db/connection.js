const mongoose = require("./models/videoplaylist", "./models/comment");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/videoplaylist");
}
mongoose.Promise = Promise;
// salman helped me with this code
module.exports = mongoose;
