const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
  instrument: [{
    type: String,
    enum: ['Lead guitar', 'Rhythm guitar', 'Drums', 'Bass', 'Vocals', 'Keyboards', 'Saxophone', 'Clarinet', 'Piano']
  }]
});

const userSchema = mongoose.Schema({
  name: String,
  location: String,
  instrumentsPlayed: [ instrumentSchema ],
  lookingForBands: Boolean,
  website: String,
  genres: [String],
  influences: [String],
  bandsFavourited: String
});

module.exports = mongoose.model('User', userSchema);
