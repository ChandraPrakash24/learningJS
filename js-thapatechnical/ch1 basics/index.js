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

// flatten the 2d array using reduce

// let twoDimArray = 
// [
//     ['zone_1','zone_2'],
//     ['zone_3','zone_4'],
//     ['zone_5','zone_6'],
//     ['zone_7','zone_8']
// ];

// let oneDimArray = twoDimArray.reduce((acc, elem) => {
//      return acc.concat(elem);
// });
// console.log(oneDimArray);
// OUTPUT: 
// [
//     'zone_1', 'zone_2',
//     'zone_3', 'zone_4',
//     'zone_5', 'zone_6',
//     'zone_7', 'zone_8'
// ]

// Creating New Data Structures:
// reduce can be used to create new data structures based on the elements of an array. For example, transforming an array of objects into an object with key-value pairs.

// const people = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];

// // Creating an object with id as keys and names as values
// const idNameMap = people.reduce(function(accumulator, person) {
//     accumulator[person.id] = person.name;
//     return accumulator;
// }, {});

// console.log(idNameMap);
// { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }


/******************************** STRINGS ****************************************/

// A javascript string is zero or more character written inside quotes.
// js string is used to storing and manuplating text.
// you can use single or double quotes
// STring can be created as primitives.
// from string literals , or as objects, using String() constructor.


// let nameOfMe = 'Chanadra Prakash';
// let collName = "IPS'Acad"; OR 'IPS"Acad';

// let naam = new String("cpgl");

// console.log(nameOfMe); // Chanadra Prakash
// console.log(collName); // IPS'Acad
// console.log(naam); // [String: 'cpgl']

// LENGTH : - ( it also count white spaces)
// console.log(nameOfMe.length); // 16


                    // 1 Back slash spacial character
                    
// \'
// \"
// \\

// console.log('hsd\'h\'fh\"d\"s\\f'); // hsd'h'fh"d"s\f


                    // 2 Finding a String in a String
                    
// index start with 0
                    
// .indexOf():- It is a case Senstative
// returns the first occurence index

// let bioData = 'i am a computer programer code on computer';

// let index = bioData.indexOf('computer');
// let index = bioData.indexOf('computer', 8); // start searching after index 7 // 34
// let index = bioData.indexOf('Computer'); // - 1 due to case sensative
// console.log(index); // 7
// console.log(bioData[index]); // c

// .lastIndexOf():-

// let lastIndex = bioData.lastIndexOf("computer"); // 34
// let lastIndex = bioData.lastIndexOf("on"); // 31
// let lastIndex = bioData.lastIndexOf("on",5); // -1 serach direction <-----5__'on'
// let lastIndex = bioData.lastIndexOf("on",34); // 31 serach direction <------'on'--34
// console.log(lastIndex);


                    // 3 Searching for a String in a String
                    
                    
// let bioData = 'i am a computer programer code on computer';

// let searchedData = bioData.search('computer'); // no 2nd argoument also case sensative
// console.log(searchedData);


                    // 4 Extracting Strings Part

// There are 3 methods for extracting a part of string:

// slice(start, end)
// substring(start, end)
// substr(start, length)


// 1 slice() method: it returns the extracted part in the new string

// let str = 'Apple, Kiwi, Bannana';
            //    7  10  

// let slicedStr = str.slice(8,10); // iw
// let slicedStr = str.slice(7,11); // Kiwi ---> (start, end+1)
// let slicedStr = str.slice(12); // Kiwi ---> (start, .....)
// console.log(str.slice(-7)); // Bannana
// console.log(str.slice(543)); // ""
// console.log(slicedStr);


// let str = 'Apple, Kiwi, Bannana';

// Disly only 280 char of string like twitter

// let myTweet = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam architecto magni? Magnam earum laboriosam reprehenderit natus excepturi itaque ab perferendis sint facere corrupti enim fugit consequatur, dicta facilis, fugiat error modi sunt ullam porro quidem ea mollitia tempora, soluta quas. Eaque nemo assumenda recusandae repudiandae asperiores velit! Reprehenderit architecto est sit impedit sed nesciunt, deserunt minus rerum eveniet iusto cum at commodi facere dolores, nobis quas. Quaerat, facere debitis obcaecati, quod unde praesentium asperiores sit iure quisquam commodi, cumque maiores.";

