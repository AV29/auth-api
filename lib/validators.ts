import { body } from 'express-validator';
import User from '../models/user';
import { HttpError } from './errors';

const MIN_PASSWORD_LENGTH = 5;

export const signupValidators = [
  body('email')
    .isEmail()
    .withMessage(`Invalid email is entered`)
    .custom(async (value, { req }) => {
      const existingUser = await User.findOne({ email: value });
      if (existingUser) throw new HttpError(401, 'This email is already taken!');
      else return true;
    })
    .normalizeEmail(),
  body('password')
    .trim()
    .isLength({ min: MIN_PASSWORD_LENGTH })
    .withMessage(`Password length should be minimum ${MIN_PASSWORD_LENGTH} characters`)
];

export const loginValidators = [
  body('email').isEmail().withMessage(`Invalid email is entered`),
  body('password')
    .trim()
    .isLength({ min: MIN_PASSWORD_LENGTH })
    .withMessage(`Password length should be minimum ${MIN_PASSWORD_LENGTH} characters`)
];
