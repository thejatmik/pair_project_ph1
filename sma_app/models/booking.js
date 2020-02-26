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
			type: DataTypes.STRING
		},
		rentDay: {
			type: DataTypes.STRING
		}
	}, {
		sequelize,
		modelName: 'Booking'
	});
	Booking.associate = function(models) {
		// associations can be defined here
		Booking.belongsTo(models.Renter);
		Booking.belongsTo(models.Car);
	};
	return Booking;
};