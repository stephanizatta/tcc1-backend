import express from 'express';
import validate from 'express-validation';
import * as userController from '../controllers/user/user.controller';
import * as userValidator from '../controllers/user/user.validator';
import * as materialController from '../controllers/material/material.controller';

const router = express.Router();

router.post(
  '/login',
  validate(userValidator.login),
  userController.login,
);
router.post(
  '/register',
  userController.register,
);
router.post(
  '/materialRegister',
  materialController.materialRegister,
);

module.exports = router;
