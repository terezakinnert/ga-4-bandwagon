const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
  instrument: [{
    type: String,
    enum: ['Lead guitar', 'Rhythm guitar', 'Drums', 'Bass', 'Vocals', 'Keyboards', 'Saxophone', 'Clarinet', 'Piano']
  }]
});

module.exports = mongoose.model('Instrument', instrumentSchema);
