'use strict';
module.exports = (sequelize, DataTypes) => {
  var usr_tag = sequelize.define('usr_tag', {
    usr_tag_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INT,
    tag_id: DataTypes.INT,
    date_added: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return usr_tag;
};