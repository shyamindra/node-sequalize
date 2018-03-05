'use strict';
module.exports = (sequelize, DataTypes) => {
  var sub_category = sequelize.define('sub_category', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    parent_id: DataTypes.INT,
    icon: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        sub_category.belongsTo(category);
      }
    }
  });
  return sub_category;
};