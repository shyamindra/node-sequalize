'use strict';
module.exports = (sequelize, DataTypes) => {
  var messages = sequelize.define('messages', {
    from_usr: DataTypes.INT,
    to_usr: DataTypes.INT,
    listing_id: DataTypes.INT,
    msg_time: DataTypes.DATETIME,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return messages;
};