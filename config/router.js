const router = require('express').Router();

const band = require('../controllers/bandCtrl');
const auth = require('../controllers/authCtrl');
const user = require('../controllers/userCtrl');
const messages = require('../controllers/messagesCtrl');
const instruments = require('../controllers/instrumentCtrl');
const secureRoute = require('../lib/secureRoute');

router.route('/bands')
  .get(band.bandIndex)
  .post(secureRoute, band.bandCreate);

router.route('/bands/:id')
  .get(band.bandShow)
  .put(secureRoute, band.bandUpdate)
  .delete(secureRoute, band.bandDelete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(user.userIndex);

router.route('/users/:userId')
  .get(user.userShow)
  .put(secureRoute, user.userUpdate)
  .delete(secureRoute, user.userDelete);

// router.route('/users/:userId/instruments')
//   .post(secureRoute, user.addInstrument);

// router.route('/users/:userId/instruments/:instrumentId')
//   .delete(secureRoute, user.deleteInstrument);

router.route('/messages')
  .get(messages.index)
  .post(secureRoute, messages.create);

router.route('/messages/:id')
  .delete(secureRoute, messages.delete);

router.route('/instruments')
  .get(instruments.index)
  .post(secureRoute, instruments.create);

router.route('/instruments/:instrumentId')
  .delete(secureRoute, instruments.delete);

module.exports = router;
