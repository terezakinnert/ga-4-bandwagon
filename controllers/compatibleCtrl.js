const Band = require('../models/band');
const User = require('../models/user');

function bandsByInstrument(req, res, next) {
  Band.findOne({ lookingForInstrument: req.body.instrument })
    .then(bands => res.json(bands))
    .then(console.log('bands found'))
    .catch(next);
}

function usersByInstrument(req, res, next) {
  User.findOne({ instrumentsPlayed: req.body.instrument })
    .then(users => res.json(users))
    .then(console.log('users found'))
    .catch(next);
}

module.exports = {
  bandsByInstrument: bandsByInstrument,
  usersByInstrument: usersByInstrument
};
