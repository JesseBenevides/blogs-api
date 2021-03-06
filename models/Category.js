module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
      name: { type: DataTypes.STRING },
    },
    {
      timestamps: false,
      tableName: 'Categories',
    },
  );
  return Category;
};
