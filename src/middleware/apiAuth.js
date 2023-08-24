import { errorResponse } from '../helpers';
import { Usuario } from '../models';

const jwt = require('jsonwebtoken');

const apiAuth = async (req, res, next) => {
  if (!(req.headers && req.headers['x-token'])) {
    return errorResponse(req, res, 'Token is not provided', 401);
  }
  const token = req.headers['x-token'];
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.usuario = decoded.usuario;

    const usuario = await Usuario.scope('withSecretColumns').findOne({
      where: { email: req.usuario.email },
    });

    if (!usuario) {
      return errorResponse(req, res, 'User is not found in system', 401);
    }

    const reqUser = { ...usuario.get() };
    reqUser.userId = usuario.id;
    req.user = reqUser;

    return next();
  } catch (error) {
    return errorResponse(
      req,
      res,
      'Incorrect token is provided, try re-login',
      401,
    );
  }
};

export default apiAuth;
