'use strict';
module.exports = (sequelize, DataTypes) => {
  var listing = sequelize.define('listing', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date_created: DataTypes.DATE,
    date_updated: DataTypes.DATE,
    location: DataTypes.POINT,
    range: DataTypes.INT,
    status: DataTypes.SMALLINT
  }, {
    classMethods: {
      associate: function(models) {
        listing.belongsTo(user);
        listing.belongsTo(listing_type);
        listing.belongsTo(user);
      }
    }
  });
  return listing;
};