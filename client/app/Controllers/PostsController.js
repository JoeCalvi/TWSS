
import { appState } from "../AppState.js";
import { Post } from "../Models/Post.js";
import { commentsService } from "../Services/CommentsService.js";
import { postsService } from "../Services/PostsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";
import { CommentsController } from "./CommentsController.js";


function _drawAllPosts() {
  let template = ''
  appState.posts.forEach(p => template += p.AllPostsTemplate);
  setHTML('main-body-content', template)
}

function _drawActivePost() {
  let activePost = appState.activePost
  // @ts-ignore
  setHTML('main-body-content', activePost.ActivePostTemplate)
}



export class PostsController {
  constructor() {
    console.log("Hello from the PostsController");
    this.getAllPosts()
    appState.on('posts', _drawAllPosts)
  }

  async getAllPosts() {
    try {
      await postsService.getAllPosts()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  show() {
    _drawAllPosts()
  }

  async createPost() {
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      let form = window.event.target;
      let postBody = getFormData(form);
      await postsService.createPost(postBody)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async deletePost(postId) {
    try {
      if(await Pop.confirm('Are you sure that you wish to delete your post?')){
        await postsService.deletePost(postId)
      }
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async setActivePost(postId) {
    try {
      await postsService.setActivePost(postId)
      await _drawActivePost()
      await commentsService.getCommentsByPostId(postId)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}

