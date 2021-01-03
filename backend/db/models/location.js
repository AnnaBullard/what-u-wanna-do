'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    address1: DataTypes.STRING(255),
    address2: DataTypes.STRING(255),
    city: DataTypes.STRING(25),
    stateId: DataTypes.INTEGER,
    zip: DataTypes.STRING(10),
    userId: DataTypes.INTEGER
  }, {});
  Location.associate = function(models) {
    Location.belongsTo(models.State, {
      foreignKey: "stateId"
    })
    Location.belongsTo(models.User, {
      foreignKey: "userId"
    })
    Location.hasMany(models.Experience, {
      foreignKey: "locationId"
    })
  };
  return Location;
};
