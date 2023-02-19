import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"


class CommentsService{
  async editComment(commentId, userId, commentData) {
    const commentToEdit = await dbContext.Comments.findById(commentId)
    if(commentToEdit.commenterId == userId){
      commentToEdit.description = commentData.description
    }else{
      throw new BadRequest("That's not your comment!")
    }
    commentToEdit.save()
    return commentToEdit
  }
  async deleteComment(commentId, userId) {
    const commentToDelete = await dbContext.Comments.findById(commentId)
    if(commentToDelete.commenterId == userId){
      await commentToDelete.remove()
    }else{
      throw new BadRequest("That's not your comment!")
    }
    return commentToDelete
  }
  async getSpecificComment(commentId) {
    const comment = await dbContext.Comments.findById(commentId)
    .populate('Commenter', 'name picture')
    if(!comment){
      throw new BadRequest('Invalid Comment Id!')
    }
    return comment
  }
  async createComment(commentData) {
    const comment = await dbContext.Comments.create(commentData)
    await comment.populate('Commenter', 'name picture')
    return comment
  }
  async getPostComments(postId) {
    const comments = await dbContext.Comments.find({postId}).populate('Commenter', 'name picture')
    if(!comments){
      throw new BadRequest('Invalid Post Id!')
    }
    return comments
  }

}

export const commentsService = new CommentsService()