import express from 'express';
import validate from 'express-validation';
import * as usuarioController from '../controllers/usuario/usuario.controller';
import * as usuarioValidator from '../controllers/usuario/usuario.validator';

import * as relatorioController from '../controllers/relatorio/relatorio.controller';

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
router.get(
  '/visualizarRelatorios',
  relatorioController.visualizarRelatorios,
);

module.exports = router;
