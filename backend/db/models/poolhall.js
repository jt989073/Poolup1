'use strict';
module.exports = (sequelize, DataTypes) => {
  const PoolHall = sequelize.define('PoolHall', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    address: {
      allowNull: false,
      type: DataTypes.STRING
    },
    city: {
      allowNull: false,
      type: DataTypes.STRING
    },
    state: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  PoolHall.associate = function(models) {
    // associations can be defined here
    PoolHall.hasMany(models.Event, {foreignKey: "poolHallId"})
  };
  return PoolHall;
};
