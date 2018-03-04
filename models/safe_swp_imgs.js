'use strict';
module.exports = (sequelize, DataTypes) => {
  var safe_swp_imgs = sequelize.define('safe_swp_imgs', {
    listing_id: DataTypes.INT,
    from_usr: DataTypes.INT,
    to_usr: DataTypes.INT,
    date_added: DataTypes.DATE,
    img: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return safe_swp_imgs;
};