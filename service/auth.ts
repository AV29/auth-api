import { IAuthRepository } from '../interfaces/auth';
import { authRepository } from '../repository';

const factory = (repository: IAuthRepository) => ({
  signup: (email: string, password: string, name: string) => {
    return repository.signup(email, password, name);
  },
  login: (email: string, password: string) => {
    return repository.login(email, password);
  }
});

export default factory(authRepository);
