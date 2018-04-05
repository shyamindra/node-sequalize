'use strict';
module.exports = (sequelize, DataTypes) => {
  var swp_info = sequelize.define('swp_info', {
    swp_time: DataTypes.DATETIME,
    is_swp_permanent: DataTypes.BOOLEAN,
    safe_swp: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        swp_info.belongsTo(user, {foreignKey: 'from_usr'});
        swp_info.belongsTo(user, {foreignKey: 'to_usr'});
        swp_info.belongsTo(listing);
      }
    }
  });
  return swp_info;
};