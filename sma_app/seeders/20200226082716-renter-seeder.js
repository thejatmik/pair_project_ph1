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
	return queryInterface.bulkInsert('Renters', [{
		name: 'Andre Gunawan',
		username: 'andregun',
		password: '1234',
		createdAt: new Date(),
		updatedAt: new Date()
	}, {
		name: 'Andreas NanW',
		username: 'ardanw',
		password: '1234',
		createdAt: new Date(),
		updatedAt: new Date()
	}, {
		name: 'Fadilah',
		username: 'fadil',
		password: '1234',
		createdAt: new Date(),
		updatedAt: new Date()
	}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Renters', null, {});
	}
};
