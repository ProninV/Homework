import { createProductList } from './productList.js';

const createGrid = (root = document.querySelector('body')) => {
  fetch('https://boring-fe.herokuapp.com/advertisments')
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createProductList(root,data);
    })
};

export { createGrid };
