'use strict';
module.exports = (sequelize, DataTypes) => {
  var sub_category = sequelize.define('sub_category', {
    sub_category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    category_id: DataTypes.INT,
    parent_id: DataTypes.INT,
    icon: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return sub_category;
};