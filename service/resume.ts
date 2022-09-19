import { IResumeRepository } from '../interfaces/resume';
import { resumeRepository } from '../repository';

const factory = (repository: IResumeRepository) => ({
  getResume: () => {
    return repository.getResume();
  },
  updateResume: (resume: string) => {
    return repository.updateResume(resume);
  }
});

export default factory(resumeRepository);
