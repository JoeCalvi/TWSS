import { postsService } from "../Services/PostsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";



export class PostsController{
  constructor(){
    console.log("Hello from the PostsController");
  }

  async getAllPosts(){
    try {
      let allPosts = await postsService.getAllPosts()
      console.log();
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
      console.log("Creating Post", postBody);
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

