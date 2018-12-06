const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: String,
  location: String,
  instrumentsPlayed: [String],
  lookingForBands: Boolean,
  website: String,
  genres: [String],
  influences: [String],
  bandsFavourited: String
});

module.exports = mongoose.model('User', userSchema);
