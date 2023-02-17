import { dbContext } from "../db/DbContext.js"


class CommentsService{
  async deleteComment(commentId, commenterId) {
    const commentToDelete = await dbContext.Comments.findById(commentId)
    if(commentToDelete.commenterId == commenterId){
      await commentToDelete.remove()
    }
    return commentToDelete
  }
  async getSpecificComment(commentId) {
    const comment = await dbContext.Comments.findById(commentId)
    return comment
  }
  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('Commenter', 'name picture')
    return comment
  }
  async getPostComments(postId) {
    const comments = await dbContext.Comments.find({postId})
    return comments
  }

}

export const commentsService = new CommentsService()