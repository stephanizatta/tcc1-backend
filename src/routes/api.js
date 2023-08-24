import express from 'express';
import validate from 'express-validation';
import * as usuarioController from '../controllers/usuario/usuario.controller';
import * as usuarioValidator from '../controllers/usuario/usuario.validator';

const router = express.Router();

//= ===============================
// API routes
//= ===============================
router.get('/me', usuarioController.profile);
router.post(
  '/changePassword',
  validate(usuarioValidator.changePassword),
  usuarioController.changePassword,
);

module.exports = router;
