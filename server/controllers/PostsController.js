import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
      .get('/:postId', this.getPostById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPosts)
      .delete('', this.removePostById)
  }

  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }
  async getPostById(req, res, next) {
    try {
      const postId = req.params.postId
      const post = await postsService.getPostById(postId)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
  async createPosts(req, res, next) {
    try {
      const user = req.userInfo
      req.body.posterId = user.id
      const newPost = await postsService.createPosts(req.body)
      return res.send(newPost)
    } catch (error) {
      next(error)
    }
  }

  async removePostById(req, res, next) {
    try {
      const user = req.userInfo
      const posterId = user.id
      const postId = req.params.postId
      const post = await postsService.removePostById(postId, posterId)
      return res.send(post)
    } catch (error) {
      next(error)
    }
  }
}