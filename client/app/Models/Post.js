import { appState } from "../AppState.js";



export class Post {
  constructor(data) {
    this.postId = data.id
    this.title = data.title;
    this.description = data.description;
    this.poster = data.Poster
    this.posterId = data.posterId;
    this.tag = data.tag;
    this.upvoters = data.upvotes;
    this.downvoters = data.downvotes;
    this.upvotes = this.upvoters.length;
    this.downvotes = this.downvoters.length;
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
                  <img src="${this.poster?.picture}" alt="" class="rounded-circle poster-img">
                  <span class="fs-4 ps-3 normal-text">${this.poster?.name}</span>
                </div>
                <div class="col-8 ps-3 d-flex justify-content-evenly align-items-center">
                    <div class="normal-text">
                        <h2>${this.title}</h2>
                    </div>
                </div>
                <div class="col-2 d-flex justify-content-end align-items-center">
                    <div class="d-flex flex-column pe-3">
                        <span class="fs-3" id="postUpvotes">${this.upvotes}</span>
                        <span class="fs-3" id="postDownvotes">${this.downvotes}</span>
                    </div>
                    <div class="fs-3">
                        <i class="mdi mdi-arrow-up-bold-outline selectable" title="Upvote this post." onclick="app.postsController.upvote('${this.postId}')"></i>
                          <br>
                        <i class="mdi mdi-arrow-down-bold-outline selectable" title="Downvote this post." onclick="app.postsController.downvote('${this.postId}')"></i>
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
          <div class="row justify-content-start align-items-center mb-3" id="comments-section">
            
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