// console.log('my tweet : ' + myTweet.length);


// let only280 = myTweet.slice(0,280);
// console.log(only280); // it returns array [ '....................' ]
// console.log(only280.length); // it returns array [ '....................' ]



// 2 substring() method: it take two parameters start and end ( end param not neccessory )
// it can not accepts negative indexes 

// let str = 'Apple, Kiwi, Bannana';
// let res = str.substring(0,4); // Appl
// let res = str.substring(0,5); // Apple
// console.log(res);

// if we give negative value then the characters are counted from 0th position
// console.log(str.substring(8,-2)); // Apple K ( it also count white spaces ' Apple_K ' )

// substr(): - the only difference is tha the second parametter specifies the length of the extracted part

// let res = str.substr(0,4); // Appl
// let res = str.substr(0,5); // Apple
// let res = str.substr(7,-2); // ""
// let res = str.substr(-7); // Bannana ( extrect data from back )
// console.log(res);




// 3 .replace() : - 

// syntex:- str.replace(searchFor, replaceWith)

// let myBio = 'I am chandra prakash chandra';

// points to remember:
// 1: the rplace() method does not change the string it is colled on. it returns a new string
// 2: by default it replaces on the first match
// 3: it is case sensitive

// let myNewBio = myBio.replace('chandra','ghrit lahare');
// console.log(myNewBio); // I am ghrit lahare prakash chandra

// let myNewBio = myBio.replace('chandra','Chandra');
// console.log(myNewBio); // I am Chandra prakash chandra
// console.log('orignal str: ' + myBio);

// it is case sensative
// let myNewBio = myBio.replace('Chandra','CHANDRA');
// console.log('changed str: ' + myNewBio); // I am chandra prakash chandra
// console.log('orignal str: ' + myBio);
// OUT:-
// changed str: I am chandra prakash chandra
// orignal str: I am chandra prakash chandra


// it does not work:- ( work with regex )
//let myNewBio = myBio.replaceAll('chandra','Chandra');

//--------------------------------------------------------------


// Extracting String character

// here 3 methods to do so:

// 1: charAt(position)
// 2: charCodeAt(position)
// 3: Property access []


// 1: charAt(position) => it returns the character at specified index (position) in a string

// let str = 'HELLO WORLD';

// console.log(str.charAt(0)); // H 
// console.log(str.charAt(78)); // _ (white space beacouse string index out of bound)
// console.log(str.charAt(1)); // E
// console.log(str.charAt(5)); // _ (white space)
// console.log(str.charAt(str.length - 1)); // D

// 2: charCodeAt(position) => it returns the unicode of the charcter at specific index in a string:

// The methode returns a UTF-16 code
// an integer between (0 and 65535)

// console.log(str.charCodeAt(0)); // 72   (H)
// console.log(str.charCodeAt(78)); // NaN   (index out of bound)
// console.log(str.charCodeAt(1)); // 69   (E)
// console.log(str.charCodeAt(5)); // 32   (white space)
// console.log(str.charCodeAt(str.length - 1)); // 68   (D)


// 3: Property access [] => ES 5 allows property access on strings
// acess string same as just like an array

// console.log(str[0]); // H
// console.log(str[1]); // E
// console.log(str[-1]); // undefined
// console.log(str[61]); // undefined
// console.log(str[str.length - 1]); // D 


//======================================================================

// OTHER USEFUL METHODS :-

// let myName = 'chandra prakash';
// console.log(myName.toLocaleUpperCase()); // CHANDRA PRAKASH
// console.log(myName.toLocaleLowerCase()); // chandra prakash

// let fname = 'chandra'
// let lname = 'prakash'

// console.log(fname + lname); // chandraprakash
// console.log(fname + ' ' + lname); // chandra prakash
// console.log(`${fname} ${lname}`); // chandra prakash
// console.log(fname.concat(lname)); // chandraprakash
// console.log(fname.concat(' ',lname)); // chandra prakash


// trim (trime method removes white spaces from start and end of the string)

// let str = '      Hello world              ';

// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());
// out:-
// Hello world
//       Hello world
// Hello world


// let str = '      Hello           world              ';

