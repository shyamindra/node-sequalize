'use strict';
module.exports = (sequelize, DataTypes) => {
  var messages = sequelize.define('messages', {
    msg_time: DataTypes.DATETIME,
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        messages.belongsTo(user, {foreignKey: 'from_usr'});
        messages.belongsTo(user, {foreignKey: 'to_usr'});
        messages.belongsTo(listing);
        messages.belongsTo(message_type);
      }
    }
  });
  return messages;
};