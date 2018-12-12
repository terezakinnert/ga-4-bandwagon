const mongoose = require('mongoose');

const bandSchema = mongoose.Schema({
  name: String,
  // location: String,
  lookingForMembers: Boolean,
  lookingForInstrument: { type: mongoose.Schema.ObjectId, ref: 'Instrument' },
  image: String,
  members: [String],
  website: String,
  genres: [String],
  influences: [String],
  about: String,
  // usersFavourited: String
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

bandSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Band', bandSchema);
