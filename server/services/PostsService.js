import { dbContext } from "../db/DbContext.js"

class PostsService {
  async getPosts() {
    const posts = await dbContext.Posts.find()
    return posts
  }

}


export const postsService = new PostsService()