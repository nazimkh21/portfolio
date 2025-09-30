import mongoose from 'mongoose';

const ReplySchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    authorName: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

const FeedbackSchema = new mongoose.Schema(
  {
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    authorName: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    replies: { type: [ReplySchema], default: [] },
  },
  { timestamps: true }
);

export default mongoose.model('Feedback', FeedbackSchema);


