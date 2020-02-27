const { Renter, Owner, Car, Booking } = require('../models/index')
const daysLeft = require('../helpers/daysLeft');
const dateFormatter = require('../helpers/dateFormatter');
const isToday = require('../helpers/isToday')

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
			res.render("booking/details", {
				table: result,
				modelName: 'renter/bookingdetail',
				helpers: {
					daysLeft: daysLeft,
					dateFormatter: dateFormatter,
					isToday: isToday
				},
				userType: req.session.userType
			});
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
					},
					userType: req.session.userType
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
				res.render('booking/form', {
					'pageTitle': 'Booking',
					'data': {
						'car': result,
						'owner': result.Owner
					},
					'modelName': 'renter',
					userType: req.session.userType
				})
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			});
	}

	static book (req, res) {
		let obj = req.body;
		obj.RenterId = req.session.user.id
		obj.CarId = req.params.carId

		Booking.create(obj)
			.then(result => {
				return Car.update({
					isReady: false
				}, {
					where: {
						id: obj.CarId
					}
				})
			})
			.then(result => {
				res.redirect("/renter/bookingdetail")
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			});
	}
	static removeBooking(req, res) {
		let carId = req.query.carId;

		Booking.destroy({
			where: {
				RenterId: req.session.user.id
			}
		})
		.then(result => {
			return Car.update({
				isReady: true
			}, {
				where: {
					id: carId
				}
			})
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
			res.redirect("/renter/bookingdetail");
		})
		.catch(err => {
			res.send(err);
		})
	}

	static moveLocation (req, res) {
		let carId = req.query.carId;

		Car.update({
			longitude: Math.floor(Math.random() * 360) - 180,
			latitude: Math.floor(Math.random() * 180) - 90
		}, {
			where: {
				id: carId
			}
		})
			.then(result => {
				res.redirect('/renter/bookingdetail');
			})
			.catch(err => {
				res.send(err);
			})
	}
}

module.exports = RenterController;