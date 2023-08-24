module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Relatorio', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: queryInterface => queryInterface.dropTable('Relatorio'),
};
