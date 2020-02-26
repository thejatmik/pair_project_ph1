'use strict';
module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define('Owner', {
    name: DataTypes.STRING
  }, {});
  Owner.associate = function(models) {
    // associations can be defined here
  };
  return Owner;
};