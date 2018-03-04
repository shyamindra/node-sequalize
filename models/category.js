'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('category', {
    category_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },  
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    icon: DataTypes.STRING,
    img: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return category;
};