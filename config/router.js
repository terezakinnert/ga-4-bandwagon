const router = require('express').Router();

const band = require('../controllers/bandCtrl');
const auth = require('../controllers/authCtrl');
const user = require('../controllers/userCtrl');
const messages = require('../controllers/messagesCtrl');
const instruments = require('../controllers/instrumentCtrl');

router.route('/bands')
  .get(band.bandIndex)
  .post(band.bandCreate);

router.route('/bands/:id')
  .get(band.bandShow)
  .put(band.bandUpdate)
  .delete(band.bandDelete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/users')
  .get(user.userIndex);

router.route('/users/:id')
  .get(user.userShow)
  .put(user.userUpdate)
  .delete(user.userDelete);

router.route('/messages')
  .get(messages.index)
  .post(messages.create);

router.route('/messages/:id')
  .delete(messages.delete);

router.route('/instruments')
  .get(instruments.index)
  .post(instruments.create);

router.route('/instruments/:id')
  .delete(instruments.delete);

module.exports = router;
