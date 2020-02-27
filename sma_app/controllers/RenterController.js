const { Renter, Owner, Car, Booking } = require('../models/index')

class RenterController {
	static bookDetail (req, res) {
		// res.send('book detail')
		Renter.findByPk(req.session.user.id, {
		// Renter.findByPk(3, {
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
		res.render('booking/form', {
			'pageTitle': 'Booking',
			'data': {
				'car': car
			}
		})
	}

	static book (req, res) {

	}

}

module.exports = RenterController;