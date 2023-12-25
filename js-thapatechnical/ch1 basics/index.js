// section 1

// let _1my__name = 'bahadur';
// console.log(_1my__name);

// section 2

// different data types

// console.log(10 + "20"); //1020
// console.log(9 -'5'); //4 //BUG 1
// console.log('java' + 'Script'); //javaScript
// console.log(' ' + ' '); //
// console.log('vinod' - 'thapa'); //NaN
// console.log(true + true); //2
// console.log(true + false); //1
// console.log(false + true); //1
// console.log(false - true); //-1


// interview ques 1 : diff bet null and undefined


// let isTemp = null; //kuchbe nahi
// console.log(isTemp); //null
// console.log(typeof(isTemp)); //object //BUG 2

// let isStandBy; // no value is defined
// console.log(isStandBy); // undefined
// console.log(typeof(isStandBy)); // undefined



// interview ques 2 : Wha is NaN (doing numerical opperation [=,-,*,/] to non numerical adata type like string)
//                  OR
// NaN is a property of a global Object of BOM and BOM
// In other word, it is a variable in Global Scope
// The initial value of NaN is Not-A-Number
// console.log(typeof(NaN)); //number

// let myNumber = 123214124; // isNaN --> false
// let myName = 'sdhs'; // isNaN --> true

// if(isNaN(myName)){
//     console.log('please entere valid phone number');
// }


// let a = jh2233jh; // Error
// let b = 2ddfs233; // Error
// console.log(typeof(a)); // Error
// console.log(typeof(b)); // Error

// NaN Practice

// console.log(NaN === NaN); //false
// console.log(Number.NaN === NaN); //false
// console.log(isNaN(NaN)); //true
// console.log(isNaN(Number.NaN)); //true
// console.log(Number.isNaN(NaN)); //true
// console.log(isNaN(Number.isNaN(NaN))); //false



//    EXPRESSION AND OPERATORS


//    5       +        20 
//(operand operator operand) combination of all we sat --> Expression


// 1 assignment operator ( = )

// let a = 5;
// let b = 5;

// console.log('there a and b are equal or not ' + a == b); // false
// console.log(`there a and b are equal or not:- ${a == b}`); //ES6
//OUTPUT: there a and b are equal or not:- true


// 2 Areathmatic operator

// console.log(3+3);
// console.log(10-5);
// console.log(6*5);
// console.log(20/5);
// console.log(7%2);
//x++
//++x
// console.log('reminder Operator : ' + 27%4); //  4 | 27

// OUTPUT:
// 6
// 5
// 30
// 4
// 1


// 3 Comparision operator


// 4 Logical operator &&, ||, !

// 5 String operator
// concatination operator (+)

// let myName = 'abc';
// console.log('hello'+'world' + myName);



// challenge

// console.log(3**3); //3^3 = 27
// console.log(2**4); //3^4 = 16
// console.log(10 ** -1); //1/10 = 0.1

// console.log(123 + '456'); //123456

// swap two num
// let a  = 12;
// let b  = 15;
// console.log(`before swap a: ${a} and b: ${b}`);
// let c = a;
// a = b;
// b = c;
// console.log(`after swap a: ${a} and b: ${b}`);

// swap two num without third var

// a = a + b;
// b = a - b;
// a = a - b;
// console.log(`after swap a: ${a} and b: ${b}`);



// INTERVIEW QUES 3 : diff bet == (only check value) and === (checks both value and datatype both must be equal)

// ex:-

// let num1 = 5;
// let num2 = '5';

// console.log(typeof(num1));
// console.log(typeof(num2));

// console.log(num1 == num2);
// OUT:
// number
// string
// true

// console.log(num1 === num2); // false


//        CONTROL STATEMENTS AND LOOPS



// 1 if else

// let rain = false;

// if(rain){
//     console.log("don't go to school");
// } else {
//     console.log('go to school');
// }

// let year = 2400;
// // debugger;
// if(year % 4 === 0){
//     if(year % 100 === 0){
//         if(year % 400 === 0){
//             console.log('a leap year');
//         }else{
//             console.log('not a leap year');
//         }
//     }else{
//         console.log('a leap year');
//     }
// }else{
//     console.log('not a leap year');
// }

// let year = 2400;

// if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log('a leap year');
// } else {
//     console.log('not a leap year');
// }





// WHATA ARE TRUTHY AND FALSY IN JS

// FALSEY : - (total 6)
// 0, "", undefined, null, NaN, false

// if(NaN){
//     console.log('hay');
// }else{
//     console.log('hoo');
// }


// 2 condetinal ternery operator (only operator that thake three operend)

//   syntex:- varname = (condition) ? value1 : value2
// ex:-

// let age = 25;
// let message = (age >= 18) ? 'able to vote' : 'not able to vote';
// console.log(message);



// 3 switch statement

