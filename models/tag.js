'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    tag_type: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        tag.belongsTo(sub_category);
        tag.belongsTo(tag_type);
      }
    }
  });
  return tag;
};