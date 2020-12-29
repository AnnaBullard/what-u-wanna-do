'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    label: DataTypes.STRING(10)
  }, {});
  Status.associate = function(models) {
    Status.hasMany(models.Booking,{
      foreignKey: "statusId"
    });
  };
  return Status;
};
