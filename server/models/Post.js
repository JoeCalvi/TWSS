import { Schema } from "mongoose";

const ObjectId = Schema.Types.ObjectId
export const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true, maxLength: 500 },
    posterId: { type: ObjectId, ref: 'Account', required: true },
    tag: { type: String, enum: ["family", "house work", "friends", "job"], required: true }

  }, { timestamps: true, toJSON: { virtuals: true } }
)