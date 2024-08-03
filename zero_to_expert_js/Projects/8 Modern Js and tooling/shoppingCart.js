// this module code is going to be exported
// new file -> module; naming -> camelCase

console.log('exporting module code will always run first due to hoisting'); // runing code like this is not private where it was been imported but variables are

// private; top scope is module
const shippingCost = 10;
const cart = [];

console.log(cart); // ['bannana', 'grape']

// named export
// export const addToShoopingCart = function(product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`);
// }

// export always happen to top level code, it wouden't work like this :-

// if(/* anything */){
//    export const addToShoopingCart = function(product, quantity) {
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`);
//     } 
// } //ERR: unexepected toker 'export'

// name export is used to export multiple thing at athe same time
// ex:
// export const totalPrice = 111;
// export const totalQuantity = 24;

// better way:
const totalPrice = 111;
const totalQuantity = 24;

export { totalPrice, totalQuantity as tQ };

// Export default (we use this when we want to export just one thing from one module (wether it was an value, function, block of code or just one functianality or in General JUST ONE THING PER MODULE))
// we can eport default by name as well as not iwth name; like "export default const addToShoopingCart = fun(){....}" but we can do this as well "export default fun(){....} later we can import is by any name"

export default function(product, quantity) {
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
} // only one thing that's it


console.log(cart); // ['bannana', 'grape']



// -------- Top - level await outside of async function only in modules --------

// const response = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await response.json();

// console.log(data); // (100) [{},{},....]

// console.log('flow paused');

// but if you try to ren in 3g mode you can notice tahat the above await block the module's rest of the code execution
// output:
// exporting module code will always run first due to hoisting
// ['bannana', 'grape']
// ['bannana', 'grape']
// (100) [{},{},....] (after like 5 second)
// flow paused (it also run after 5 second when the above request has been processed)
// 4 grapes added to cart (then all after module code, index.js js code will run)
// 4 orange added to cart

// so use this top-level await in module carefully

// // USE CASE:-

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




// exporting module code will always run first due to hoisting
// []
// []
// flow paused
// flow of code 0 
// lastPostDirect:  Promise {<pending>}
// flow of code 1
// lastPosteandled:  {title: 'at nam consequatur', content: 'cupiditate quo est fhghf aut'}
// flow of code 2
// 4 grapes added to cart
// 4 orange added to cart


// IMP: so main promblem is that use se in above output index.js code has to wait till it's module code to finish and it create problem when module code is like feateching data from the servers took too long time, then it will pause our main index.js code execution

// The above beahivous of top level await is same if we write all code into index.js

