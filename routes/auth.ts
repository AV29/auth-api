import express from 'express';
import * as controller from '../controllers/auth.js';
import { signupValidators, loginValidators } from '../lib/validators';

const router = express.Router();

router.put('/signup', signupValidators, controller.signup);

router.post('/login', loginValidators, controller.login);

export = router;
