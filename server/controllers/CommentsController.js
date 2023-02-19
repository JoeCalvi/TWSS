import { Auth0Provider } from "@bcwdev/auth0provider"
import { commentsService } from "../services/CommentsService.js"
import BaseController from "../utils/BaseController.js"


export class CommentsController extends BaseController{
  constructor(){
    super('api/comments')
    this.router
    .get('/comments/:commentId', this.getSpecificComment)
    .use(Auth0Provider.getAuthorizedUserInfo)
    .post('', this.createComment)
    .delete('/:commentId', this.deleteComment)
    .put('/:commentId', this.editComment)
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
      const comment = await commentsService.createComment(commentData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async deleteComment(req, res, next){
    try {
      const user = req.userInfo
      const userId = user.id
      const commentId = req.params.commentId
      const comment = await commentsService.deleteComment(commentId, userId)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }

  async editComment(req, res, next){
    try {
      const user = req.userInfo
      const userId = user.id
      const commentId = req.params.commentId
      const commentData = req.body
      const comment = await commentsService.editComment(commentId, userId, commentData)
      res.send(comment)
    } catch (error) {
      next(error)
    }
  }
}