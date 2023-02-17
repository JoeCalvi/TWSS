import { dbContext } from "../db/DbContext.js"

class PostsService {
  getPosts() {
    const posts = dbContext.Posts.find()
    return posts
  }

}


export const postsService = new PostsService()