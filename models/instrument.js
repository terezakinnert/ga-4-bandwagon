const mongoose = require('mongoose');

const instrumentSchema = mongoose.Schema({
  name: String
});

module.exports = mongoose.model('Instrument', instrumentSchema);
