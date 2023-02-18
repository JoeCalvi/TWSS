

import { server } from "./AxiosService.js";
class CommentsService{
  async getCommentsByPostId(postId) {
    const res = await server.get(`api/posts/${postId}/comments`);
    console.log(res.data);
  }
}

export const commentsService = new CommentsService