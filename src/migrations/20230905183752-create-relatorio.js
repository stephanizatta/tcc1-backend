module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Relatorio', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
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
