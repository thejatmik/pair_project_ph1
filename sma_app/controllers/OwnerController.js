const { Owner, Car} = require('../models/index');

class OwnerController {
	static showList(req, res) {
		let ownerId = req.session.user.id;

		Owner.findByPk(ownerId, {
			include: Car,
			order: [
				[{ model: Car }, 'isReady', 'DESC']
			]
		})
			.then(result => {
				res.render('owner/list', {
					data: {
						owner: result
					},
					modelName: 'owner'
				})
			})
			.catch(err => {
				console.log(err);
			});
	}
	
	static showCreateForm(req, res) {
		res.render('owner/form', {
			'modelName': 'owner',
			'pageTitle': 'Add New Car',
			'action': 'showCreate'
		})
	}
	
	static create(req, res) {
		let obj = req.body;
		let ownerId = req.session.user.id;

		obj.OwnerId = ownerId;
		Car.create(obj)
			.then(result => {
				res.redirect('/owner');
			})
			.catch(err => {
				res.send(err.errors);
			});
	}
	
	static showUpdateForm(req, res) {
		let carId = req.params.carId;

		Car.findByPk(carId)
			.then(result => {
				res.render('owner/form', {
					data: {
						'car': result
					},
					'action': 'showUpdate',
					'modelName': 'owner',
					'pageTitle': 'Update Car'
				});
			})
			.catch(err => {
				res.send(err.errors);
			});
	}
	
	static update (req, res) {
		let obj = req.body;
		let carId = req.params.carId;
		
		Car.update(obj, {
			where: { id: carId }
		})
			.then(result => {
				res.redirect('/owner')
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			});
	}
	
	static delete(req, res) {
		let carId = req.params.carId;

		Car.destroy({
			where: { id: carId }
		})
			.then(result => {
				res.redirect('/owner')
			})
			.catch(err => {
				console.log(err);
				res.send(err);
			})
	}
	
}

module.exports = OwnerController;