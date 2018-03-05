'use strict';
module.exports = (sequelize, DataTypes) => {
  var listing_img = sequelize.define('listing_img', {
    date_added: DataTypes.DATE,
    img: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        listing_img.belongsTo(listing);
      }
    }
  });
  return listing_img;
};