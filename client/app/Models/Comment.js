


export class Comment {
  constructor(data) {
    this.commentId = data.id
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
            <div class="col-1 text-end">
            <button class="btn btn-danger" onclick="app.commentsController.deleteComment('${this.commentId}')" title="Delete this comment."><i class="mdi mdi-trash-can-outline"></i></button>
            </div>
    `
  }
}