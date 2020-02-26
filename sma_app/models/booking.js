'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    RenterId: DataTypes.INTEGER,
    CarId: DataTypes.INTEGER,
    paymentStatus: DataTypes.STRING,
    startDate: DataTypes.STRING,
    rentDay: DataTypes.STRING
  }, {});
  Booking.associate = function(models) {
    // associations can be defined here
  };
  return Booking;
};