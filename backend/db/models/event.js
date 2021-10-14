'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    poolHallId: {
      type: DataTypes.INTEGER,
      references: {model: 'PoolHalls'}
    },
    groupId: {
      type: DataTypes.INTEGER,
      references: {model: 'Groups'}
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    Attending: {
      type: DataTypes.BOOLEAN
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
      foreignKey: "eventId",
      as: "reservations",
      onDelete: "CASCADE",
      hooks: true
    }
    Event.belongsTo(models.User, {foreignKey: "ownerId"})
    Event.belongsToMany(models.User, columnMapping)
    Event.belongsTo(models.Group, {foreignKey: "groupId", onDelete: "CASCADE", hooks: true})
    Event.belongsTo(models.PoolHall, {foreignKey: "poolHallId", onDelete: "CASCADE", hooks: true})
  };
  return Event;
};
