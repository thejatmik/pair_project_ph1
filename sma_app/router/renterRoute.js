const router = require('express').Router();
const RenterController = require('../controllers/RenterController');

router.get('/bookingdetail', RenterController.bookDetail);
router.get('/bookingdetail/cancel', RenterController.removeBooking);
router.get('/bookingdetail/pay', RenterController.payBooking);
router.get('/bookingdetail/startrent', RenterController.startRent);
router.get('/bookingdetail/moveLoc', RenterController.moveLocation);
router.get('/availablecars', RenterController.showAvailableCar);
router.get('/book/:carId(\\d+)', RenterController.showBookingForm);
router.post('/book/:carId(\\d+)', RenterController.book);

module.exports = router;
