'use strict';
module.exports = (sequelize, DataTypes) => {
  class Renter extends sequelize.Sequelize.Model {};
  Renter.init({
    name: {
      type: DataTypes.STRING
    },
    username: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Renter'
  });
  Renter.associate = function(models) {
    // associations can be defined here
    Renter.hasOne(models.Booking);
  };
  return Renter;
};