// console.log(str.trim());
// console.log(str.trimEnd());
// console.log(str.trimStart());
// out:-
// Hello           world
//       Hello           world
// Hello           world


// SPLIT:-

// converting string into array:-


// let txt = 'a,b,c,d,e'; // string
// console.log(txt.split(',')); // (Split on commas) [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(txt.split(' ')); // (Split on spaces) [ 'a,b,c,d,e' ] (if we add two spaces then three array element)
// console.log(txt.split('|')); // (Split on pipes) [ 'a,b,c,d,e' ] (if we add three pipes then four array element)


// *******************************************************************

//               DATE AND TIME OBJECTS IN JS



// JS Dtae objects reperesents a single moment in time in a platform-indipendent format. Date object contain a number that represents milliseconds since 1st January 1970 UTC.

// Creating Date Objrcts:-
// ther are 4 ways:-

// 1: new Date()
// 2: new Date(year, month, day, hours, minuts, seconds, milliseconds) (it tkae max 7 argument and minimum is two args (year,months) wher month is compoulsery )
// 3: new Date(milliseconds) (we can not avoid month section)
// 4: new Date(date string)


// 1: new Date():-
// Date objects are created with the new Date() constructor.

// let currDate = new Date();
// console.log(currDate); // 2024-01-02T11:47:17.823Z

// console.log(new Date());
// console.log(new Date().toDateString());
// console.log(new Date().toISOString());
// console.log(new Date().toJSON());
// console.log(new Date().toLocaleDateString());
// console.log(new Date().toLocaleString()); // imp
// console.log(new Date().toLocaleTimeString());
// console.log(new Date().toString()); // imp
// console.log(new Date().toTimeString());
// console.log(new Date().toUTCString());

// out:-
// Tue Jan 02 2024
// 2024-01-02T12:03:35.947Z
// 2024-01-02T12:03:35.947Z
// 2/1/2024
// 2/1/2024, 5:33:35 pm
// 5:33:35 pm
// Tue Jan 02 2024 17:33:35 GMT+0530 (India Standard Time)
// 17:33:35 GMT+0530 (India Standard Time)
// Tue, 02 Jan 2024 12:03:35 GMT

// 2:
// console.log(Date.now()); // it returns ms since 1st jan 1970 --> 1704197160988


// 3:
//new Date(year,month, ....) [it is used to set time like in any party website]
//(year, month, day, hours, minuts, seconds, milliseconds)
//it tkae max 7 argument and minimum is two args (year,months) wher month is compoulsery
// Note: JS count month from (Jan) 0 to 11 (Dec)

// let d = new Date(2024,0,2,10,33,25,8);
// let d = new Date(2024,0); // minimum two args
// console.log(d); // 2024-01-02T05:03:25.008Z
// console.log(d.toString()); // Tue Jan 02 2024 10:33:25 GMT+0530 (India Standard Time)



// 4:
// new Date(dateString):-

// let d = new Date('January 2, 2024 11:13:34')
// console.log(d); // 2024-01-02T05:43:34.000Z
// console.log(d.toLocaleString()); // 2/1/2024, 11:13:34 am




//5:
// new Date(milliseconds):-
// let d = new Date(1704197160988); // get milliseconds from --> console.log(Date.now())
// console.log(d); // 2024-01-02T12:06:00.988Z
// console.log(d.toLocaleString()); // 2/1/2024, 5:36:00 pm

// let d = new Date(1704197160988 * 2); // get milliseconds from --> console.log(Date.now())
// console.log(d); // 2078-01-03T00:12:01.976Z
// console.log(d.toLocaleString()); // 2078-01-03T00:12:01.976Z

// let d = new Date(0); // get milliseconds from --> console.log(Date.now())
// console.log(d); // 1970-01-01T00:00:00.000Z
// console.log(d.toLocaleString()); // 1/1/1970, 5:30:00 am


// //     DATES METHODS:-


// const currDate = new Date();

// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getDate());
// console.log(currDate.getDay());
// console.log(currDate.getUTCDay());

// OUTPUT:-

// 2/1/2024, 6:24:03 pm
// 2024
// 0
// 18
// 24
// 2
// 2
// 2

// how to set individual date

