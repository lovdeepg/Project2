const mongoose = require("./connection");
const seeds = require("./seedData");

const VideoPlaylist = mongoose.model("Videoplaylist");

mongoose.Promise = Promise;

VideoPlaylist.remove({}).then(_ => {
  console.log("Dropped the DB");
  VideoPlaylist.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries);
    mongoose.connection.close();
  });
});
