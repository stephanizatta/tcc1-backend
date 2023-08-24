import express from 'express';
import * as usuarioController from '../controllers/usuario/usuario.controller';

const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
router.get('/visualizarUsuarios', usuarioController.visualizarUsuarios);

module.exports = router;
