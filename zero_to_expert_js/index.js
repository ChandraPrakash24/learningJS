//****************************** VALUES AND VARIABLES *************************************

// Value: smallest unit in js
// ex:

// console.log('ram'); // ram is a value
// console.log(24); // 24 is a value

// variable: it is a container to store data
// ex:

// let fname = 'chandraprakash';
// let lname = 'ghritlahare';

// console.log(fname + " " + lname);

//****************************** DATA TYPES *************************************

// reference error is for variables

// 7 Primitive data type

// 1 Numbers: floating point number used for decimal and numbers
// 2 String: to store text
// 3 Boolean: to store true or false
// 4 Undefined
// 5 Null
// 6 Symbols
// 7 BigInt

// console.log(true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof 12.1);
// console.log(typeof "12.1");
// console.log(typeof "12.1" + 2);
// console.log(typeof "12.1" + "2");
// console.log(typeof 12.1 + "2");
// true
// undefined
// object
// object
// number
// string
// string2
// string2
// number2

// Operator precident: () >> maths

//****************************** CODING CHALLENGE ONE *************************************

// const marksMass = 78, jhonsMass = 95, marksHeight = 1.69, jhonsHeight = 1.88;

// const marksBMI = marksMass / (marksHeight ** 2);
// const jhonsBMI = jhonsMass / (jhonsHeight ** 2);

// console.log(marksBMI, jhonsBMI); // 27.309968138370508 26.87867813490267

// console.log(marksBMI > jhonsBMI); // true
// console.log(marksBMI - 5 > jhonsBMI); // false

//*******************************************************************

/***
 * 
 * Challenge: Write a program that converts a temperature given in Fahrenheit to Celsius.
 * 
    Example Input/Output:
    Input: Temperature in Fahrenheit = 98.6
    Output: Temperature in Celsius = 37
 * 
*/

// const tempInF = 98.6;
// const faraToCelsius = (tempInF - 32) * (5/9);
// console.log(faraToCelsius);

// console.log((5 + 3) * 2);
// console.log(5 + 3 * 2);

// Fun Challenge: Create a program that asks the user for their name and age, then prints a message greeting them and telling them how old they will be in 10 years.

// let personName = "abc", age = 22;

// console.log("Hi " + personName + " you will be " + (age+10) + " after 10 years from now");


// string literals:
// console.log(`Hi ${personName} you will be ${age+10} after 10 years from now`);

//***************************  IF ELSE   ********************************/


// let age = 18;
// let isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log(`driving licence approved`);
// }else{
//     console.log(`driving licence rejected wait another ${18 - age} years`);
// }



// let birthYear = 2015;

// let centuary;
// if(birthYear <= 2000){
//     centuary = 20;
// }else{
//     centuary = 21;
// }
// console.log(centuary === 20 ? centuary + 's an era of milineols' : `${centuary}st an era of gen z`);

//****************************** CODING CHALLENGE ONE *************************************

// const marksMass = 78, jhonsMass = 95, marksHeight = 1.69, jhonsHeight = 1.88;

// const marksBMI = marksMass / (marksHeight ** 2);
// const jhonsBMI = jhonsMass / (jhonsHeight ** 2);

// console.log(marksBMI, jhonsBMI); // 27.309968138370508 26.87867813490267

// if(marksBMI > jhonsBMI){
//     console.log(`Marks has higher BMI then jhon which is ${marksBMI}
//     his body mass is : ${marksMass}kg
//     his Height is : ${marksHeight}m`);
// }else{
//     console.log(`
//     Jhon has higher BMI then marks which is ${jhonsBMI}
//     his body mass is : ${jhonsMass}kg
//     his Height is : ${jhonsHeight}m`);
// }

//*******************************************************************

//******************** TYPE CONVERSION (by us) and TYPE COERCION (by js) *********************

// let stringNum = "123";
// console.log(stringNum + 18); // 12318
// console.log(Number(stringNum) + 18); // 141


// console.log(Number("name") + 18, "this"); // NaN this


// console.log(String(24), 'Num to String');

// type coersion
// we have already seen it
// console.log("I am " + 22 + " years old."); // it a + operator is used between string and number the number is automatically get converted into string also same for tamplate literals

// it js not provide implicit type coersion then we have to do like this:

