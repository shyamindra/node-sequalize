'use strict';
module.exports = (sequelize, DataTypes) => {
  var reported_listings = sequelize.define('reported_listings', {
    listing_id: DataTypes.INT,
    reported_by: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return reported_listings;
};