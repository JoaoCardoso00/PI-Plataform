import mongoose from 'mongoose';
import { PeriodInterface } from '../Interfaces/PeriodInterface';

const PeriodSchema = new mongoose.Schema<PeriodInterface>({
  name: {
    type: String,
    required: true,
  },
    description: {
    type: String,
    required: true,
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
}, {
  timestamps: true
});

export default mongoose.model('Period', PeriodSchema)
