const Band = require('../models/band');
const User = require('../models/user');

function bandsByInstrument(req, res, next) {
  Band.find({ lookingForInstrument: req.body.instrument })
    .populate('instrumentsPlayed')
    .then(bands => res.json(bands))
    .then(console.log('bands found'))
    .catch(next);
}

function usersByInstrument(req, res, next) {
  User.find({ instrumentsPlayed: req.body.instrument })
    .populate('instrumentsPlayed')
    .then(users => res.json(users))
    .then(console.log('req.body', req.body))
    .catch(next);
}

module.exports = {
  bandsByInstrument: bandsByInstrument,
  usersByInstrument: usersByInstrument
};
