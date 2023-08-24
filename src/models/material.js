module.exports = (sequelize, Sequelize) => {
  const Material = sequelize.define(
    'Material',
    {
      descricao: {
        type: Sequelize.STRING,
      },
    },
  );
  return Material;
};
