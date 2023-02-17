import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class CommentsService{
  async deleteComment(commentId, commenterId) {
    const commentToDelete = await dbContext.Comments.findById(commentId)
    if(commentToDelete.commenterId == commenterId){
      await commentToDelete.remove()
    }else{
      throw new BadRequest("That's not your comment!")
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
    const comments = await dbContext.Comments.find({postId}).populate('Commenter', 'name picture')
    return comments
  }

}

export const commentsService = new CommentsService()