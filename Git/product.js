class Product{
    constructor(root,data){
        this.root = root;
        this.data = data;
    }
    render(){
        this.domElement = document.createElement('div');
        this.domElement.classList.add('product-card')
        this.domElement.id=this.data.id;
        const{preview,rating,title,description} = this.data;
        const template = (`
        <img
        src="${preview}" alt=""  class="product-card__image"/>
      <div class="product-card__rating">${rating}</div>
      <div class="product-card__content">
        <h2 class="product-card__title">
          ${title}
        </h2>
        <p class="product-card__description">
         ${description}
        </p>
        <button class="product-card__action-btn">Buy!</button>
      </div>
        `);
        this.domElement.innerHTML = template;
        this.root.append(this.domElement)
    }
}
export {Product}
