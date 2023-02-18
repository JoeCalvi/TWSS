import { Schema } from "mongoose";

export const DownvoterSchema = new Schema({
  postId: { type: Schema.Types.ObjectId, required: true, ref: 'Post' },
  downvoterId: { type: Schema.Types.ObjectId, required: true, ref: 'Account' }
}, { timestamps: true, toJSON: { virtuals: true } }
)

DownvoterSchema.virtual('downvoter', {
  ref: 'Account',
  justOne: true,
  localField: 'downvoterId',
  foreignField: '_id'
})

DownvoterSchema.index({ postId: 1, downvoterId: 1 }, { unique: true })