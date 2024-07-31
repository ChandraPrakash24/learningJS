// imorting other modules here; where they are live linked
// must change the scrypty type to module

/* // 1:

import './shoppingCart.js';

console.log('executing local code 1');
console.log('no marter where i placed (local code of the file) the imported code is going to be executed first');
console.log('executing local code 3');

*/


/* // 2:


// named import must be exact same name
import { addToShoopingCart, tQ, totalPrice as price} from './shoppingCart.js';

console.log('executing local code 1');
console.log('no marter where i placed (local code of the file) the imported code is going to be executed first');
console.log('executing local code 3');

// now you can call this just like it was written in his file itself
addToShoopingCart('bannana',5); // 5 bannana added to cart

console.log(price, tQ);

*/

/* // 3:

// import all at once  whith class naming convention , whic create that namespace which is like an object containing all the export

//    all as Class naming convention to create ShoppingCart namespace
import * as ShoppingCart from './shoppingCart.js';

console.log('no marter where i placed (local code of the file) the imported code is going to be executed first');

console.log(ShoppingCart.totalPrice); // 111

ShoppingCart.addToShoopingCart('milk', 2); // 2 milk added to cart

// you can import same module multiple time thats not a problem but generally it's a bad practice

*/

/* // 4:
// default import and top levl await

// import anyName from './shoppingCart.js'
import add from './shoppingCart.js';

add('grapes', 4);
add('orange', 4);
// exporting module code will always run first due to hoisting
// 4 grapes added to cart

// but why this "exporting module code will always run first due to hoisting" logs even thoug we are eporting one thing by deafult thati sthat function
// reson:-
// The logging "exporting module code will always run first due to hoisting" is simply the result of module code execution. This logging happens because when a module is loaded (e.g., when index.js imports shoppingCart.js), all the code at the top level of shoppingCart.js is executed immediately.

// This is independent of whether you're using export default, named exports, or any other export syntax. The entire module script runs when it is imported.


// also you cans use default and nameexport all at once as well

// import add, { addToShoopingCart, tQ, totalPrice as price } from './shoppingCart.js';
// add('orange', 4); // 4 orange added to cart
// console.log(price); // 111

// but in practice it;'s a bad pratice to mix default and named export

// Top level await in index.js file


// USE CASE:-

// const getPost = async function(){
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = await response.json();

//     return { title: data.at(-1).title, content: data.at(-1).body };
// }

// console.log('flow of code 0 '); // the above code won't pause flow coz it was an async function

// const lastPost = getPost();
// console.log('lastPostDirect: ', lastPost); // Promise<pending>

// console.log('flow of code 1');

// const lastPost2 = await getPost(); // use of top level await (but still ot blocks the flow of code)
// console.log('lastPostHandled: ', lastPost2); // Promise

// console.log('flow of code 2');

*/

/*


// --------- Module Pattern or Module implementation Old school way ---------


const ShoppingCart = (function(){
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 111;
    const totalQuantity = 24;

    const addToCart = function(product, quantiety) {
        cart.push({product, quantiety});
        console.log(`${quantiety} ${product} added to cart (we can access private varible as well ( shipping cost : ${shippingCost})`)
    }

    const stockUp = function(product, quantiety) {
        console.log(`${quantiety} ${product} ordered from supplyer`);
    }

    return { // making it as API
        totalPrice,
        totalQuantity,
        cart,
        addToCart
    }
})();

console.log(ShoppingCart.totalPrice);
ShoppingCart.addToCart('patato', 2);
console.log(ShoppingCart.cart);
ShoppingCart.addToCart('spinish', 1);
console.log(ShoppingCart.cart); // all properties are live

// but how does we access thos property and functions even thoug iife has runed and returned already and how we are actually able to acces that cart, this is due to closers as all the property and function remember the environment of there birth place evn private variables

// output:-
// 111
// 2 patato added to cart (we can access private varible as well ( shipping cost : 10)
// [{…}]
// 1 spinish added to cart (we can access private varible as well ( shipping cost : 10)
// (2) [{…}, {…}]0: {product: 'patato', quantiety: 2}1: {product: 'spinish', quantiety: 1} length: 2 [[Prototype]]: Array(0)


// NOTE: console is a global scope and ShoppingCart variable is local to this module (shoppingCart.js and scripts.js both are module as we have difinw in index.html) hence you can only log that values from here in current module (index.js) but you can't access it in console by just typing name of shoppingCart and hitting enter 

// THEN WHY modules of ES6 was devlope beacouse it ha some disadvantages such as:-
// 1: we have to track the order in which we have decleare it into thml and per podule we need per script tag in html
// 2: then all the variable will be available to gloabal scpace
// 3: we can't use bundler like parcel or webpack to bundel all of that file

*/

/*

// AMD Modules and Common JS modules

// in node js's npm uses Common js and then it become popular and become standerd for js liberarues and modules hence now Common Js modules is defacto

// import in Common js way (only work in node js note in browser)

// const { addToCart }  = require('./shoppingCart.js');

// export in Common js way (only work in node js note in browser)

// export.addToCart = function(product, quantiety) {
    //     cart.push({product, quantiety});
    //     console.log(`${quantiety} ${product} added to cart (we can access private varible as well ( shipping cost : ${shippingCost})`)
    // }
    
    // named import and export method in common js way:-
    
    // CommonJS module exporting multiple named values
    const foo = 'foo';
    const bar = 'bar';
    
    module.exports = {
        foo,
        bar
    };
    
    // Importing the whole module
    const { foo, bar } = require('./module1');
    
    console.log(foo); // Outputs: foo
    console.log(bar); // Outputs: bar
    
    // non-named import and export method in common js way:-
    
    // Exporting a single value
module.exports = function greet(name) {
    return `Hello, ${name}!`;
  };
  
// Exporting an object with multiple methods
module.exports = {
    foo: function() {
      return 'foo';
    },
    bar: function() {
      return 'bar';
    }
};


// Importing the function from module1
const greet = require('./module1');
console.log(greet('World')); // Outputs: Hello, World!

// Importing the object from module2
const utils = require('./module2');
console.log(utils.foo()); // Outputs: foo
console.log(utils.bar()); // Outputs: bar

*/





