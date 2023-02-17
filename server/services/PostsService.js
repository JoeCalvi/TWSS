import { dbContext } from "../db/DbContext.js"

class PostsService {
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