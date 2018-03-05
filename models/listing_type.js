'use strict';
module.exports = (sequelize, DataTypes) => {
  var listing_type = sequelize.define('listing_type', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
      }
    }
  });
  return listing_type;
};