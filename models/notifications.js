'use strict';
module.exports = (sequelize, DataTypes) => {
  var notifications = sequelize.define('notifications', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    user_id: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        notifications.belongTo(user);
        notifications.belongTo(notification_type);
      }
    }
  });
  return notifications;
};