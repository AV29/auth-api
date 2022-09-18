import { IResume, IResumeRepository } from '../interfaces/resume';
import repository from '../repository/resume';

const factory = (repository: IResumeRepository) => ({
  getResume: () => {
    return repository.getResume();
  },
  updateResume: (resume: IResume) => {
    return repository.updateResume(resume);
  }
});

export default factory(repository);
