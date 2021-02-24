'use strict';
module.exports = (sequelize:any, DataTypes:any) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.STRING,
    },
    TopicId: {
      type: DataTypes.INTEGER,
    },
    AccountName: {
      type: DataTypes.STRING,
    },
  }, {});
  Post.associate = function(models:any) {
    Post.belongsTo(models.Topic);
    Post.belongsTo(models.Account);
  };
  return Post;
};
