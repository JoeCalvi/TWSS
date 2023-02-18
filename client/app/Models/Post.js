


export class Post {
  constructor(data){
    this.postId = data.id
    this.title = data.title;
    this.description = data.description;
    this.posterId = data.posterId;
    this.posterImage = data.Poster.picture
    this.tag = data.tag;
  }

  get ActivePostTemplate(){
    return`
    
    `
  }

  get AllPostsTemplate() {
    return `
    <div class="row justify-content-start align-items-center">
        <div class="col-8 my-3 ms-2 p-3 border border-dark rounded selectable" onclick="app.postsController.setActivePost('${this.postId}')">
          <div class="row">
            <div class="col-2">
              <img src="${this.posterImage}" alt="" class="rounded-circle all-posts-img">
            </div>
            <div class="col-10 ps-3 d-flex justify-content-between align-items-center">
              <div class="text-center">
                <h4>
                  ${this.title}
                </h4>
              </div>
              <div class="text-center">
                <div class="fs-3">
                  <span class="mdi mdi-arrow-up-bold-outline"></span>
                </div>
                <div class="fs-3">
                  <span class="mdi mdi-arrow-down-bold-outline"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
  }
}