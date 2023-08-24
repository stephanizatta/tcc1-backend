const Joi = require('joi');

export const getOtherUserProfile = {
  body: {
    idUsuario: Joi.number().required(),
  },
};

export const changePassword = {
  body: {
    oldPassword: Joi.string().required(),
    newPassword: Joi.string().required(),
  },
};

export const cadastrarUsuario = {
  nome: Joi.string().required(),
  email: Joi.string().email().required(),
  senha: Joi.string().required(),
};

export const login = {
  body: {
    email: Joi.string().email().required(),
    senha: Joi.string().required(),
  },
};
