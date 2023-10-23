module.exports = (sequelize, Sequelize) => {
  const Relatorio = sequelize.define(
    'Relatorio',
    {
      hospital: {
        type: Sequelize.STRING,
      },
      idMedico: {
        type: Sequelize.INTEGER,
      },
      medicoCrm: {
        type: Sequelize.STRING,
      },
      assinaturaMedico: {
        type: Sequelize.TEXT,
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
    {
      freezeTableName: true,
      paranoid: true,
    },
  );

  Relatorio.associate = function associate(models) {
    Relatorio.Materiais = Relatorio.hasMany(models.RelatorioMaterial, { foreignKey: 'idRelatorio' });
    Relatorio.Medico = Relatorio.belongsTo(models.Usuario, { as: 'medico', foreignKey: 'idMedico' });
  };

  return Relatorio;
};
