const { Owner, Car} = require('../models/index');

class OwnerController {
	static showList(req, res) {
		let ownerId = req.params.id;
		// let ownerId = ambil dari session

		Owner.findByPk(ownerId, {
			include: [Car]
		})
			.then(result => {
				console.log(result);
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