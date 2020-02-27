'use strict';
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
			type: DataTypes.DATE
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
		getterMethods: {
			startDateFormatted () {
				let rawValue = this.startDate;
				return `${rawValue.getFullYear()}-${(rawValue.getMonth() + 1) < 10 ? ('0' + (rawValue.getMonth() + 1)) : rawValue.getMonth() + 1}-${rawValue.getDate() < 10 ? ('0' + rawValue.getDate()) : rawValue.getDate()}`;
			},
			daysLeft () {
				let startDate = this.startDate;
				let currentDate = new Date();

				const diffTime = Math.abs(currentDate - startDate);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
				return diffDays;
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