'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Bookings', [{
			RenterId: '1',
			CarId: 1,
			paymentStatus: 'Paid',
			startDate: new Date('2020-02-29'),
			rentDay: 5
		}, {
			RenterId: '2',
			CarId: 2,
			paymentStatus: 'Unpaid',
			startDate: new Date('2020-02-30'),
			rentDay: 4
		}, {
			RenterId: '3',
			CarId: 3,
			paymentStatus: 'Paid',
			startDate: new Date(),
			rentDay: 2
		}, {
			RenterId: '4',
			CarId: 4,
			paymentStatus: 'Paid',
			startDate: new Date('2020-02-26'),
			rentDay: 10
		}], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
			Add reverting commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkDelete('People', null, {});
		*/
		return queryInterface.bulkDelete('Bookings', null, {});
	}
};
