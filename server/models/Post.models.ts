'use strict';
module.exports = (sequelize:any, DataTypes:any) => {
  const Post = sequelize.define('Post', {
    content: {
      type: DataTypes.STRING,
    },
    TopicId: {
      type: DataTypes.INTEGER,
    },
  }, {});
  Post.associate = function(models:any) {
    Post.belongsTo(models.Topic);
  };
  return Post;
};
