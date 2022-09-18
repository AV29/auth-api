import http from 'node:http';
import { NextFunction, Request } from 'express';
import { validationResult } from 'express-validator';

export class HttpError extends Error {
  private status: number;
  constructor(status: number, message: string) {
    super(message);
    this.name = 'HttpError';
    this.status = status;
    this.message = message || http.STATUS_CODES[status] || 'Error';
    Error.captureStackTrace(this, HttpError);
  }
}

export class AuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AuthError';
    Error.captureStackTrace(this, AuthError);
  }
}

export const handleValidationErrors = (req: Request) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError(422, `Validation failed! ${errors.array()[0].msg}`);
  }
};

export const handleHttpError = (err: any, next: NextFunction) => {
  console.log(err);
  if (err instanceof HttpError) {
    return next(err);
  }
  return next(new HttpError(500, 'Something happened on the server!'));
};
