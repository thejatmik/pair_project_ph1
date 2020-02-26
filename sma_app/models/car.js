'use strict';
module.exports = (sequelize, DataTypes) => {
  class Car extends sequelize.Sequelize.Model {};
  Car.init({
    OwnerId: {
      type: DataTypes.INTEGER
    },
    brand: {
      type: DataTypes.STRING
    },
    rentalPrice: {
      type: DataTypes.INTEGER
    },
    isReady: {
      type: DataTypes.STRING
    },
    longitude: {
      type: DataTypes.STRING
    },
    latitude: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Car'
  });
  Car.associate = function(models) {
    // associations can be defined here
    Car.hasMany(models.Booking);
  };
  return Car;
};