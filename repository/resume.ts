import { HttpError } from '../lib/errors';
import Resume from '../models/resume';

export default {
  getResume: async function () {
    const resume = await Resume.findOne().limit(1);
    if (!resume) {
      throw new HttpError(404, 'Could not find resume!');
    }
    return resume.content;
  },

  updateResume: async function (resumeContent: string) {
    let resume = await Resume.findOne().limit(1);
    if (resume) {
      resume.content = resumeContent;
    } else {
      resume = new Resume({
        content: resumeContent
      });
    }
    await resume.save();
    return resumeContent;
  }
};
