'use strict';
module.exports = (sequelize, DataTypes) => {
  var tag = sequelize.define('tag', {
    tag_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    sub_category_id: DataTypes.INT,
    tag_type: DataTypes.INT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return tag;
};