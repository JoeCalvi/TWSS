import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { server } from "./AxiosService.js"


class PostsService {
  async setActivePost(postId) {
    console.log("Active Post", postId);
  }
  async createPost(postBody) {
    const res = await server.post('api/posts', postBody);
    console.log("Creating Post", res.data);
    appState.posts.push(new Post(res.data))
    appState.emit('posts')
  }
  async getAllPosts() {
    const res = await server.get('api/posts')
    appState.posts = res.data.map(p => new Post(p))
    console.log('Getting All Posts', appState.posts);
  }
}

export const postsService = new PostsService