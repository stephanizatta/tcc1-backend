module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('RelatorioMaterial', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    idMaterial: {
      type: Sequelize.INTEGER,
    },
    idRelatorio: {
      type: Sequelize.INTEGER,
    },
    loteMaterial: {
      type: Sequelize.STRING,
    },
    referenciaMaterial: {
      type: Sequelize.STRING,
    },
    qtdMaterial: {
      type: Sequelize.INTEGER,
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
  down: queryInterface => queryInterface.dropTable('RelatorioMaterial'),
};
