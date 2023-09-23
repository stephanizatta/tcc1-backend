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
      medicoCrm: {
        type: Sequelize.STRING,
      },
      assinaturaMedico: {
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
    { freezeTableName: true },
  );

  Relatorio.associate = function associate(models) {
    Relatorio.Materiais = Relatorio.hasMany(models.RelatorioMaterial, { foreignKey: 'idRelatorio' });
  };

  return Relatorio;
};
