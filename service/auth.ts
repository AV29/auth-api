import repository from '../repository/auth';
import { IAuthRepository } from '../interfaces/auth';

const factory = (repository: IAuthRepository) => ({
  signup: (email: string, password: string, name: string) => {
    return repository.signup(email, password, name);
  },
  login: (email: string, password: string) => {
    return repository.login(email, password);
  }
});

export default factory(repository);
