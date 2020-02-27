const { Car, Booking, Owner } = require('../models/index')

class RenterController {
	static bookDetail (req, res) {
		res.send('book detail')
	}

	static showAvailableCar (req, res) {
		// 'welcome name, which car do you want to rent?'

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