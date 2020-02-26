'use strict';
module.exports = (sequelize, DataTypes) => {
  class Owner extends sequelize.Sequelize.Model {};
  Owner.init({
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
    modelName: 'Owner'
  });
  Owner.associate = function(models) {
    // associations can be defined here
  };
  return Owner;
};