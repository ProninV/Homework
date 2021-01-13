class Product {
    constructor(root, data, cart) {
      this.root = root;
      this.data = data;
      this.cart = cart;
    }
  
    render() {
      this.domElement = document.createElement('div');
      this.domElement.classList.add('product-card');
  
      const { preview, rating, genre, title, description } = this.data;
      const template = `
      <img
        src="${preview}"
        alt=""
        class="product-card__img"
      />
      <div class="product-card__header">
      <p class="product-card__name">${genre}</p>
      <p class="product-card__rating">${rating}</p>
      </div>
      <div class="product-card__content">
        <h2 class="product-card__title">
        ${title}
        </h2>
        <p class="product-card__description">${description}
        </p>
      </div>
        <div class="product-card__bottom">
        <button class="product-card__action-btn">Buy!</button>
        </div>
      </div>

      `;
  
      this.domElement.innerHTML = template;
      const btn = this.domElement.querySelector('.product-card__action-btn');
      btn.addEventListener('click', () => {
        this.cart.addItem(this.data);
      });
      this.root.append(this.domElement);
    }
  }
  
  export { Product };
