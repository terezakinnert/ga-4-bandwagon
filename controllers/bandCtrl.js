const Band = require('../models/band');

function index(req, res, next) {
  Band.find()
    .then(bands => res.json(bands))
    .catch(next);
}

function show(req, res, next) {
  Band
    .findById(req.params.id)
    .then(band => res.json(band))
    .catch(next);
}

function create(req, res, next) {
  Band
    .create(req.body)
    .then(band => res.status(201).json(band))
    .catch(next);
}

function update(req, res, next) {
  Band
    .findById(req.params.id)
    .then(band => band.set(req.body))
    .then(band => band.save())
    .then(band => res.json(band))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Band
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  bandIndex: index,
  bandShow: show,
  bandCreate: create,
  bandUpdate: update,
  bandDelete: deleteRoute
};
