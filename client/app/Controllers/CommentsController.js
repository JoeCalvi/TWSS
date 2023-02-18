import { appState } from "../AppState.js"
import { commentsService } from "../Services/CommentsService.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML } from "../Utils/Writer.js"

function _drawCommentsByPostId(){
  let template = ''
  let comments = appState.comments
  comments.forEach(c => template += c.CommentsTemplate)
  setHTML('comments-section', template)
}
export class CommentsController{
  constructor(){
    appState.on("comments", _drawCommentsByPostId)
  }

  async getCommentsByPostId(postId) {
    try {
      await commentsService.getCommentsByPostId(postId)
      await _drawCommentsByPostId()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}