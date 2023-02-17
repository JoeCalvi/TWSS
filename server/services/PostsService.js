import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PostsService {
  async getPostById(postId) {
    const post = await dbContext.Posts.findById(postId)
    // .populate('Poster', 'name picture')
    // .populate('')
    if (!post) {
      throw new BadRequest("Post Not Found")
    }
    return post
  }
  async createPosts(body) {
    const newPost = await dbContext.Posts.create(body)
    return newPost
  }
  async getPosts() {
    const posts = await dbContext.Posts.find()
    return posts
  }

}


export const postsService = new PostsService()