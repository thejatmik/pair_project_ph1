'use strict';
const dateFormatter = require('../helpers/dateFormatter');

module.exports = (sequelize, DataTypes) => {
	class Booking extends sequelize.Sequelize.Model {};
	Booking.init({
		RenterId: {
			type: DataTypes.INTEGER
		},
		CarId: {
			type: DataTypes.INTEGER
		},
		paymentStatus: {
			type: DataTypes.STRING
		},
		startDate: {
			type: DataTypes.DATE,
			validate: {
				lessThanToday (value) {
					if (value < new Date()) throw new Error('Rent Date not valid!')
				}
			}
		},
		rentDay: {
			type: DataTypes.STRING
		},
		bookStatus: {
			type: DataTypes.BOOLEAN
		}
	}, {
		sequelize,
		modelName: 'Booking',
		hooks: {
			beforeCreate: (booking, options) => {
				booking.paymentStatus = 'Unpaid';
				booking.bookStatus = false;
			}
		}
	});
	Booking.associate = function(models) {
		// associations can be defined here
		Booking.belongsTo(models.Renter);
		Booking.belongsTo(models.Car);
	};
	return Booking;
};