'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    //Owners, username, password
    return queryInterface.addColumn('Owners', 'username', Sequelize.STRING);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Owners', 'username');
  }
};
