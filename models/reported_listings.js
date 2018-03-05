'use strict';
module.exports = (sequelize, DataTypes) => {
  var reported_listings = sequelize.define('reported_listings', {
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        messages.belongsTo(listing);
        messages.belongsTo(user, {foreignKey: 'reported_by'});
      }
    }
  });
  return reported_listings;
};