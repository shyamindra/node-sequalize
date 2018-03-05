'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_rating = sequelize.define('user_rating', {
    user_id: DataTypes.INT,
    skill_swp_rating: DataTypes.DECIMAL,
    item_swp_rating: DataTypes.DECIMAL,
    good_samaritan_rating: DataTypes.DECIMAL,
    aggr_rating: DataTypes.DECIMAL
  }, {
    classMethods: {
      associate: function(models) {
        user_rating.belongsTo(user);
      }
    }
  });
  return user_rating;
};