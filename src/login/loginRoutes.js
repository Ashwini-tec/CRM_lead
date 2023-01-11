import { Router } from 'express';
import * as loginController  from '../login/loginController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as loginSchema from './loginValidation.js';

const router = new Router();

/**
 * login
 */
router.post(
    '/login',
    validation(loginSchema.login()),
    loginController.loginUser
);

export default router;
