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
			modelName: 'owner',
			pageTitle: 'Add New Car',
			action: 'showCreate'
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
				console.log(err);
				res.render(err);
			});
	}
	
	static showUpdateForm(req, res) {

	}
	
	static update(req, res) {

	}
	
	static delete(req, res) {

	}
	
}

module.exports = OwnerController;