import { Auth0Provider } from "@bcwdev/auth0provider";
import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.createPosts)
  }
  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts()
      res.send(posts)
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
}