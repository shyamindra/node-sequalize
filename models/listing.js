'use strict';
module.exports = (sequelize, DataTypes) => {
  var listing = sequelize.define('listing', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date_created: DataTypes.DATE,
    date_updated: DataTypes.DATE,
    user_id: DataTypes.INT,
    tag_id: DataTypes.INT,
    location: DataTypes.POINT,
    range: DataTypes.INT,
    status: DataTypes.SMALLINT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return listing;
};