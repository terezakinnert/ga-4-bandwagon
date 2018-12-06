const router = require('express').Router();

const band = require('../controllers/bandCtrl');

router.route('/bands')
  .get(band.bandIndex)
  .post(band.bandCreate);

router.route('/bands/:id')
  .get(band.bandShow)
  .put(band.bandUpdate)
  .delete(band.bandDelete);

const user = require('../controllers/userCtrl');

router.route('/users')
  .get(user.userIndex)
  .post(user.userCreate);

router.route('/users/:id')
  .get(user.userShow)
  .put(user.userUpdate)
  .delete(user.userDelete);

module.exports = router;
