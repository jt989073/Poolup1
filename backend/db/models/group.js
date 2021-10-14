'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
    name:{
      allowNull: false,
      type: DataTypes.STRING
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {});
  Group.associate = function(models) {
    // associations can be defined here
    const groupColumnMapping = {
      through: "UserGroups",
      otherKey: "userId",
      foreignKey: "groupId",
    }

    Group.belongsToMany(models.User, groupColumnMapping)
    Group.hasMany(models.Event, {foreignKey: "groupId", onDelete: "CASCADE", hooks: true})
  };
  return Group;
};
