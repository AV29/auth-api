import data from '../mocks/data';
import { IResume } from '../interfaces/resume';

export default class Resume {
  static find(): Promise<IResume> {
    return new Promise((resolve) => {
      resolve(data.content);
    });
  }

  static save(resumeContent: IResume): Promise<void> {
    return new Promise((resolve) => {
      data.content = resumeContent;
      resolve();
    });
  }
}
