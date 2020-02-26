'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Cars', [{
        OwnerId: 1,
        brand: 'ASEMKA',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'SUV',
        isReady: true,
        // plateNumber: 'B 123 AA',
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        OwnerId: 1,
        brand: 'Xenia',
        rentalPrice: 700000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Sedan',
        isReady: false,
        // plateNumber: 'B 234 BB'
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        OwnerId: 3,
        brand: 'Avanza',
        rentalPrice: 1000000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Convertible',
        isReady: true,
        // plateNumber: 'B 999 AA'
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        OwnerId: 4,
        brand: 'Starbucks',
        rentalPrice: 200000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Hatchback',
        isReady: true,
        // plateNumber: 'B 7777 AA'
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        OwnerId: 5,
        brand: 'Le Minerale',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'SUV',
        isReady: true,
        // plateNumber: 'B 888 AA'
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        OwnerId: 3,
        brand: 'ESEMKA',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'Double Cabin',
        isReady: true,
        // plateNumber: 'B 111 ZZ'
        createdAt: new Date(),
        updatedAt: new Date()
    }, {
        OwnerId: 1,
        brand: 'ESEMKA',
        rentalPrice: 500000,
        longitude: '0.0',
        latitude: '0.0',
        type: 'SUV',
        isReady: true,
        // plateNumber: 'B 999 GG'
        createdAt: new Date(),
        updatedAt: new Date()
    }], {});
	},

	down: (queryInterface, Sequelize) => {
		/*
			Add reverting commands here.
			Return a promise to correctly handle asynchronicity.

			Example:
			return queryInterface.bulkDelete('People', null, {});
        */
       return queryInterface.bulkDelete('Cars', null, {});
	}
};
