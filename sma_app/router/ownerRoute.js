const router = require('express').Router();
const OwnerController = require('../controllers/OwnerController');

// router.get('/', OwnerController.showList);
router.get('/:id', OwnerController.showList);
router.get('/create/car', OwnerController.showCreateForm);
router.post('/create/car', OwnerController.create);
router.get('/update/car/:carId', OwnerController.showUpdateForm);
router.post('/update/car/:carId', OwnerController.update);
router.get('/delete/car/:carId', OwnerController.delete);

module.exports = router;