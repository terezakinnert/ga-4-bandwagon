const Instrument = require('../models/instrument');

function indexRoute(req, res, next) {
  Instrument.find()
    .sort('name')
    .then(instruments => res.json(instruments))
    // .then(instruments.sort((a, b) => a - b))
    .catch(next);
}

function createRoute(req, res, next) {
  Instrument.create(req.body)
    .then(instrument => res.json(instrument))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Instrument.findByIdAndDelete(req.params.instrumentId)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  delete: deleteRoute
};
