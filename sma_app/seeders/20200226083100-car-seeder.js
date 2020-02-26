'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Car', [{
        OwnerId: '1',
        brand: 'ASEMKA',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'SUV',
        isReady: true,
        // plateNumber: 'B 123 AA'
    }, {
        OwnerId: '1',
        brand: 'Xenia',
        rentalPrice: 700000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Sedan',
        isReady: true,
        // plateNumber: 'B 234 BB'
    }, {
        OwnerId: '3',
        brand: 'Avanza',
        rentalPrice: 1000000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Convertible',
        isReady: true,
        // plateNumber: 'B 999 AA'
    }, {
        OwnerId: '4',
        brand: 'Starbucks',
        rentalPrice: 200000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Hatchback',
        isReady: true,
        // plateNumber: 'B 7777 AA'
    }, {
        OwnerId: '5',
        brand: 'Le Minerale',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'SUV',
        isReady: true,
        // plateNumber: 'B 888 AA'
    }, {
        OwnerId: '3',
        brand: 'ESEMKA',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Double Cabin',
        isReady: true,
        // plateNumber: 'B 111 ZZ'
    }, {
        OwnerId: '1',
        brand: 'ESEMKA',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'SUV',
        isReady: true,
        // plateNumber: 'B 999 GG'
    }], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
			Add reverting commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkDelete('People', null, {});
		*/
	}
};
