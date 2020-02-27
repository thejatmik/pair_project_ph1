const { Owner, Renter } = require('../models/index');

function isLogin (req, res, next) {
	if (!req.session.user) {
		next()
	} else {
		res.redirect("/renter")
	}
	// Owner.findByPk(1)
	// 	.then(result => {
	// 		req.session.isLogin = true;
	// 		req.session.user = result;
	// 		next();
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 		res.send(err);
	// 	})

	// Renter.findByPk(1)
	// 	.then(result => {
	// 		req.session.isLogin = true;
	// 		req.session.user = result;
	// 		next();
	// 	})
	// 	.catch(err => {
	// 		console.log(err);
	// 		res.send(err);
	// 	})
}

module.exports = isLogin