// console.log("I am " + String(22) + " years old."); //  (also in other programming language) 

// console.log('23' - '10' - 3);

// guss the output:

// let n = '1' + 1; // '11'
// n = n - 1;
// console.log(n);

// 10


// console.log(1+2+3+'4'); // 64
// console.log(1+2-3-'4'); // -4
// console.log(1-2-3-'4'); // -8
// console.log('4'+1-2-3); // 36


// In JavaScript, when you use the + operator with a string and a number, JavaScript performs type coercion, which means it converts the number to a string and then concatenates the strings.

// Let's break down the expression '4' + 1 - 2 - 3 step by step:

// '4' + 1 - This concatenates the string '4' with the number 1, resulting in the string '41'.
// '41' - 2 - JavaScript tries to subtract 2 from '41'. Since subtraction isn't meaningful for strings, JavaScript tries to convert '41' to a number. Since it starts with a valid number ('4'), it converts '41' to the number 41.
// 41 - 3 - Now it's a simple subtraction, 41 - 3 equals 38.
// So, '4' + 1 - 2 - 3 actually evaluates to 38, not 36. Could you clarify the discrepancy you mentioned?

// console.log('10'-'4'-'3'-2+'5'); // 15

// Let's break down the expression '10' - '4' - '3' - 2 + '5' step by step:

// '10' - '4' - JavaScript tries to subtract '4' from '10'. Since both operands are strings, JavaScript converts them to numbers. So '10' - '4' equals 6.
// 6 - '3' - Again, JavaScript converts '3' to a number, resulting in 6 - 3 which equals 3.
// 3 - 2 - Simple subtraction yields 1.
// 1 + '5' - Since one operand is a string ('5'), JavaScript performs concatenation rather than addition. So 1 + '5' equals '15'.

// console.log('10'-'4'-'3'+2+'5'); // 55


// TRUTHY AND FALSY (when converted to boolean)

// 5 falsy value are:

// console.log(typeof 0); // number
// console.log(Boolean(0)); // false (only when converted) [1]
// console.log(typeof Boolean(0)); // boolean
// console.log(Boolean('')); //false [2]
// console.log(Boolean(NaN)); //false [3]
// console.log(Boolean(undefined)); //false [4]
// console.log(Boolean(null)); //false [5]

// guess the output

// console.log(Boolean(false), 'this'); //false
// console.log(Boolean()); //false



// then every thing is truthy

// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean(-1.0));
// console.log(Boolean(-1.01));
// console.log(Boolean(1.01));
// console.log(Boolean(1.0));
// console.log(Boolean('abc'));
// console.log(Boolean({}));
// console.log(Boolean([]));
// console.log(Boolean(1+'a'));


// truthy and falsy are used as a condition in conditional statement


// let see how type coersion work in if else

// let money = 0;
// let money = "anything"+2;
// if(money) { // typr coersion is happening here
//     console.log("You have money");
// }else{
//     console.log("You get some money");
// }


///**************************** EQUALITY OPERATOR ( == vs ===)  ****************************/


// let age = 18;
// if(age === 18){
//     console.log("Eligable to vote");
// }else{
//     console.log("Nort eligable");
// }

// console.log(18 === 18); // true
// console.log("18" === 18); // false
// console.log("18" == 18); // true


/******************  PROMPT    *********************/

// let favNum = prompt("Enter youre fav number");
// console.log(typeof favNum); //string
// console.log(favNum);


/******************  BOOLIAN LOGIC and LOGICAL OPERATOR    *********************/

// let a = false, b = true;

// we can also store this logical operation value to the variable like

// let output = !a && b;
// console.log(output);


/*********************** CODING CHALLENGE **************************/

let dolphinsScore1 = 96;
let dolphinsScore2 = 108;
let dolphinsScore3 = 89;

let koalaScore1 = 88;
let koalaScore2 = 91;
let koalaScore3 = 89;

let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

let koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

console.log(`Average score of the team Dolphin: ${dolphinsAverageScore}
Average score of the team Koala: ${koalaAverageScore}`);

if (dolphinsAverageScore === koalaAverageScore) {
    console.log(`ITS A DRAW`);
} else if (dolphinsAverageScore >= koalaAverageScore) {
    console.log(`DOLPHINS WINS`);
} else {
    console.log(`KOALA WINS`);
}
