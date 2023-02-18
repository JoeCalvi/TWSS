import { commentsService } from "../Services/CommentsService.js"
import { Pop } from "../Utils/Pop.js"



export class CommentsController{
  constructor(){
    
  }

  async getAllComments() {
    try {
      await commentsService.getAllComments()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}