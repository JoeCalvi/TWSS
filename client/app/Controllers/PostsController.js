import { appState } from "../AppState.js";
import { postsService } from "../Services/PostsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


function _drawAllPosts(){
  let template = ''
  appState.posts.forEach(p => template += p.AllPostsTemplate);
  setHTML('main-body-content', template)
}

export class PostsController{
  constructor(){
    console.log("Hello from the PostsController");
    this.getAllPosts()
    appState.on('posts', _drawAllPosts)
  }

  async getAllPosts(){
    try {
      await postsService.getAllPosts()
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async createPost(){
    try {
      // @ts-ignore
      window.event.preventDefault();
      // @ts-ignore
      let form = window.event.target;
      let postBody = getFormData(form);
      await postsService.createPost(postBody)
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }

  async setActivePost(postId){
    try {
      await postsService.setActivePost(postId)

    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}

