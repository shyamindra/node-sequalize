'use strict';
module.exports = (sequelize, DataTypes) => {
  var safe_swp_img = sequelize.define('safe_swp_img', {
    date_added: DataTypes.DATE,
    img: DataTypes.BLOB
  }, {
    classMethods: {
      associate: function(models) {
        safe_swp_img.belongsTo(swp_info);
      }
    }
  });
  return safe_swp_img;
};