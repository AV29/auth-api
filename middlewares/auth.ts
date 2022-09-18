import { NextFunction, Response } from 'express';
import jwt, { JwtPayload, Secret } from 'jsonwebtoken';
import { IAuthRequest } from '../interfaces/request';
import { HttpError } from '../lib/errors.js';

export default (req: IAuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return next(new HttpError(401, 'Not authenticated'));
  }
  let decodedToken: JwtPayload;
  try {
    const token = authHeader.split(' ')[1];
    decodedToken = jwt.verify(token, process.env['JWT_SECRET'] as Secret) as JwtPayload;
  } catch (err) {
    return next(new HttpError(500, 'Token decoding failed'));
  }
  if (!decodedToken) {
    return next(new HttpError(401, 'Not authenticated'));
  }
  req.userId = decodedToken.userId;
  next();
};
