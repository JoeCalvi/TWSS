import { Schema } from "mongoose";

export const UpvoterSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, requrired: true, ref: 'Post' },
  upvoterId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } }
)

UpvoterSchema.virtual('upvoter', {
  ref: 'Account',
  justOne: true,
  localField: 'upvoterId',
  foreignField: '_id'
})

UpvoterSchema.index({ postId: 1, upvoterId: 1 }, { unique: true })