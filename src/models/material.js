module.exports = (sequelize, DataTypes) => {
  const Material = sequelize.define(
    'Material',
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
  return Material;
};
