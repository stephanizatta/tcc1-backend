module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Usuario', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    nome: {
      type: Sequelize.STRING,
    },
    senha: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    tipoDeUsuario: {
      type: Sequelize.STRING,
    },
    medicoCrm: {
      type: Sequelize.STRING,
    },
    assinaturaMedico: {
      type: Sequelize.STRING,
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
  down: queryInterface => queryInterface.dropTable('Usuario'),
};
