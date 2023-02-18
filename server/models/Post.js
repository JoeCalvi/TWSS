import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId
export const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    posterId: { type: ObjectId, ref: 'Account', required: true },
    tag: { type: String, enum: ["family", "housework", "friends", "job"], required: true }
  }, { timestamps: true, toJSON: { virtuals: true } }
);

PostSchema.virtual('Poster', {
  ref: 'Account',
  justOne: true,
  localField: 'posterId',
  foreignField: '_id'
})

PostSchema.virtual('upvotes', {
  ref: 'Upvoter',
  localField: '_id',
  foreignField: 'postId',
})

PostSchema.virtual('downvotes', {
  ref: 'Downvoter',
  localField: '_id',
  foreignField: 'postId',
})