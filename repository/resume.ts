import { HttpError } from '../lib/errors';
import { IResume } from '../interfaces/resume';
import Resume from '../models/resume';

export default {
  getResume: async function () {
    const resume = await Resume.find();
    if (!resume) {
      throw new HttpError(404, 'Could not find resume!');
    }
    return resume.content;
  },

  updateResume: async function (resumeContent: IResume) {
    const resume = await Resume.find();
    if (!resume) {
      throw new HttpError(404, 'Could not find resume!');
    }
    resume.content = resumeContent;
    await resume.save();
  }
};
