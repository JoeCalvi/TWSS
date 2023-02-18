import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class PostsService {
  async removePostById(postId, posterId) {
    const post = await this.getPostById(postId)
    if (posterId != post.posterId) {
      throw new BadRequest("Not your post")
    }
    await post.remove()
    return post
  }
  async getPostById(postId) {
    const post = await dbContext.Posts.findById(postId)
      .populate('Poster', 'name picture')
    // .populate('')
    if (!post) {
      throw new BadRequest("Post Not Found")
    }
    return post
  }
  async createPosts(body) {
    const newPost = await dbContext.Posts.create(body)
    await newPost.populate('Poster upvotes downvotes', 'name picture')
    return newPost
  }
  async getPosts() {
    const posts = await dbContext.Posts.find()
      .populate('Poster upvotes downvotes', 'name picture')
    return posts
  }

}


export const postsService = new PostsService()