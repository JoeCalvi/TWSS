


export class Comment {
  constructor(data) {
    this.description = data.description;
    this.commenterId = data.commenterId
    this.postId = data.postId
    this.commenter = data.Commenter
  }

  get CommentsTemplate() {
    return /*html*/ `
            <div class="col-2 ms-3 my-3">
              <img src="${this.commenter?.picture}" alt="" class="rounded-circle all-posts-img">
            </div>
            <div class="col-8 d-flex align-items-center">
              <div class="text-start">
                <p>
                  ${this.description}
                </p>
              </div>
            </div>
    `
  }
}