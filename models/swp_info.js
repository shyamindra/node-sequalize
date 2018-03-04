'use strict';
module.exports = (sequelize, DataTypes) => {
  var swp_info = sequelize.define('swp_info', {
    from_usr: DataTypes.INT,
    to_usr: DataTypes.INT,
    listing_id: DataTypes.INT,
    swp_time: DataTypes.DATETIME,
    is_swp_permanent: DataTypes.BOOLEAN,
    safe_swp: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return swp_info;
};