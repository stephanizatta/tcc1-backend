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
router.get(
  '/visualizarUsuarios',
  usuarioController.visualizarUsuarios,
);
router.post(
  '/editarUsuario/:id',
  usuarioController.editarUsuario,
);
router.post(
  '/excluirUsuario/:id',
  usuarioController.excluirUsuario,
);

router.post(
  '/cadastrarMaterial',
  materialController.cadastrarMaterial,
);
router.post(
  '/editarMaterial/:id',
  materialController.editarMaterial,
);
router.get(
  '/visualizarMateriais',
  materialController.visualizarMateriais,
);
router.post(
  '/excluirMaterial/:id',
  materialController.excluirMaterial,
);

router.post(
  '/cadastrarRelatorio',
  relatorioController.cadastrarRelatorio,
);
router.post(
  '/editarRelatorio/:id',
  relatorioController.editarRelatorio,
);
router.get(
  '/visualizarRelatorios',
  relatorioController.visualizarRelatorios,
);
router.post(
  '/excluirRelatorio/:id',
  relatorioController.excluirRelatorio,
);
router.post(
  '/assinarRelatorio/:id',
  relatorioController.assinarRelatorio,
);

router.get(
  '/visualizarMedicos',
  usuarioController.visualizarMedicos,
);

module.exports = router;