// let day = 7;
// let dayName = '';

// switch(day){
//     case 1:
//         dayName = 'monday';
//         break;
//     case 2:
//         dayName = 'tuesday';
//         break;
//     case 3:
//         dayName = 'wednesday';
//         break;
//     case 4:
//         dayName = 'thursday';
//         break;
//     case 5:
//         dayName = 'friday';
//         break;
//     case 6:
//         dayName = 'saturday';
//         break;
//     case 7:
//         dayName = 'sunday';
//         break;
//     default:
//         console.log("Entered wrong No of a Day"); 
// }
// console.log(dayName);




// 4 WHILE LOOP

// let i = 1;
// while(i<=10){
//     console.log(i++);
// }


// let count = 0;

// while (true) {
//     console.log(`Count is ${count}`);
//     count++;

//     if (count === 5) {
//         break;  // Break out of the loop when count reaches 5
//     }
// }



// 5 DO WHILE

// let i=0;

// do{
//     console.log(i++);
// }while(i <= 10);


// 6 FOR LOOP


//   initilizer is only visited one
// for (initilizer; condition ; iterator){
//     //code
// }


// for(i=0;i<=10;i++){
//     console.log(i);
// }


// print table of 8,9,12,15 using foor loop

// let x = 9;
// for(let i=1;i<=10;i++){
//     console.log(`${x} * ${i} = ${x*i}`);
// }



//       FUNCTIONS


// syntex:-  function funName ( param1, param2 ){
    // body
// }


// function greet(name){
//     console.log(`hello ${name}`);
// }

// greet('cpgl');    


// function sum (a=5,b=5){
//     return a + b;
// }

// let result = sum(1,2);
// let result = sum();
// console.log(result);


// 4 FUNCTION EXPRESSION

// function sum (a=5,b=5){
//     return a + b;
// }

// let funExpression = sum(1,2);
// console.log(funExpression);

// 5 Anynomous function 

// let funExp = function(a,b){
//     return a + b;
// }

// console.log('sum is: ' + funExp(1,2));

// 6 arrow function

/**************************************************************************/

//                    MODERN JS ( ES 6 )

// 1 let and const
// 2 templet String
// 3 default arguments
// 4 destructuring
// 5 object properties
// 6 arrow functions
// 7 spread operator
// 8 rest operator


//                     1 let and const

// var --> functional scope   function(){...if{...}...}
// let --> block scope   function(){  if{...}  }

//                       2 templet String

// console.log(`..${JS}..`);


//                      3 default arguments


// function mult(a,b=5){
//     return a * b;
// }
// console.log(mult(3));
    
    

//          6 arrow functions (once defined then call) ( IT SOES NOT SUPPORT 'this')

// const sum = (a,b) => {
//     return `sum is : ${a+b}`;
// }

// console.log(sum(1,2));

//               OR

// const sum = (a,b) => `the sum is ${a+b}`;
// const sum = (a,b) => a+b;

// console.log(sum(1,2));


//****************************** ARRAYS *************************************

// in js there is Array Class and Array are the prototypes of this class

//  Array initilize

// let myFriends = new Array;
// myFriends = ['aju','kaju','baju','raju'];

// ALSO

// let arr = [
//     'apple', 'bannan', 2, 80, true, ['a', 'b'], { key : 'value',anoKey : 'value2' },
//     function () {
//         console.log('This is a function');
//     },
//     undefined,
//     null
// ];


// Accessing elements in the array
// console.log(arr[0]);      // 'apple'
// console.log(arr[5][1]);   // 'b'
// console.log(arr[6].key);  // 'value'

// // Calling the function stored in the array
// arr[7]();  // Outputs: 'This is a function'


// myFriends = ['aju','kaju','baju','raju'];

//                               1 Traversal in an array

// 1 For Loop:
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// 2 For...of Loop:
// for (let elements of arr) {
//     console.log(elements);
// }

//3 forEach Method:

// arr.forEach(  element =>console.log(element)  );
// arr.forEach(function(element,index,array){
//  console.log(element + "----> index: " + index + " -----> " + array);
// });
// OUTPUT:-

// apple----> index: 0 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//     console.log('This is a function');
// },,
//     bannan----> index: 1 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//         console.log('This is a function');
//     },,
//         2----> index: 2 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//             console.log('This is a function');
//         },,
//             80----> index: 3 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                 console.log('This is a function');
//             },,
//                 true----> index: 4 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                     console.log('This is a function');
//                 },,
//                     a, b----> index: 5 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                         console.log('This is a function');
//                     },,
//                         [object Object]----> index: 6 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                             console.log('This is a function');
//                         },,
//                             function () {
//                                 console.log('This is a function');
//                             }----> index: 7 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                                 console.log('This is a function');
//                             },,
//                                 undefined----> index: 8 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                                     console.log('This is a function');
//                                 },,
//                                     null----> index: 9 -----> apple, bannan, 2, 80, true, a, b, [object Object], function () {
//                                         console.log('This is a function');
//                                     },,

