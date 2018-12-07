const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
  instrument: String
});

module.exports = mongoose.model('Instrument', instrumentSchema);
