'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    bookingId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    message: DataTypes.TEXT
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Review.belongsTo(models.Booking, {
      foreignKey: "bookingId"
    });
  };
  return Review;
};
