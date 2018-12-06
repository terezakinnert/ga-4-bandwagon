const User = require('../models/user');

function indexRoute(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(next);
}

function showRoute(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => res.json(user))
    .catch(next);
}

function createRoute(req, res, next) {
  User
    .create(req.body)
    .then(user => res.status(201).json(user))
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

module.exports = {
  userIndex: indexRoute,
  userShow: showRoute,
  userCreate: createRoute,
  userUpdate: updateRoute,
  userDelete: deleteRoute
};
