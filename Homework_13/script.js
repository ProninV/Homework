import {createProductList} from './productList.js'
fetch('https://boring-fe.herokuapp.com/advertisments')
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      createProductList(document.querySelector('body'), data)
    })
