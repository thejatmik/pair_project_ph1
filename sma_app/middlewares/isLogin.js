const { Owner } = require('../models/index');

function isLogin (req, res, next) {
	Owner.findByPk(1)
		.then(result => {
			req.session.isLogin = true;
			req.session.user = result;
			next();
		})
		.catch(err => {
			console.log(err);
			res.send(err);
		})
}

module.exports = isLogin