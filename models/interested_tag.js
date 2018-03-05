'use strict';
module.exports = (sequelize, DataTypes) => {
  var interested_tag = sequelize.define('interested_tag', {
    tag_id: DataTypes.INT,
    date_added: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        interested_tag.belongsTo(user);
      }
    }
  });
  return interested_tag;
};