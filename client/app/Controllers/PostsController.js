import { postsService } from "../Services/PostsService";
import { Pop } from "../Utils/Pop";



export class PostsController{
  constructor(){
    console.log("Hello from the PostsController");
  }

  async getAllPosts(){
    try {
      let allPosts = await postsService.getAllPosts()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }
}