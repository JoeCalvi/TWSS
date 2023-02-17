import { dbContext } from "../db/DbContext.js"


class CommentsService{
  async getSpecificComment(commentId) {
    const comment = await dbContext.Comments.findById(commentId)
    return comment
  }
  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    return comment
  }
  async getPostComments(postId) {
    const comments = await dbContext.Comments.find({postId})
    return comments
  }

}

export const commentsService = new CommentsService()