// console.log(currDate.setFullYear(2024)); //1704200202809 in ms
// console.log(currDate.setFullYear(2024,0,2)); //1704200202809 in ms
// console.log(currDate.setMonth(0)); //1704200202809 in ms
// console.log(currDate.toLocaleString()); // 2/1/2024, 6:28:24 pm

//     TIMES METHODS:-


// const currTime = new Date();

// smae as above (get and set methods)


//********************************************************/ 

//                    JS MATH OBJECT

// The JS Math Object allows you to perform mathematical tasks on numbers

// console.log(Math.PI); // 3.141592653589793
// console.log(Math.floor(55.55)); // 55

// round to nearest intiger by half 5.6 --> 6 && 5.4 -->5
// console.log(Math.round(10.2565)); // 10
// console.log(Math.round(10.5565)); // 11

// console.log(Math.pow(2,3)); // 2^3 --> 8
// console.log(Math.pow(3,4)); // 3^4 --> 81


// console.log(Math.sqrt(25)); // 5
// console.log(Math.sqrt(81)); // 9
// console.log(Math.sqrt(66)); // 8.12403840463596



// convert -ve to +ve
// console.log(Math.abs(-55)); // 55
// console.log(Math.abs(-55.5)); // 55.5
// console.log(Math.abs(-955)); // 955
// console.log(4-6); // -2
// console.log(Math.abs(4-6)); // 2



// console.log(Math.ceil(4.45)); // 5
// console.log(Math.floor(4.4)); // 4
// console.log(Math.floor(99.1)); // 99
// console.log(Math.ceil(99.1)); // 100


// console.log(Math.min(0,150,30,20,4.4,-8,-200)); // -200
// console.log(Math.max(0,150,30,20,4.4,-8,-200)); // 150



// console.log(Math.random()); // 0.9902624420149353
// console.log(Math.random()*10); // 8.673350314341324
// console.log(Math.floor(Math.random()*10)); // 0 to 9



// truncate it only return initer part of number
// console.log(Math.trunc(4.6)); // 4 OR Math.floor()
// console.log(Math.trunc(-99)); // -99
// console.log(Math.trunc(-99.99)); // -99 
// console.log(Math.trunc(4.876986)); // 4


// practice:-

// if the argument is a positive number, Math.trunc() is equivalent to Math.floor(),
// otherwise Math.trunc() is equivalent to Math.ceil().


//*******************************************************/

//                     DOM IN JS

// 1: Window VS Document

// window is the global object to entire browser
// Document is the child object of Window Object


// window needs not to explicitly reffer (objects,methods and properties) for ex:- history or url, etc. code ex:- type window in browser console or window.location.href (for url)
// document needs to explicitly reffer (objects,methods and properties) ex:- document.get....

// window methods like setTimeout() , setInterval()
// document has all html elements for manipulation




////////////////////// 

// 2: DOM (Document object model) vs BOM (Browser object model)
//      |-> DOM has document
//      |-> BOM has navigator, screen , location, frame , histor, XML http request
//      |-> JS has Object , array, functions



// 3: DOM Nevagation


// in console
// document (to get whole document)
// document.documentEliment (to get root element i.e., <html>)
// document.head 
// document.body 
// document.body.childNodes (to know all the child nodes it also includes tab, enters and whiteSpaces) 
// document.body.children (to know all the child nodes) 
// document.body.children.length (to know the lenght child nodes) 
// document.body.hasChildNodes() (to know that any tag or div or node has child node or not it returns bool value) 



// how to Find child in DOM tree
// firstChild (it get text and tab, whitespaces and enter) vs firstElementChild (only nodes and it is chanable or nested-able)
// cons childOne = document.body.firstElementChild.firstElementChild
// childOne.style.color = "green"

// lastChild vs lastElementChild


// cons childTwo = document.querySelector('.child-two')
// childTwo.style.color = "yellow"


// document.body.parentNode (i.e., <html>)


// document.body.previousElementSibling (i.e., <head>)




// 4: search the element and its refferences

// by searching:
// document.getElementById('headng').innerHTML = 'welcome to new heading';

// by refference:
// const heading = document.getElementById('headng');
// heading.innerHTML = 'welcome to new heading';


// console.log( document.getElementsByClassName('paragraph'));
// console.log( document.getElementsByTagName('p')); // for paragraph tag


// document.getElementsByName('email'); // nameTag of input under form validation


