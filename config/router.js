const router = require('express').Router();

const band = require('../controllers/bandCtrl');
router.route('/bands')
  .get(band.bandIndex)
  .post(band.bandCreate);

router.route('/bands/:id')
  .get(band.bandShow)
  .put(band.bandUpdate)
  .delete(band.bandDelete);

const auth = require('../controllers/authCtrl');
router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

const user = require('../controllers/userCtrl');
router.route('/users')
  .get(user.userIndex)
  .post(user.userCreate);

router.route('/users/:id')
  .get(user.userShow)
  .put(user.userUpdate)
  .delete(user.userDelete);

const messages = require('../controllers/messagesCtrl');
router.route('/messages')
  .get(messages.index)
  .post(messages.create);

router.route('/messages/:id')
  .delete(messages.delete);

const instruments = require('../controllers/instrumentCtrl');
router.route('/instruments')
  .get(instruments.index)
  .post(instruments.create);

router.route('/instruments/:id')
  .delete(instruments.delete);

module.exports = router;
