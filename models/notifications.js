'use strict';
module.exports = (sequelize, DataTypes) => {
  var notifications = sequelize.define('notifications', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return notifications;
};