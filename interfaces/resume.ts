export interface ISkill {
  title: string;
  description: string;
  level: number;
}

export interface ITechnology {
  title: string;
  skills: Array<ISkill>;
}

export interface IAchievement {
  id: string;
  icon: string;
  description: string;
}

export interface IEducation {
  title: string;
  years: string;
  level: number;
  description: string;
}

export interface IExperience {
  companyInfo: string;
  customerInfo: string;
  customerInfoTitle: number;
  title: string;
  methodologies: Array<string>;
  responsibilities: Array<string>;
  stack: Array<string>;
  tools: Array<string>;
}

export interface ILanguage {
  title: string;
  flag: string;
  level: number;
  description: string;
}

export interface IResume {
  technologies: Array<ITechnology>;
  achievements: Array<IAchievement>;
  education: Array<IEducation>;
  experience: Array<IExperience>;
  languages: Array<ILanguage>;
}

export interface IResumeRepository {
  getResume: () => Promise<any>;
  updateResume: (resume: IResume) => Promise<any>;
}