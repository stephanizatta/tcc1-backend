module.exports = (sequelize, DataTypes) => {
  const RelatorioMaterial = sequelize.define(
    'RelatorioMaterial',
    {
      idMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idRelatorio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      loteMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      referenciaMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      qtdMaterial: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true },
  );

  RelatorioMaterial.associate = function associate(models) {
    RelatorioMaterial.Material = RelatorioMaterial.belongsTo(models.Material, { foreignKey: 'idMaterial' });
  };

  return RelatorioMaterial;
};
