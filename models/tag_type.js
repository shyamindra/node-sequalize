'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag_type = sequelize.define('tag_type', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tag;
};