import { appState } from "../AppState.js";



export class Post {
  constructor(data) {
    this.postId = data.id
    this.title = data.title;
    this.description = data.description;
    this.poster = data.Poster
    this.posterId = data.posterId;
    this.tag = data.tag;
  }

  get CommentFormTemplate() {
    return `
  <form onsubmit="app.commentsController.createComment('${
      // @ts-ignore
      appState.activePost.postId}'')">
  <div class="mb-3">
    <label for="comment" class="form-label">New Comment</label>
    <input type="text" class="form-control" name="description" id="description" aria-describedby="comment">
  </div>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="offcanvas">Submit</button>
</form>
  `
  }


  get ActivePostTemplate() {
    return /*html*/ `
    <div class="row">
        <div class="col-12">
            <div class="row p-3">
                <div class="col-2">
                   <img src="${this.poster?.picture}" alt="" class="rounded-circle">
                </div>
                <div class="col-8 ps-3 d-flex justify-content-evenly align-items-center">
                    <div class="normal-text">
                        <h2>${this.title}</h2>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-end">
                    <div class="fs-3">
                        <i class="mdi mdi-arrow-up-bold-outline selectable" title="Upvote this post."></i>
                          <br>
                        <i class="mdi mdi-arrow-down-bold-outline selectable" title="Downvote this post."></i>
                    </div>
                </div>
              </div>  
              <div class="row justify-content-end align-items-center">
                  <div class="col-10 glass-card rounded p-3 my-3 text-center">
                      <p class="fs-5">${this.description}</p>
                  </div>
                  <div class="col-1 d-flex justify-content-end">
                  <button class="btn btn-danger" onclick="app.postsController.deletePost('${this.postId}')" title="Delete this post."><i class="mdi mdi-trash-can-outline"></i></button>
                  </div>
              </div>
              <div class="row my-3 justify-content-end">
                  <div class="text-center">
                    <button class="btn btn-primary" title="New Comment" type="button"
                      data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">New Comment</button>
                  </div>
              </div>      
          <div class="row justify-content-start mb-3" id="comments-section">
            
          </div>
        </div>
      </div>
    </div>
    `
  }

  get AllPostsTemplate() {
    return `
    
        <div class="col-10 my-3 ms-2 p-3 glass-card rounded selectable" onclick="app.postsController.setActivePost('${this.postId}')">
          <div class="row">
            <div class="col-2">
              <img src="${this.poster?.picture}" alt="" class="rounded-circle all-posts-img">
            </div>
            <div class="col-10 ps-3 d-flex justify-content-between align-items-center">
              <div class="text-center normal-text">
                <h3>
                  ${this.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      
    `
  }
}