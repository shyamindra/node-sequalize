'use strict';
module.exports = (sequelize, DataTypes) => {
  var interested_tag = sequelize.define('interested_tag', {
    user_id: DataTypes.INT,
    tag_id: DataTypes.INT,
    date_added: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return interested_tag;
};