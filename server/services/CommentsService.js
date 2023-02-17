import { dbContext } from "../db/DbContext.js"


class CommentsService{
  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
  }
  async getPostComments(postId) {
    const comments = await dbContext.Comments.find({postId})
  }

}

export const commentsService = new CommentsService()