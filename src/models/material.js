module.exports = (sequelize, Sequelize) => {
  const Material = sequelize.define(
    'Material',
    {
      descricao: {
        type: Sequelize.STRING,
      },
    },
    { freezeTableName: true },
  );
  return Material;
};
