import mongoose from 'mongoose';
import { IResumeDocument, IResumeModel } from '../interfaces/resume';

const Schema = mongoose.Schema;

const resumeSchema = new Schema<IResumeDocument>(
  {
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model<IResumeDocument, IResumeModel>('Resume', resumeSchema);
