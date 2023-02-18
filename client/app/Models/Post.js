


export class Post {
  constructor(data) {
    this.postId = data.id
    this.title = data.title;
    this.description = data.description;
    this.poster = data.Poster
    this.posterId = data.posterId;
    this.tag = data.tag;
  }

  get ActivePostTemplate() {
    return `
    <div class="row">
        <div class="col-12">
          <div class="row p-3">
            <div class="col-2">
              <img src="${this.poster?.picture}" alt="" class="rounded-circle">
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
          <div class="row justify-content-center">
            <div class="col-10 border border-dark p-3 my-3">
              <p>
                ${this.description}
              </p>
            </div>
          </div>
          <div class="text-end mb-3">
          <button class="btn btn-primary" title="New Comment" type="button"
          aria-controls="offcanvasRight"><span class="mdi mdi-pencil-box-outline"></span></button>
            <button class="btn btn-danger" onclick="app.postsController.deletePost('${this.postId}')"><span class="mdi mdi-trash-can-outline"></span></button>
            </div>
          <div class="row justify-content-start mb-3">
            <div class="col-2 ms-3">
              <img src="https://via.placeholder.com/50" alt="" class="rounded-circle">
            </div>
            <div class="col-8">
              <div class="text-start">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi officiis molestias mollitia? Rerum
                  recusandae accusamus labore a, that's what she said!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="p-2">
      </div>
      </div>
    `
  }

  get AllPostsTemplate() {
    return `
    
        <div class="col-10 my-3 ms-2 p-3 border border-dark rounded selectable" onclick="app.postsController.setActivePost('${this.postId}')">
          <div class="row">
            <div class="col-2">
              <img src="${this.poster?.picture}" alt="" class="rounded-circle all-posts-img">
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
      
    `
  }
}