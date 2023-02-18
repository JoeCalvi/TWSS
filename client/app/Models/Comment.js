


export class Comment {
  constructor(data) {
    this.description = data.description;
    this.commenterId = data.commenterId
    this.postId = data.postId
  }

  get CommentsTemplate() {
    return /*html*/ `
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
    `
  }
}