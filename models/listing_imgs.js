'use strict';
module.exports = (sequelize, DataTypes) => {
  var listing_imgs = sequelize.define('listing_imgs', {
    listing_id: DataTypes.INT,
    date_added: DataTypes.DATE,
    img: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return listing_imgs;
};