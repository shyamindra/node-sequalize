'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    user_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: DataTypes.STRING,
    gender: DataTypes.CHAR,
    nationality: DataTypes.STRING,
    personality_type: DataTypes.STRING,
    city: DataTypes.STRING,
    country: DataTypes.STRING,
    pin: DataTypes.STRING,
    last_login: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};