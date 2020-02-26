'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
    OwnerId: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    rentalPrice: DataTypes.INTEGER,
    isReady: DataTypes.STRING,
    longitude: DataTypes.STRING,
    latitude: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Car.associate = function(models) {
    // associations can be defined here
  };
  return Car;
};