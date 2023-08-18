const Joi = require('joi');

// eslint-disable-next-line import/prefer-default-export
export const materialRegister = {
  description: Joi.string().required(),
};
