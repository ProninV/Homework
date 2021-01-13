const createProduct = ({id,img,title,note}) => {
     //const { id,img,title,note } = product;
    return `
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product-card" id="${id}">
    <img src="${img}" alt="" class="product-card__image"/>
    <div class="product-card__title">
    <p class="product-card__name">${title}</p>
    <p class="product-card__rating">${note}</p>
    </div>
  </div>
    </div>
  `;
  }
  
  export { createProduct };