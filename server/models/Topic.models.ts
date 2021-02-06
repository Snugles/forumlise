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
    }, {});
  Topic.associate = function(models:any) {
    Topic.hasMany(models.Post);
  };
  return Topic;
};
