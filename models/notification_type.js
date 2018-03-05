'use strict';
module.exports = (sequelize, DataTypes) => {
  var notification_type = sequelize.define('notification_type', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return notification_type;
};