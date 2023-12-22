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

