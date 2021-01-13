export class CommentItem {
  /**
   * JSDOC
   * @param {HTMLElement} root
   * @param {title: string; description: string; img: string; id: number; note: string}} data
   */
  constructor(root, data, onDelete) {
    this.root = root;
    this.data = data;
    this.onDelete = onDelete;
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
    const button = document.createElement('button');
    button.addEventListener('click', () => {
      // console.log('REMOVED');
      // this.root.removeChild(this.domElement);
      this.onDelete(this.data.id);
    });
    button.textContent = 'DELETE';
    this.domElement.append(button);
    this.root.append(this.domElement);
  }
}
