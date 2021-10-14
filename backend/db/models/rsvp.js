'use strict';
module.exports = (sequelize, DataTypes) => {
  const RSVP = sequelize.define('RSVP', {
    eventId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Events'}
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {model: 'Users'}
    }
  }, {});
  RSVP.associate = function(models) {
    RSVP.belongsTo(models.Event, {foreignKey: "eventId", onDelete: "CASCADE", hooks: true})
    RSVP.belongsTo(models.User, {foreignKey: "userId", onDelete: "CASCADE", hooks: true})
  };
  return RSVP;
};
