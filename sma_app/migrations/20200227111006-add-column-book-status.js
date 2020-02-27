'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Bookings', 'bookStatus', Sequelize.BOOLEAN);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('Bookings', 'bookStatus');
	}
};
