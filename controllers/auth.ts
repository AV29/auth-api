import { NextFunction, Request, Response } from 'express';
import { authService } from '../service';
import { handleHttpError, handleValidationErrors } from '../lib/errors';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    handleValidationErrors(req);

    const result = await authService.signup(email, password, name);
    res.status(201).json({ message: 'User created!', userId: result._id });
  } catch (err) {
    handleHttpError(err, next);
  }
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    handleValidationErrors(req);

    const result = await authService.login(email, password);
    res
      .status(201)
      .json({ message: 'User logged in!', token: result.token, userId: result.userId });
  } catch (err) {
    handleHttpError(err, next);
  }
};