// it changes first matching parameter
// doument.querySelector('#heading').innerHTML = 'changed heading';
// doument.querySelector('.heading').innerHTML = 'changed heading';



// it returns only all matching value do not use to change any content
// doument.querySelectorAll('#heading').innerHTML = 'changed heading';
// doument.querySelectorAll('.heading').innerHTML = 'changed heading';


//****************************************************/

//                    EVENTS IN JS


// DEFINATION

// HTML events are the thing that happen to html elemnts
// when jasascript is used in html pages, JavaScript care react on this events


// HTML Events: (html event can be somthing a browser does or user does)


//here is an example of html events:

// an html web page has finish loding
// an html input field was changes
// an html button was clicked
// often when an event happen you want to do somthing

// JS lets you execute code when an event are detected


// html allows event handler attributes, with javascript code , to be added to html element



// Section 1: Four ways of writting event in JS

// 1: inline events like alerts()
// 2: by calling a function
// 3: using inline evnts ( HTML onClick="" prpoerty and element.onclick )
// 4: using even Listeners ( addEventListener and IE's attachEvenet )

// CDDE EX:-

// 1: inline events like alerts()

// <a href="#" onclick="alert('awesome')" > It's a simple Inline alert() </a>


// 2: by calling a function

// <a href="#" onclick="callingFunction()" > by calling a function </a>
// <script>
//      const callingFunction = () => {
//          alert('alert from function');
//      }   
// </script>

// 3: using inline events ( HTML onClick="" prpoerty and element.onclick ) OVERWRITEABLE

// <a href="#" id="thirdWay" > by calling a function </a>
// <script>
//      const temp = document.getElementById('thirdWay');
//      temp.onclick = function() {
//          alert('alert by using inline events');
//      }   
// </script>


// 4: using even Listeners ( addEventListener and IE's attachEvenet )

// <a href="#" id="fourthWay" > by calling a function </a>
// <script>
//      const temp = document.getElementById('fourthWay');
//      temp.addEventListener('click', () => {
//          alert('alert by using addEventListener and IE's attachEvenet');
//           }   
//      );
// </script>


// Section 2: What is event Object?

// Event object is the parent object of the event object
// for ex:
// mouseEvent, focusEvent, keyboardEven, etc.

// <a href="#" id="eventObject" > Event Listener </a>
// <script>
//      const temp = document.getElementById('eventObject');
// const ceckEvent = () =>{
//      console.log(event); // whole Event Object
//      console.log(event.target); // targeted element like button
//      console.log(event.type); // type of event like click, hover, etc.
//   }
//      temp.addEventListener('click', checkEvent => {
//          alert('alert by using addEventListener and IE's attachEvenet');
//           }   
//      );
// </script>


// Section 3: Mouce Event in JS


// <p id="myP" onmousedown="mouseDown()" onmouseup="mouseUp()">
//    click to this text.
// </p>
// <script>
//  mouse Down is click and Hold
//  mouse Up is relising mouse click
//
//  function mouseDown(){
//        document.getElementById('myP').style.color="green";
//    }
//    function mouseUp(){
//        document.getElementById('myP').style.color="white";
//                   OR
//        document.getElementById('myP').style.color="white";
//    }
// </script>

// another mathod: mouseenetr and mouseleave

// Section 4: Keyboard Events in JS

// <div>
//  <p> A function is trigger when user presses any key in input field </p>
//  <br>
//  <input type="text" onkeypress="ketPress()" onkeydown="keyDown()" onkeyup="keyUp()">
//  <br>
//  <p id="keys"></p>
// </div>
// 
// <script>
//  cons keyPress = () => {
//    document.getElementById('keys').innerHTML = `you press ${event.key} and it's key code is ${event.code}`; 
//  }
//
//  cons keyDown = () => {
//    document.getElementById('keys').innerHTML = `key is down`; 
//  }
//
//  cons keyUp = () => {
//    document.getElementById('keys').innerHTML = `key is Up`; 
//  }
// 
// </script>


// Section 5: Input Events in JS

// The on changed event occure when the when the value of an elemnt has been changed

// for radiobuttons or ckeckbox, the onchange event occure when the check state has been changed.


