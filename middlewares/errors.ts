import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../lib/errors';

export default async (error: any, req: Request, res: Response) => {
  res.status(error.status || 500).json({ message: error.message });
};

export function notFound(req: Request, res: Response, next: NextFunction) {
  res.status(404);

  next(new HttpError(401, 'Not Found'));
}