// 4 Map Method:

// arr.map(function(element) {
//     console.log(element);
// });


// 5 While Loop:
// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

//6 Do...while Loop:

// let i = 0;
// do {
//     console.log(arr[i]);
//     i++;
// } while (i < arr.length);

// 7 for...in loop:

// for(let e in arr) console.log(e); // 0 1 2 .....9
// for(let e in arr) console.log(arr[e]); 
// OUTPUT: -
// apple
// bannan
// 2
// 80
// true
// [ 'a', 'b' ]
// { key: 'value', anoKey: 'value2' }
// [Function (anonymous)]
// undefined
// null


//               2 Searching and Filtering

// let complexArray = [
//     'apple',
//     'banana',
//     2,
//     80,
//     true,
//     ['a', 'b'],
//     { key: 'value', anotherKey: 'value2' },
//     function () {
//         console.log('This is a function');
//     },
//     undefined,
//     null,
//     { fruits: ['apple', 'banana', 'orange'], numbers: [1, 2, 3] }
// ];

// Linear Search for a specific value
// function linearSearch(array, target) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === target) {
//             return i; // Return the index if the target is found
//         }
//     }
//     return -1; // Return -1 if the target is not found
// }

// console.log('Linear Search for "banana":', linearSearch(complexArray, 'banana'));

// ADD: array.lastIndexOf();

// Array.includes() method for searching
// console.log('Array.includes() for "80":', complexArray.includes(80));
 
// Array.indexOf() method for searching
// console.log('Array.indexOf() for "value2":', complexArray.indexOf({ key: 'value', anotherKey: 'value2' }));
// console.log('Array.indexOf() for "80":', complexArray.indexOf(80));

// Find index using findIndex() method for objects with specific property
// let indexOfObject = complexArray.findIndex(item => item && item.anotherKey === 'value2');
// console.log('Find index using findIndex():', indexOfObject);
// let indexOfObject = complexArray.findIndex(item => item === 'banana');
// console.log('Find index using findIndex():', indexOfObject);

// Using filter() to find elements that meet a condition
// let filteredArray = complexArray.filter(item => typeof item === 'object' && item !== null);
// console.log('Filtered Array (objects only):', filteredArray);


//      fealtring

// 1 Filter by Type (e.g., Strings):

// let stringArray = complexArray.filter(item => typeof item === 'string');
// console.log('Filter by Type (Strings):', stringArray);


// 2 Filter by Condition (e.g., Numbers greater than 10):


// let numbersGreaterThan10 = complexArray.filter(item => typeof item === 'number' && item > 10);
// console.log('Filter by Condition (Numbers > 10):', numbersGreaterThan10);


// 3 Filter by Array Length (e.g., Arrays with more than 2 elements):

// let arraysWithMoreThan2Elements = complexArray.filter(item => Array.isArray(item) && item.length > 2);
// console.log('Filter by Array Length (> 2 elements):', arraysWithMoreThan2Elements);

// 4 Filter by Object Property (e.g., Objects with a specific key):

// let objectsWithKey = complexArray.filter(item => typeof item === 'object' && 'key' in item);
// console.log('Filter by Object Property (has "key"):', objectsWithKey);

// 5 Filter by Function Presence:

// let functionsInArray = complexArray.filter(item => typeof item === 'function');
// console.log('Filter by Function Presence:', functionsInArray);


// 6 Filter out Null and Undefined:

// let nonNullOrUndefinedValues = complexArray.filter(item => item !== null && item !== undefined);
// console.log('Filter out Null and Undefined:', nonNullOrUndefinedValues);



//                  CRUD in an Array

// const animal = ['pigs','goats','sheep'];


// 1 push ( it reaters the new length of the array )

// const returenedCount = animal.push('dog','cow');
// console.log(returenedCount);

// console.log(animal);
// for(e of animal) console.log(e);

// OUTPUT: 
// 5
// [ 'pigs', 'goats', 'sheep', 'dog', 'cow' ]


// 2 unshift (push at front) ( it reaters the new length of the array )

// const count = animal.unshift('cat');
// console.log(count);
// console.log(animal);

// OUTPUT: 
// 6
// [ 'cat', 'pigs', 'goats', 'sheep', 'dog', 'cow' ]

// 3 pop ( return the poped element and changes the length of orignal array)

// const lastElemOfPop = animal.pop();
// console.log(lastElemOfPop); // cow
// console.log(animal); // [ 'cat', 'pigs', 'goats', 'sheep', 'dog' ]

// 4 shift (pop from front)
// const frontEleOfPop = animal.shift();
// console.log(frontEleOfPop); // cow
// console.log(animal); // ['pigs', 'goats', 'sheep', 'dog' ]

