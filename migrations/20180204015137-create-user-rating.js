'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_ratings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INT
      },
      skill_swp_rating: {
        type: Sequelize.DECIMAL
      },
      item_swp_rating: {
        type: Sequelize.DECIMAL
      },
      good_samaritan_rating: {
        type: Sequelize.DECIMAL
      },
      aggr_rating: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('user_ratings');
  }
};