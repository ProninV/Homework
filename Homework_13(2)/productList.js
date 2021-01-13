import { createProduct} from './product.js';

const createProductList = (root,data) => {
  const container = document.createElement('div');
  container.classList.add('grid');

  let dataHtmlStrings = '';
  data.forEach((product) => {
    const html = createProduct(product);
    dataHtmlStrings += html;
  });
  container.insertAdjacentHTML('beforeend', dataHtmlStrings);
  root.append(container);
};

export { createProductList };
