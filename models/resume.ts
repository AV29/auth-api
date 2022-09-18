import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const resumeSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

export default mongoose.model('Resume', resumeSchema);
