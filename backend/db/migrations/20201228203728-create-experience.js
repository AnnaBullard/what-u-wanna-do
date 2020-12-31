'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Experiences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      description: {
        type: Sequelize.TEXT
      },
      max: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      duration: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      currentPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      locationId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Locations'}
      },
      imageUrl: Sequelize.STRING(500),
      hostId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Users'}
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
    return queryInterface.dropTable('Experiences');
  }
};
