const { Owner, Car} = require('../models/index');

class OwnerController {
	static showList(req, res) {
		let ownerId = req.session.user.id;

		Owner.findByPk(ownerId, {
			include: {
				model: Car,
			},
			// order: [['isReady', 'DESC']]
			
		})
			.then(result => {
				res.render('owner/list', {
					data: {
						owner: result
					}
				})
			})
			.catch(err => {
				console.log(err);
			});
	}
	
	static showCreateForm(req, res) {

	}
	
	static create(req, res) {

	}
	
	static showUpdateForm(req, res) {

	}
	
	static update(req, res) {

	}
	
	static delete(req, res) {

	}
	
}

module.exports = OwnerController;