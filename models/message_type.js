'use strict';
module.exports = (sequelize, DataTypes) => {
  var message_type = sequelize.define('message_type', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return message_type;
};