// ****************************CRUD*********************************

// 4  SPLICE METHOD ()

// its adds and remove elements from the array
// it changes orignal array
// it returns empty array or array of deleted elements

// const months = ['Jan','march','April','June','July'];
// console.log(months.length); // 5

// add Dec to end of array. 
// SYNTEX: array.splice( poisition, detelete element[0/1], 'String' )
// const newMonth = months.splice(5,0,'Dec');
// const newMonth = months.splice(months.length,0,'Dec');
// console.log(newMonth); // []
// console.log(months); // [ 'Jan', 'march', 'April', 'June', 'July', 'Dec' ]
// console.log(months.length); // 6

// Updatae 'march' to 'March: -

// const isInclude = months.includes('march');
// console.log(isInclude);
// const indexOfMonth = months.indexOf('march');
// console.log(indexOfMonth);
// // const UpdateMonths = months.splice(1,1,'March');
// const UpdateMonths = months.splice(indexOfMonth,1,'March');
// console.log(UpdateMonths); // ['march']
// console.log(months); // [ 'Jan', 'March', 'April', 'June', 'July', 'Dec' ]

// delete 'June' from an array

// const indexOfMonthToDelete = months.indexOf('June');

// if(indexOfMonthToDelete != -1){
//     const deletedMonth = months.splice(3,1);
//     console.log(deletedMonth);
// }

// console.log(deletedMonth); // deletedMonthis not accessable out of scope
// console.log(months);

// OUTPUT: 
// [ 'June' ]
// [ 'Jan', 'march', 'April', 'July' ]


// delete all the element after 2nd element

// const indexOfSecEle = months.indexOf('April');

// if( indexOfSecEle != -1){
//     const deletedRest = months.splice(indexOfSecEle,Infinity);
//     console.log(deletedRest);
// }
// console.log(months);
// OUTPUT: 
// deletedRest -->  [ 'April', 'June', 'July' ]
// months --> [ 'Jan', 'march' ]

// let myArray = ['apple', 'banana', 'orange', 'grape'];

// // Remove 2 elements from the end
// myArray.splice(-2);

// console.log(myArray); // Output: ['apple', 'banana']


/****************************************************************************/

//                             Map()

// Array.prototype.map()

// let newArray = arr.map(callback(currentValue[,index[, array]])) {
    // return element from newArray after executing somthing
// }[, thisArg]);

// Returns a new array contaning the reesult of calling a 
// function on element in this array
// do not change in orignal array

// it is channable

// const arr1 = [1,4,9,16,25];

// let newArr = arr1.map((e,index,arr1)=>{
//     return e > 9;
// })

// console.log(newArr); // [ false, false, false, true, true ]
// console.log(arr1); // [ 1, 4, 9, 16, 25 ]


// const newValArray = arr1.map((curentElementValue, currentIndex, currentPassedArray)=>{
//     return `index: ${currentIndex} and it's value: ${curentElementValue} of passed array: [ ${currentPassedArray} ] `
// });

// console.log(newValArray);

// OUTPUT: -
// [
    // "index: 0 and it's value: 1 of passed array: [ 1,4,9,16,25 ] ",
    // "index: 1 and it's value: 4 of passed array: [ 1,4,9,16,25 ] ",
    // "index: 2 and it's value: 9 of passed array: [ 1,4,9,16,25 ] ",
    // "index: 3 and it's value: 16 of passed array: [ 1,4,9,16,25 ] ",
    // "index: 4 and it's value: 25 of passed array: [ 1,4,9,16,25 ] "
// ]
    

// find the square root of the each element in an array:-

// let arr = [25,36,49,64,81];

// let squaredArr = arr.map(e => e * e); // [ 625, 1296, 2401, 4096, 6561 ]
// let squaredRootArr = arr.map(e => Math.sqrt(e));

// console.log(squaredRootArr); // [ 5, 6, 7, 8, 9 ]

// multiply each element by 2 and return only those element which are greater then 10

// let arr = [2,3,4,6,8];

// let newArr = arr.map(e => e * 2).filter(e => (e > 10));
// ALSO :- let newArr = arr.map(e => e * 2).filter(e => (e > 10)).reduce((accumulator, currentElement) => accumulator += currentElement);

// console.log(newArr); // [ 12, 16 ]


/************************** reduce()   ************************/

// its is used to flaten an multi dimentional array into one dimentional array

// The reduce() method executes a reducer function ( that you provide ) on each element of the array, resulting in single output value

// it take four arguments: 

// Accumulator
// current value
// current Index
// source array


// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, currentElement, currentIndex, sourceArray) => {
//     return accumulator += currentElement;
// },5 ) // 13 + 5
// let sum = arr.reduce((accumulator, currentElement) => accumulator += currentElement,5)

// console.log(sum);
