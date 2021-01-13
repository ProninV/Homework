/* <div class="comment">

</div> */
const apiURL = 'http://localhost:4000';
export class CommentItem {
  /**
   * JSDOC
   * @param {HTMLElement} root
   * @param {{title: string; description: string; img: string; id: number; note: string}} data
   */
  constructor(root, data) {
    this.root = root;
    this.data = data;
    this.render();
  }

  render() {
    this.domElement = document.createElement('div');
    this.domElement.classList.add('comment');
    this.domElement.innerHTML = `
      <h2 class="comment__title">${this.data.title}</h2>
      <p class="comment__description">${this.data.description}</p>
      <p class="comment__note">${this.data.note}</p>
      <img src="${this.data.img}" class="comment__avatar"/>
    `;
    this.root.append(this.domElement);
  }
}
