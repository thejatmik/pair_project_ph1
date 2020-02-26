'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RenterId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Renters',
          key: 'id',
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      CarId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Cars',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      paymentStatus: {
        type: Sequelize.STRING
      },
      startDate: {
        type: Sequelize.STRING
      },
      rentDay: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};