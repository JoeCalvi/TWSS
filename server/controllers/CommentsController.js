import { commentsService } from "../services/CommentsService.js"
import BaseController from "../utils/BaseController.js"


export class CommentsController extends BaseController{
  constructor(){
    super('api/posts')
    this.router
    .get('/:postId/comments', this.getPostComments)
    .get('/:postId/comments/commentId', this.getSpecificComment)
    .post('/:postId/comments', this.createComment)
    .delete('/:postId/comments/commentId', this.deleteComment)
  }

  async getPostComments(req, res, next){
    try {
      const postId = req.params.postId
      const comments = commentsService.getPostComments(postId)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getSpecificComment(req, res, next){
    try {
      const commentId = req.params.commentId
      const comment = commentsService.getSpecificComment(commentId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next){
    try {
      const commentData = req.body
      const comment = commentsService.createComment(commentData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next){
    try {
      const commentId = req.params.commentId
      const comment = commentsService
    } catch (error) {
      
    }
  }
}