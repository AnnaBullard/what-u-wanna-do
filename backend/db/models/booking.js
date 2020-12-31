'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    experienceId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    dateWithTimeZone: DataTypes.DATE,
    price: DataTypes.DECIMAL(10, 2),
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    rate: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
        allowNull: true
      }
    },
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Experience,{
      foreignKey: "experienceId"
    });
    Booking.belongsTo(models.User,{
      foreignKey: "userId"
    });
    Booking.belongsTo(models.Status,{
      foreignKey: "statusId"
    });
    Booking.hasMany(models.Review,{
      foreignKey: "bookingId"
    });
  };
  return Booking;
};
