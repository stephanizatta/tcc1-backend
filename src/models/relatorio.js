module.exports = (sequelize, Sequelize) => {
  const Relatorio = sequelize.define(
    'Relatorio',
    {
      hospital: {
        type: Sequelize.STRING,
      },
      medico: {
        type: Sequelize.STRING,
      },
      nomePaciente: {
        type: Sequelize.STRING,
      },
      convenio: {
        type: Sequelize.STRING,
      },
      instrumentador: {
        type: Sequelize.STRING,
      },
      data: {
        type: Sequelize.DATE,
      },
    },
  );
  return Relatorio;
};
