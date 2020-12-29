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
      experienceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Experiences"}
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      time: {
        type: Sequelize.DATE
      },
      timeMin: {
        type: Sequelize.TIME
      },
      timeMax: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.DECIMAL(10, 2)
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {model: "Users"}
      },
      statusId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Statuses"}
      },
      rate: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};
