const router = require('express').Router();
const RenterController = require('../controllers/RenterController');

router.get('/bookingdetail/', RenterController.bookDetail); //add id?
router.get('/availablecars', RenterController.showAvailableCar);
router.get('/book/:carId(\\d+)', RenterController.showBookingForm); // milih mobil, milih startdate & days
router.post('/book/:carId(\\d+)', RenterController.book);

module.exports = router;
