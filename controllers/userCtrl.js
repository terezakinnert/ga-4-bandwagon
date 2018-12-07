const User = require('../models/user');

function indexRoute(req, res, next) {
  User.find()
    .populate('instrumentsPlayed')
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.userId)
    .populate('instrumentsPlayed')
    .then(user => res.json(user))
    .catch(next);
}

function updateRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

function deleteRoute(req, res, next) {
  User
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

function addInstrument(req, res, next) {
  User
    .findById(req.params.userId)
    .then(user => {
      user.instrumentsPlayed.push(req.body.instrumentId);
      return user.save();
    })
    .then(user => User.populate(user, 'instrumentsPlayed'))
    .then(user => res.json(user))
    .catch(next);
}

function deleteInstrument(req, res, next) {
  User
    .findById(req.params.userId)
    .then(user => {
      // const instrument = user.instrumentsPlayed.id(req.params.instrumentId);
      // instrument.remove();
      // won't work because instrumentsPlayed is an array of objectIds, not objects!
      // (event though ids are tiny weird objects)
      user.instrumentsPlayed = user.instrumentsPlayed.filter(id => !id.equals(req.params.instrumentId));
      return user.save();
    })
    .then(user => User.populate(user, 'instrumentsPlayed'))
    .then(user => res.json(user))
    .catch(next);
}

module.exports = {
  userIndex: indexRoute,
  userShow: showRoute,
  userUpdate: updateRoute,
  userDelete: deleteRoute,
  addInstrument: addInstrument,
  deleteInstrument: deleteInstrument
};
