const mongoose = require("mongoose");

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL);
} else {
  mongoose.connect("mongodb://localhost/videoplaylist");
}
mongoose.Promise = Promise;

module.exports = mongoose;

// salman helped me with this code

// const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb://localhost/videoplaylist",
//   { useNewUrlParser: true }
// );

// module.exports = mongoose;
