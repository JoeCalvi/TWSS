import { commentsService } from "../services/CommentsService.js"
import BaseController from "../utils/BaseController.js"


export class CommentsController extends BaseController{
  constructor(){
    super('api/posts')
    this.router
    .get('/:postId/comments', this.getPostComments)
    .post('/:postId/comments', this.createComment)
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

  async createComment(req, res, next){
    try {
      const commentData = req.body
      const comment = commentsService.createComment(commentData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}