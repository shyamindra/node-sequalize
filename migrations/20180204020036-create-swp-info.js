'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('swp_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      from_usr: {
        type: Sequelize.INT
      },
      to_usr: {
        type: Sequelize.INT
      },
      listing_id: {
        type: Sequelize.INT
      },
      swp_time: {
        type: Sequelize.DATETIME
      },
      is_swp_permanent: {
        type: Sequelize.BOOLEAN
      },
      safe_swp: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('swp_infos');
  }
};