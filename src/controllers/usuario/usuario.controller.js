import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Usuario } from '../../models';
import { successResponse, errorResponse, uniqueId } from '../../helpers';

export const visualizarUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll(
      {
        where: req.query.id
          ? { id: req.query.id } : undefined,
      },
    );
    return successResponse(req, res, { usuarios });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const editarUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome } = req.body;
    const { tipoDeUsuario } = req.body;

    const usuario = await Usuario.findByPk(id);
    await usuario.update({ nome, tipoDeUsuario });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const excluirUsuario = async (req, res) => {
  try {
    const { id } = req.params;

    const usuario = await Usuario.findByPk(id);
    await usuario.destroy({ id });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const cadastrarUsuario = async (req, res) => {
  try {
    const {
      email, senha, nome, tipoDeUsuario,
    } = req.body;

    const usuario = await Usuario.scope('withSecretColumns').findOne({
      where: { email },
    });

    if (usuario) {
      throw new Error('User already exists with same email');
    }

    const reqPass = crypto
      .createHash('md5')
      .update(senha)
      .digest('hex');

    const payload = {
      email,
      nome,
      senha: reqPass,
      isVerified: false,
      verifyToken: uniqueId(),
      tipoDeUsuario,
    };

    await Usuario.create(payload);

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const usuario = await Usuario.scope('withSecretColumns').findOne({
      where: { email: req.body.email },
    });

    const token = jwt.sign(
      {
        usuarios: {
          id: usuario.id,
          email: usuario.email,
          createdAt: new Date(),
        },
      },
      process.env.SECRET,
    );
    delete usuario.dataValues.senha;

    return successResponse(req, res, { usuario, token });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const profile = async (req, res) => {
  try {
    const { idUsuario } = req.usuario;
    const usuario = await Usuario.findOne({ where: { id: idUsuario } });
    return successResponse(req, res, { usuario });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const changePassword = async (req, res) => {
  try {
    const { idUsuario } = req.usuario;
    const usuario = await Usuario.scope('withSecretColumns').findOne({
      where: { id: idUsuario },
    });

    const reqPass = crypto
      .createHash('md5')
      .update(req.body.oldPassword)
      .digest('hex');

    if (reqPass !== usuario.senha) {
      throw new Error('Old password is incorrect');
    }

    const newPass = crypto
      .createHash('md5')
      .update(req.body.newPassword)
      .digest('hex');

    await Usuario.update({ password: newPass }, { where: { id: usuario.id } });

    return successResponse(req, res, {});
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
