'use strict';
module.exports = (sequelize:any, DataTypes:any) => {
  const Topic = sequelize.define('Topic',
    {
      content: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      AccountName: {
        type: DataTypes.STRING,
      },
    }, {});
  Topic.associate = function(models:any) {
    Topic.hasMany(models.Post);
    Topic.belongsTo(models.Account);
  };
  return Topic;
};
