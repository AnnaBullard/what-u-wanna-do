'use strict';
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define('State', {
    name: DataTypes.STRING(14),
    abb: DataTypes.STRING(2)
  }, {});
  State.associate = function(models) {
    State.hasMany(models.Location, {
      foreignKey: "stateId"
    })
  };
  return State;
};
