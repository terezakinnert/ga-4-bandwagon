const Instrument = require('../models/instrument');

function indexRoute(req, res, next) {
  Instrument.find()
    // .sort('createdAt')
    .then(instruments => res.json(instruments))
    .catch(next);
}

function createRoute(req, res, next) {
  Instrument.create(req.body)
    // .then(instrument => {
    //   instrument.push(req.body);
    //   return instrument.save();
    // })
    .then(instrument => Instrument.populate(instrument, 'instrument'))
    .then(instrument => res.json(instrument))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Instrument.findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  delete: deleteRoute
};
