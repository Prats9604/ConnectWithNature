import mongoose, { Document, Schema } from 'mongoose';

interface IPost extends Document {
  name: string;
  description: string;
  src: string[];
  contributor: string;
}

const PostSchema = new Schema<IPost>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  src: [{ type: String, required: true }], 
  contributor: { type: String, required: true },
}, { timestamps: true });

const Post = mongoose.model<IPost>('Post', PostSchema);

export default Post;
