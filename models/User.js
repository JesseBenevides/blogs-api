module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: { primaryKey: true, type: DataTypes.INTEGER },
      displayName: { type: DataTypes.STRING },
      email: { unique: true, type: DataTypes.STRING },
      password: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      tableName: 'Users',
    },
  );

  User.associate = (models) => {
    User.hasOne(models.BlogPost, { foreignKey: 'userId', as: 'BlogPosts' });
  };
  return User;
};
