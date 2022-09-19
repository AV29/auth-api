import { NextFunction, Request, Response } from 'express';
import { resumeService } from '../service';
import { handleHttpError } from '../lib/errors';

export const getResume = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resume = await resumeService.getResume();
    res.status(200).json(resume);
  } catch (err) {
    handleHttpError(err, next);
  }
};

export const updateResume = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resumeContent = req.body.content;
    await resumeService.updateResume(resumeContent);
    res.status(200).json({ message: 'Resume updated!' });
  } catch (err) {
    handleHttpError(err, next);
  }
};
