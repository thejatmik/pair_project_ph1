'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Owners', [{
			name: 'John Doe',
			username: 'johndoe12',
			password: '1234',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Abdul Basith',
			username: 'abdulsangit',
			password: '1234',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Andreas Anggara',
			username: 'acecuk',
			password: '1234',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Lele Goyang',
			username: 'lelegoyang',
			password: '1234',
			createdAt: new Date(),
			updatedAt: new Date()
		}, {
			name: 'Zidni',
			username: 'zidni',
			password: '1234',
			createdAt: new Date(),
			updatedAt: new Date()
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Owners', null, {});
	}
};
