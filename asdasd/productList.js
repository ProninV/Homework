import { createProduct} from './product.js';

const createProductList = (root,data) => {
  const container = document.createElement('div');
  container.classList.add('grid');

  let productHtmlStrings = '';
  data.forEach((product) => {
    const html = createProduct(product);
    productHtmlStrings += html;
  });
  container.insertAdjacentHTML('beforeend', productHtmlStrings);
  root.append(container);
};

export { createProductList };
