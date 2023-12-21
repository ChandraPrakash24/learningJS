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
let a  = 12;
let b  = 15;
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

console.log(num1 == num2);
// OUT:
// number
// string
// true

// console.log(num1 === num2); // false
