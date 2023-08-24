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
  );

  return RelatorioMaterial;
};
