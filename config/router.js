const router = require('express').Router();

const band = require('../controllers/bandCtrl');
// const userCtrl = require('../controllers/userCtrl');

router.route('/bands')
  .get(band.bandIndex)
  .post(band.bandCreate);

router.route('/bands/:id')
  .get(band.bandShow)
  .put(band.bandUpdate)
  .delete(band.bandDelete);

module.exports = router;
