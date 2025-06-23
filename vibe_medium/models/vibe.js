import mongoose from "mongoose";

const vibeSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  vibeText: {
    type: String,
    required: true,
    trim: true
  }
});
const vibe = mongoose.model('vibe', vibeSchema);


export default vibe;