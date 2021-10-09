'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    poolHallId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'PoolHalls'}
    },
    groupId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Groups'}
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    playerAmount: {
      type: DataTypes.INTEGER
    }
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    const columnMapping = {
      through: "RSVPs",
      otherKey: "userId",
      foreignKey: "eventId"
    }
    Event.belongsToMany(models.User, columnMapping)
    Event.belongsTo(models.Group, {foreignKey: "groupId"})
    Event.belongsTo(models.PoolHall, {foreignKey: "poolHallId"})
  };
  return Event;
};
