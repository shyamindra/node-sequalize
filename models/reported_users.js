'use strict';
module.exports = (sequelize, DataTypes) => {
  var reported_users = sequelize.define('reported_users', {
    user_id: DataTypes.INT,
    reported_by: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return reported_users;
};