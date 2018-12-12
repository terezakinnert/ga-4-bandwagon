const Band = require('../models/band');

function indexRoute(req, res, next) {
  Band.find()
    .populate('lookingForInstrument')
    .then(bands => res.json(bands))
    .catch(next);
}

function showRoute(req, res, next) {
  Band
    .findById(req.params.id)
    .populate('lookingForInstrument')
    .then(band => res.json(band))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.tokenUserId;
  Band.create(req.body)
    .then(band => {
      console.log('creating band, req.body is', req.body);
      res.status(201).json(band);
    })
    .then(band => {
      Band.populate(band, 'createdBy');
      res.json(band);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
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
  bandIndex: indexRoute,
  bandShow: showRoute,
  bandCreate: createRoute,
  bandUpdate: updateRoute,
  bandDelete: deleteRoute
};
