'use strict';
module.exports = (sequelize, DataTypes) => {
  const Group = sequelize.define('Group', {
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
      foreignKey: "groupId"
    }
    
    Group.belongsToMany(models.User, groupColumnMapping)
    Group.hasMany(models.Event, {foreignKey: "groupId"})
  };
  return Group;
};
