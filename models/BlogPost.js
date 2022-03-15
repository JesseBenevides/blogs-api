module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING, unique: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    { tableName: 'BlogPosts' },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsToMany(models.User, { foreignKey: 'id', as: 'Users' });
  };
  return BlogPost;
};
