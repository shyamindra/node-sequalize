'use strict';
module.exports = (sequelize, DataTypes) => {
  var reported_user = sequelize.define('reported_user', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        reported_user.belongsTo(user, {foreignKey: 'user_id'});
        reported_user.belongsTo(user, {foreignKey: 'reported_by'});
      }
    }
  });
  return reported_user;
};