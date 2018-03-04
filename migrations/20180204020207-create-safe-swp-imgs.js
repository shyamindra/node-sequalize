'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('safe_swp_imgs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listing_id: {
        type: Sequelize.INT
      },
      from_usr: {
        type: Sequelize.INT
      },
      to_usr: {
        type: Sequelize.INT
      },
      date_added: {
        type: Sequelize.DATE
      },
      img: {
        type: Sequelize.BLOB
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
    return queryInterface.dropTable('safe_swp_imgs');
  }
};