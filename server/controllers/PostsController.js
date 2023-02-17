import { postsService } from "../services/PostsService.js";
import BaseController from "../utils/BaseController.js";

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getPosts)
  }
  async getPosts(req, res, next) {
    try {
      const posts = await postsService.getPosts()
      res.send(posts)
    } catch (error) {
      next(error)
    }
  }


}