import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account';
import { CommentSchema } from "../models/Comment.js";
import { DownvoterSchema } from '../models/Downvoter.js';
import { PostSchema } from '../models/Post.js';
import { UpvoterSchema } from '../models/Upvoter.js';
import { ValueSchema } from '../models/Value';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Posts = mongoose.model('Post', PostSchema)
  Comments = mongoose.model('Comment', CommentSchema)
  Upvoters = mongoose.model('Upvoter', UpvoterSchema)
  Downvoters = mongoose.model('Downvoter', DownvoterSchema)
}

export const dbContext = new DbContext()
