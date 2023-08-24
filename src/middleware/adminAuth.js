import { errorResponse } from '../helpers';

const adminAuth = (req, res, next) => {
  if (req.usuario && req.usuario.email && req.usuario.isAdmin) {
    return next();
  }
  return errorResponse(req, res, "You don't have admin access", 401);
};

export default adminAuth;
