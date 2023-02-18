

import { appState } from "../AppState.js";
import { Comment } from "../Models/Comment.js";
import { server } from "./AxiosService.js";
class CommentsService{
  async createComment(commentBody) {
    const res = await server.post('api/comments', commentBody)
    appState.comments.push(new Comment(res.data))
    console.log(appState.comments);
    appState.emit('comments')
  }
  async getCommentsByPostId(postId) {
    const res = await server.get(`api/posts/${postId}/comments`);
    appState.comments = res.data.map(c => new Comment(c));
    console.log(appState.comments);

  }
}

export const commentsService = new CommentsService