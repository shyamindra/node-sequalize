'use strict';
module.exports = (sequelize, DataTypes) => {
  var usr_tag = sequelize.define('usr_tag', {
    date_added: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        usr_tag.belongsTo(user);
        usr_tag.belongsTo(tag);
      }
    }
  });
  return usr_tag;
};