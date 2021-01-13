const getProductTemplate = (id,img,title) => {
    return`
    <div class="col-3 col-md-4 col-sm-6 col-xs-12">
    <div class="product-card" id="${id}">
    <img src="https://boring-fe.herokuapp.com/${img}" alt="" class="product-card__image"/>
    <div class="product-card__title">
    <p class="product-card__name">${title}</p>
    </div>
  </div>
    </div>
    `;
}
const createProductList=(root,data) =>{
  const container = document.createElement('div');
  container.classList.add('grid');
  
  let dataHtmlStrings = '';
  data.forEach((product) =>{
    const id = product.id
    const img = product.img
    const title = product.title
    const html = getProductTemplate(id,img,title)
    console.log(html, dataHtmlStrings)
    dataHtmlStrings += html
  })

  container.insertAdjacentHTML('beforeend', dataHtmlStrings);
  root.append(container);
}
export {createProductList}