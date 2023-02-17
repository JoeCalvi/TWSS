import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService.js"
import BaseController from "../utils/BaseController.js"


export class CommentsController extends BaseController{
  constructor(){
    super('api/posts')
    this.router
    .get('/:postId/comments', this.getPostComments)
    .get('/:postId/comments/commentId', this.getSpecificComment)
    // .use(Auth0Provider.getAuthorizedUserInfo)
    .post('/:postId/comments', this.createComment)
    .delete('/:postId/comments/commentId', this.deleteComment)
  }

  async getPostComments(req, res, next){
    try {
      const postId = req.params.postId
      const comments = await commentsService.getPostComments(postId)
      res.send(comments)
    } catch (error) {
      next(error)
    }
  }

  async getSpecificComment(req, res, next){
    try {
      const commentId = req.params.commentId
      const comment = await commentsService.getSpecificComment(commentId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async createComment(req, res, next){
    try {
      const user = req.userInfo
      const commentData = req.body
      req.body.commenterId = user.id
      req.body.postId = req.params.postId
      const comment = await commentsService.createComment(commentData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next){
    try {
      const user = req.userInfo
      const commenterId = user.id
      const commentId = req.params.commentId
      const comment = await commentsService.deleteComment(commentId, commenterId)
      res.send(comment)
    } catch (error) {
      
    }
  }
}