import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { server } from "./AxiosService.js"


class PostsService {
  async downvote(postId) {
    const res = await server.post('api/voters/downvoters', {postId})
    appState.activePost.downvotes++
  }
  async upvote(postId) {
    const res = await server.post('api/voters/upvoters', {postId})
    appState.activePost.upvotes++
  }
  async deletePost(postId) {
    const res = await server.delete('api/posts/' + postId);
    console.log("DELETED THIS POST", res.data);
    let oldPostIndex = appState.posts.findIndex(p => p.postId == postId)
    appState.posts.splice(oldPostIndex, 1)
    appState.emit('posts')
  }
  async setActivePost(postId) {
    let activePost = appState.posts.find(p => p.postId == postId)
    // @ts-ignore
    appState.activePost = activePost
    console.log("Active Post", appState.activePost);
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
    console.log('res data', res.data);
  }


}

export const postsService = new PostsService