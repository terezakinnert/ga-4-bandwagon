const Band = require('../models/band');
// const User = require('../models/user');

function bandsByInstrument(req, res, next) {
  Band.findOne({ lookingForInstrument: req.body.instrument })
    .then(bands => res.json(bands))
    .then(console.log('user found'))
    .catch(next);
}



module.exports = {
  bandsByInstrument: bandsByInstrument
};
