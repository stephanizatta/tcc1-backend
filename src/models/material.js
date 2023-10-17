module.exports = (sequelize, Sequelize) => {
  const Material = sequelize.define(
    'Material',
    {
      descricao: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      paranoid: true,
    },
  );
  return Material;
};
