import { Model } from 'mongoose';

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
  customerInfoTitle: string;
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
  achievements: Array<IAchievement>;
  technologies: Array<ITechnology>;
  experience: Array<IExperience>;
  languages: Array<ILanguage>;
  education: Array<IEducation>;
}

export interface IResumeRepository {
  getResume: () => Promise<any>;
  updateResume: (resume: string) => Promise<any>;
}

export interface IResumeDocument extends Document {
  id: number;
  updatedAt: number;
  createdAt: number;
  content: string;
}

export interface IResumeModel extends Model<IResumeDocument> {
  save(err: any): any;
}
