import express from 'express';
import validate from 'express-validation';
import * as usuarioController from '../controllers/usuario/usuario.controller';
import * as usuarioValidator from '../controllers/usuario/usuario.validator';
import * as materialController from '../controllers/material/material.controller';
import * as relatorioController from '../controllers/relatorio/relatorio.controller';

const router = express.Router();

router.post(
  '/login',
  validate(usuarioValidator.login),
  usuarioController.login,
);
router.post(
  '/cadastrarUsuario',
  usuarioController.cadastrarUsuario,
);
router.post(
  '/visualizarUsuarios',
  usuarioController.visualizarUsuarios,
);

router.post(
  '/cadastrarMaterial',
  materialController.cadastrarMaterial,
);
router.post(
  '/editarMaterial',
  materialController.editarMaterial,
);
router.get(
  '/visualizarMateriais',
  materialController.visualizarMateriais,
);

router.post(
  '/cadastrarRelatorio',
  relatorioController.cadastrarRelatorio,
);

module.exports = router;
