import { Schema } from "mongoose"

const ObjectId = Schema.Types.ObjectId

export const CommentSchema = new Schema(
  {
    commenterId: {type: ObjectId, ref: 'Account', required: true},
    description: {type: String, required: true, maxLength: 500},
    postId: {type: ObjectId, ref: 'Post', required: true}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

CommentSchema.virtual('Post', {
  localField: 'postId',
  foreignField: '_id',
  justOne: true,
  ref: 'Post'
})

CommentSchema.virtual('Commenter', {
  localField: 'commenterId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'

})