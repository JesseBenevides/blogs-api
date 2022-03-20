module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING },
      content: { type: DataTypes.STRING, unique: true },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
    },
    {
      tableName: 'BlogPosts',
      createdAt: 'published',
      updatedAt: 'updated',
    },
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, { foreignKey: 'id', as: 'Users' });
  };
  return BlogPost;
};
