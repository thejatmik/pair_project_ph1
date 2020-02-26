'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		/*
			Add altering commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkInsert('People', [{
				name: 'John Doe',
				isBetaMember: false
			}], {});
		*/
	return queryInterface.bulkInsert('Owners', [{
		name: 'Andre Gunawan',
		username: 'andregun',
		password: '1234'
	}, {
		name: 'Andreas NanW',
		username: 'ardanw',
		password: '1234'
	}, {
		name: 'Fadilah',
		username: 'fadil',
		password: '1234'
	}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Owners', null, {});
	}
};
