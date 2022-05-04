import mongoose from 'mongoose'
import { VoteInterface } from '../Interfaces/Vote'

const VoteSchema = new mongoose.Schema<VoteInterface>({
  project_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Period'
  },
  email: {
    type: String
  }
}, {
  timestamps: true
})

export default mongoose.model('Vote', VoteSchema)
