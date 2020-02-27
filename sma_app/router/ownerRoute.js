const router = require('express').Router();
const OwnerController = require('../controllers/OwnerController');

router.get('/', OwnerController.showList);
router.get('/create/car', OwnerController.showCreateForm);
router.post('/create/car', OwnerController.create);
router.get('/update/car/:carId(\\d+)', OwnerController.showUpdateForm);
router.post('/update/car/:carId(\\d+)', OwnerController.update);
router.get('/delete/car/:carId(\\d+)', OwnerController.delete);
router.get('/close/car/:carId(\\d+)', OwnerController.close);

module.exports = router;
