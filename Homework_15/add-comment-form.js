const formChildrenTemplate = `
  <div class="add-comment-form__field">
    <input
      type="text"
      name="title"
      class="add-comment-form__native-input"
      placeholder="Title"
    />
  </div>
  <div class="add-comment-form__field">
    <input
      type="text"
      name="description"
      class="add-comment-form__native-input"
      placeholder="description"
    />
  </div>
  <div class="add-comment-form__field">
    <input
      type="text"
      name="note"
      class="add-comment-form__native-input"
      placeholder="note"
    ></input>
  </div>
  <div class="add-comment-form__field">
    <input
      type="file"
      name="image"
      class="add-comment-form__btn add-comment-form__btn_upload"
    />
  </div>
  <div class="add-comment-form__field">
    <button class="add-comment-form__btn add-comment-form__btn_submit" type="submit">
      Add
    </button>
    <button class="add-comment-form__btn add-comment-form__btn_clear" type="reset">
      Clear
    </button>
  </div>
`;

export class AddCommentForm {
  constructor(root, onSuccessCallback) {
    this.root = root;
    this.onSuccessCallback = onSuccessCallback;
    this.init();
  }

  init() {
    this.render();
  }

  render() {
    this.formElement = document.createElement('form');
    this.formElement.classList.add('add-comment-form');
    this.formElement.innerHTML = formChildrenTemplate;
    this.formElement.addEventListener('submit', (e) => this.sendData(e));
    this.root.append(this.formElement);
  }

  sendData(e) {
    e.preventDefault(); // !!!!!!!!!!
    console.log(this);
    const formData = new FormData(this.formElement);
    fetch('http://localhost:4000/advertisments', {
      method: 'POST',
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('INSIDE FORM', data);
        this.onSuccessCallback(data);
      });
  }
}
