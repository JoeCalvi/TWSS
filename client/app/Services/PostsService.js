import { server } from "./AxiosService.js"


class PostsService {
  async getAllPosts() {
    const res = await server.get('api/posts')
  }
  constructor(){

  }
}

export const postsService = new PostsService