const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
  location: String,
  instrumentsPlayed: [{ type: mongoose.Schema.ObjectId, ref: 'Instrument' }],
  lookingForBands: Boolean,
  image: String,
  website: String,
  genres: [String],
  influences: [String]
  // bandsFavourited: String
});

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function() {
  if(this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 8);
  }
});

// bandsCreated virtual

userSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('User', userSchema);


// const instrumentSchema = mongoose.Schema({
//   instrument: [{
//     type: String,
//     enum: ['Lead guitar', 'Rhythm guitar', 'Drums', 'Bass', 'Vocals', 'Keyboards', 'Saxophone', 'Clarinet', 'Piano']
//   }]
// });
