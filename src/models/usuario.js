module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    'Usuario',
    {
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoDeUsuario: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      medicoCrm: {
        type: DataTypes.STRING,
      },
      assinaturaMedico: {
        type: DataTypes.STRING,
      },
    },
    {
      defaultScope: {
        attributes: { exclude: ['senha'] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ['senha'] },
        },
      },
    },
  );

  return Usuario;
};
