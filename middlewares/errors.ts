import { Request, Response } from 'express';
import uuid from 'node-uuid';
import Logger from '../lib/logger';

export function allErrors(error: any, req: Request, res: Response) {
  const errorObject = {
    status: error.status || 500,
    message: error.message,
    key: uuid.v4()
  };
  Logger.error({ message: errorObject });
  Logger.error(error.stack);

  res.status(errorObject.status);
  res.json(errorObject);
}
