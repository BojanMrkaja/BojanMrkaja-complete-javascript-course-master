//importing module
// import {
//   addToCart,
//   totalQuantity as price,
//   totalPrice as quantity,
// } from './shoopingCart.js';
// console.log('importing  module');

// import * as ShoppingCart from './shoopingCart.js';
//
// ShoppingCart.addToCart('bred', 10);
import add, { cart } from './shoopingCart.js';
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
if (module.hot) {
  module.hot.accept();
}
console.log('Boris');
import cloneDeep from 'lodash-es';
add('pizza', 2);
add('bread', 3);
add('apples', 5);
console.log(cart);

import 'core-js/stable';