// <div>
//  <lable for=""> Youre Name: </lable>
//  <input type="text" name="" id="ice">
//  <br>
//  <lable> Choose an icecream flavour
//      <select id="iceCreams" name="iceCreams" onchange="selectItems()">
//         <option value="">Select One ....</option>
//         <option value="choclate">choclate</option>
//         <option value="sardine">sardine</option>
//         <option value="vanilla">vanilla</option>
//      </select>
//  </lable>
//  <br>
//  <div id="result"></div>
// </div>
// 
// <script>
//  const selectItems = () => {    
//      const inputChange = document.getElementById("ice").value;
//      const iceCreams = document.getElementById("iceCreams").value;
//      const result = document.getElementById("result");
// 
//      result.innerHTML = `Mr. ${inputChange} has selected ${iceCreams} ice cream flavour.`;
//      console.log(`${inputChange} and ${iceCreams}`);
//  }
//                  OR above same using addEventListionar
//
//      const iceCreams = document.getElementById("iceCreams");
//         iceCreams.addEventListener('change', () => {
//         const inputChange = document.getElementById("ice").value;
//         const iceCreams = document.getElementById("iceCreams").value;
//         const result = document.getElementById("result");
// 
//         result.innerHTML = `Mr. ${inputChange} has selected ${iceCreams} ice cream flavour.`;
//         console.log(`${inputChange} and ${iceCreams}`);
//      }    
//       );
//
// </script>


// QUES: diff b/t onClick and Event listionar (ex above)?
// ANS: onClick is OVERWRITABLE where as EventListener is not overwritable when calling on same event with same function name


//             TIME BASED EVENTS IN JS

// the window object alow us to execute any event in an specific time interval and this is called timing based events or timing events

// there are two key methods:

// a: ex: giveaway
// setTimeout(function,milliseconds);
// execute a function after waiting a specific millisecondes

// b: ex: guess countdown
// setInterval(function,milliseconds);
// same as setTimeout(), but repeat thje execution of the functin contionously

// 1: setTimeout(()={},ms);

// <div>
//      <p>Want to know my Name</p>
//      <p id="showMyName"></p>
//      <br>
//      <button id="btn"> Click here </button>
// </div>

// SCRIPT:

// const myName = document.getElementById('showMyname');
// const btn = document.querySelector('#btn');

// const showMyName = () => {
//     myName.innerHTML = "Loading ....";
//     setTimeout(()=>{ myName.innerHTML = "cpgl"; },2000);
// }

// btn.addEventListener('click', showMyName);



// 2: clearTimeout(setTimeoutRefferenceVariable);

// it is used to stome the execution of setTimeout() within the duretion
// where refference variable of settime out is must
// like: const myVar = setTimeout(()=>{},1000); --> now that myVar is passed into clearTimeout(myVar);   

// <div>
//  <p>Click "Try it". Wait 3 seconds. The page will alert "Hello".</p>
//  <p>Click "Stop" to prevent the first function to execute.</p>
//  <p>(You must click "Stop" before the 2 seconds are up.)</p>
//  <button onclick="myVar = setTimeout(myFunction, 2000)">Try it</button>
//  <button onclick="clearTimeout(myVar)">Stop it</button>
// </div>

//script:

// function myFunction(){
//     alert("hello");
// }






// 3: setInterval(()=>{},ms); and clearInterval(setIntervalRefferenceVariable);

// <div class="main-div"> 
//     <div> 
//        <p>can you stop me when I reach at 5  </p>
//        <br> 
//        <button id="btn"> Click here </button> 
//        <button id="btn2"> Stop </button> 
//     </div> 
// </div> 


// <script> 
    // const displayNum = document.querySelector('p');
    // const triggerBtn = document.querySelector('#btn');
    // const stopBtn = document.querySelector('#btn2');
    // let num=0;
    // let setIntervalReff;

    // function displayCount(){
    //     displayNum.innerHTML= "Loading ...."
        
    //     setIntervalReff = setInterval(()=>{
    //         displayNum.innerHTML= `${num}`
    //         num++;
    //     },1000); 
    // }

    // triggerBtn.addEventListener('click',displayCount);

    // stopBtn.addEventListener('click',()=>{
    //     clearInterval(setIntervalReff);
    // });
// </script> 


// QUES: diff bw setTimeout() and setInterval()?
// ANS: setTimeout cal only one time and setInterval calls continously