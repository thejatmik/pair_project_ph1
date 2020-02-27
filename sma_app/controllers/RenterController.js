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
			// console.log(result.Booking);
			res.render("booking/details", {
				table: result,
				modelName: 'renter'
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
		// let obj = 

		// Booking.create()
			
	}
}

module.exports = RenterController;