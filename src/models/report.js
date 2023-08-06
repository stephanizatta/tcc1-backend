module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define(
    'Report',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
  );
  return Report;
};
