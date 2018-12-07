const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  name: String,
  location: String,
  lookingForMembers: Boolean,
  lookingForInstrument: String,
  image: String,
  members: [String],
  website: String,
  genres: [String],
  influences: [String],
  usersFavourited: String
});

module.exports = mongoose.model('Band', bandSchema);


// lookingForInstrument: [{
//   instrument: [{ type: mongoose.Schema.ObjectId, ref: 'Instrument' } ],
//   text: String
// }],
