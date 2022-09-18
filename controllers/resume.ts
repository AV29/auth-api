import { NextFunction, Request, Response } from 'express';
import { resumeService } from '../service';
import { handleHttpError } from '../lib/errors';

export const updateResume = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // const req.userId
    const resumeContent = req.body;
    await resumeService.updateResume(resumeContent);
    res.status(200).json({ message: 'Resume updated!' });
  } catch (err) {
    handleHttpError(err, next);
  }
};

export const getResume = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resume = await resumeService.getResume();
    res.status(200).json(resume);
  } catch (err) {
    handleHttpError(err, next);
  }
};
