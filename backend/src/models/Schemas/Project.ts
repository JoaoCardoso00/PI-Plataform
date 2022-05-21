import mongoose from 'mongoose';
import { ProjectInterface } from '../Interfaces/ProjectIntrerface';

const ProjectSchema = new mongoose.Schema<ProjectInterface>({
  period_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Period'
  },
  image: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  times_clicked: {
    type: Number,
    default: 0,
  },
  participants: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  video: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
});

export default mongoose.model('Project', ProjectSchema)
