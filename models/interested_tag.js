'use strict';
module.exports = (sequelize, DataTypes) => {
  var interested_tag = sequelize.define('interested_tag', {
    date_added: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        interested_tag.belongsTo(user);
        interested_tag.belongsTo(tag);
      }
    }
  });
  return interested_tag;
};