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
      type: DataTypes.STRING
    },
    Attending: {
      type: DataTypes.INTEGER
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
    }
    Event.belongsTo(models.User, {foreignKey: "ownerId"})
    Event.belongsToMany(models.User, columnMapping)
    Event.hasMany(models.RSVP, {foreignKey: "eventId", as:"rsvps", onDelete: "CASCADE", hooks: true})
    Event.belongsTo(models.Group, {foreignKey: "groupId"})
    Event.belongsTo(models.PoolHall, {foreignKey: "poolHallId"})
  };
  return Event;
};
