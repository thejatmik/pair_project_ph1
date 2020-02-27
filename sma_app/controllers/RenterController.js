const { Renter, Owner, Car, Booking } = require('../models/index')

class RenterController {
	static bookDetail (req, res) {
		Renter.findByPk(req.session.user.id, {
			include: [{model: Booking, 
				include: [{model: Car, 
					include: [{model: Owner}]
				}]
			}]
		})
		.then(result => {
			// res.send(result);
			res.render("booking/details", {table: result});
		})
		.catch(err => {
			res.send(err)
		});
	}

	static showAvailableCar (req, res) {
		// 'welcome name, which car do you want to rent?'
		// 'ajax filter?'
		Car.findAll({
			where: {
				isReady: 'true'
			}
		})
			.then(result => {
				res.render('booking/list', {
					'modelName': 'booking',
					'data': {
						cars: result
					}
				})
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			});
	}

	static showBookingForm (req, res) {
		let carId = req.params.carId;

		Car.findByPk(carId, {
			include: [Owner]
		})
			.then(result => {
				console.log(result);
				res.render('booking/form', {
					'pageTitle': 'Booking',
					'data': {
						'car': result,
						'owner': result.Owner
					},
					'modelName': 'renter'
				})
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			});
	}

	static book (req, res) {
		// res.send(req.body);
		// let obj = 
		// renter id = req.session.user.id
		// car id = req.params.carId
		Booking.create({
			RenterId: req.session.user.id,
			CarId: req.params.carId,
			startDate: req.body.startDate,
			rentDay: req.body.rentDays
		})
		.then(result => {
			res.redirect("/renter/bookingdetail")
		})
		.catch(err => {
			res.send(err);
		});

	}
	static removeBooking(req, res) {
		Booking.destroy({
			where: {
				RenterId: req.session.user.id
			}
		})
		.then(result => {
			res.redirect("/renter/bookingdetail");
		})
		.catch(err => {
			res.send(err);
		})
	}
	static payBooking(req, res) {
		Booking.update({
			paymentStatus: 'Paid'
		}, {
			where: {
				RenterId: req.session.user.id
			}
		})
		.then(result => {
			res.redirect("/renter/bookingdetail")
		})
		.catch(err => {
			res.send(err);
		})
	}
	static startRent(req, res) {
		Booking.update({
			bookStatus: true
		}, {
			where: {
				RenterId: req.session.user.id
			}
		})
		.then(result => {
			res.redirect("/renter/bookingdetail")
		})
		.catch(err => {
			res.send(err);
		})
	}
}

module.exports = RenterController;