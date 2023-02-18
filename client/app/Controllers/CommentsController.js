import { commentsService } from "../Services/CommentsService.js"
import { Pop } from "../Utils/Pop.js"



export class CommentsController{
  constructor(){
    
  }

  async getCommentsByPostId(postId) {
    try {
      await commentsService.getCommentsByPostId(postId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}