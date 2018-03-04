'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('listings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      date_created: {
        type: Sequelize.DATE
      },
      date_updated: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INT
      },
      tag_id: {
        type: Sequelize.INT
      },
      location: {
        type: Sequelize.POINT
      },
      range: {
        type: Sequelize.INT
      },
      status: {
        type: Sequelize.SMALLINT
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
    return queryInterface.dropTable('listings');
  }
};