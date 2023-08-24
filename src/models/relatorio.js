module.exports = (sequelize, Sequelize) => {
  const Relatorio = sequelize.define(
    'Relatorio',
    {
      tipoDeUsuario: {
        type: Sequelize.STRING,
      },
      hospital: {
        type: Sequelize.STRING,
      },
      idMedico: {
        type: Sequelize.INTEGER,
      },
      nomePaciente: {
        type: Sequelize.STRING,
      },
      convenio: {
        type: Sequelize.STRING,
      },
      idInstrumentador: {
        type: Sequelize.INTEGER,
      },
      data: {
        type: Sequelize.DATE,
      },
    },
  );
  return Relatorio;
};
