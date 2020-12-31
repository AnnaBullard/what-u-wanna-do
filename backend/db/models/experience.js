'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experience = sequelize.define('Experience', {
    title: DataTypes.STRING(150),
    description: DataTypes.TEXT,
    max: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1
      }
    },
    currentPrice: {
      type: DataTypes.DECIMAL(10, 2),
      validate: {
        min: 0
      }
    },
    locationId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    hostId: DataTypes.INTEGER
  }, {});
  Experience.associate = function(models) {
    Experience.belongsTo(models.Location,{
      foreignKey: "locationId"
    });
    Experience.belongsTo(models.User,{
      foreignKey: "hostId"
    });
    Experience.hasMany(models.Booking,{
      foreignKey: "experienceId"
    });
  };
  return Experience;
};
