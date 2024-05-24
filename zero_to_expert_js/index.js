'use strict';

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

// let dolphinsScore1 = 96;
// let dolphinsScore2 = 108;
// let dolphinsScore3 = 89;

// let koalaScore1 = 88;
// let koalaScore2 = 91;
// let koalaScore3 = 110;

// let dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;

// let koalaAverageScore = (koalaScore1 + koalaScore2 + koalaScore3) / 3;

// console.log(`Average score of the team Dolphin: ${dolphinsAverageScore}
// Average score of the team Koala: ${koalaAverageScore}`);

// if (dolphinsAverageScore === koalaAverageScore) {
//     console.log(`ITS A DRAW`);
// } else if (dolphinsAverageScore >= koalaAverageScore) {
//     console.log(`DOLPHINS WINS`);
// } else {
//     console.log(`KOALA WINS`);
// }


/********************************** SWITCH STATEMENT ***********************************/


// const day = 'sunday';

// switch(day){
//     case 'monday': // day === 'monday' (strict check)
//         console.log('its a Monday');
//         console.log('multi line can be executed in one switch case');
//         break;
//     case 'tuesday':
//         console.log('its a tuesday');
//         break;
//     case 'wednesday':
//     case 'thrusday':
//     case 'friday':
//         if(day === 'wednesday') console.log('its a wednesday');
//         else if(day === 'thrusday') console.log('its a thrusday');
//         else console.log('its a friday');
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log('its a weeknd');
//         break;
//     default:
//         console.log('Enter valid day');
// }

// same above code using if else logic

// let day = 'sunday';

// if(day === 'monday'){
//     console.log('its a monday');
//     console.log('Multi line of code');
// }
// else if(day === 'tuesday') console.log('its a tuesday');
// else if(day === 'wednesday' || day === 'thrusday' || day === 'friday'){
//     if(day === 'wednesday') console.log('its a wednesday');
//     else if (day === 'thrusday') console.log('its a thrusday');
//     else console.log('its friday');
// }
// else if(day === 'saturday' || day === 'sunday') console.log('its a weeknd');
// else console.log('enetr valid day');


/********************* Statements and Expressions ******************************/

// data.forEach(element =>  console.log(element));

// here data.forEach(....); this is a statemnet tels what to do

// and element =>  console.log(element) this is a expression produces a value

/************************* Tarnery Operator(Conditionals) ****************************/

// 10 > 5 ? console.log("true") : console.log("false"); // true

// we use bove as :

// const age = 22;
// const isEligable = age >= 18 ? "vote" : "no vote"; // it just return
// console.log(isEligable);

//************************ CODING CHALLENEGE ************************/

// let billAmount = 40;

// let tipPer;
// billAmount >= 50 && billAmount <= 300 ? tipPer = 15 : tipPer = 20; 
//                OR
// let tipPer = billAmount >= 50 && billAmount <= 300 ? 15 : 20; 

// console.log((billAmount * tipPer)/100);

// console.log(`The bill was ${billAmount}, the tip was ${(billAmount * tipPer)/100}, and the total value ${billAmount + ((billAmount * tipPer)/100)}`);


/********************************* USE STRICT EXAMPLE ***********************************/

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriverLicence = true;
// if (hasDriversLicence) console.log('i can drive.');


// const intefcase = 'audio';
// const private = 24;


/**************************** FUNCTIONS *********************************/

// function logger() {
//     console.log('Logger function is called / invoked / execute / runned');
// }

// logger();
// console.log(logger); // [Function: logger]
// console.log(logger()); // undefined
// logger();
// logger();
// logger();
// logger();


// function fruidJuicer(fruit1, fruit2) {
//     console.log(`fruit 1 is ${fruit1}, fruit 2 is ${fruit2}`);
//     const juice = `here is your fruit juice of ${fruit1} and ${fruit2}`;
//     return juice;
// }

// fruidJuicer("apple","bannana"); // fruit 1 is apple, fruit 2 is bannana
// it just log this coz above function was colled which has log statement

// it did not print that 'juice'that we have make inside that function beacouse it was returned by the function which was stored by the coller at the place whre it was colled to do that we have to first store that result and then print it like below


// const getJuice = fruidJuicer("mango","orange"); 
// console.log(getJuice); // here is your fruit juice of mango and orange






// function fruitJuicer2(apple,bannana) { // parameter
//     return `here is youre juice of ${apple} apple and ${bannana} bannana`;
// }

// console.log(fruitJuicer2(4,6)); // argument // here is youre juice of 4 and 6 bannana
// const getJuiceNo = fruidJuicer2(2,2); // here is youre juice of 4 and 6 bannana
// console.log(getJuiceNo); // here is youre juice of 2 and 2 bannana

// FUN FACT : console.log(); is also a function (an built-in function) which take argument and print it

/**************************** Function decleration and Function Expression **********************************/

// function decleration
// const age1 = calcAge1(2001);

// function calcAge1(birthYear) {
//     return 2024 - birthYear;
// }


// function expression 
// const calcAge2 = function (birthYear) {
    //     return 2024 - birthYear;
    // }
    
    // this part is called Anynomous function
    // function (birthYear) {
        //     return 2024 - birthYear;
        // }
        
        // const age2 = calcAge2(2001);
        
// console.log(age1, age2);




/**************************** Arrow Function **********************************/

// const calcAge3 = birthYear => 2024 - birthYear;
//            OR
// const calcAge3 = (birthYear) => {
//     return 2024 - birthYear;
// }

// const age3 = calcAge3(2001);
// console.log(age3);
// console.log(calcAge3(2001));

// for multi parameter and multi line og code

// const retirementYear = (birthYear, firstName) => {
//     // const age = 2024 - birthYear;
//     const age = calcAge3(birthYear);
//     const retirementAge = 65 - age;
//     return `${firstName} will retire in ${retirementAge} years.`
// }

// console.log(retirementYear(2001,"cpgl"));
// console.log(`what a time you have spend and ${retirementYear(2001,"cpgl")} `);


/************************ coding challenege *************************/

// const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

// const avgDolphin = calcAverage(44,24,71);
// const avgKoalas = calcAverage(65,54,49);

// const checkWinner = function(dolphinAvg, koalaAvg){
//     console.log(dolphinAvg, koalaAvg, "yo");
    
//     if(dolphinAvg > koalaAvg * 2){
//         return `Dolphins wins (${dolphinAvg} vs ${koalaAvg * 2})`;
//     } else if (koalaAvg > dolphinAvg * 2){
//         return `Koala wins (${dolphinAvg * 2} vs ${koalaAvg})`;
//     } else {
//         return `it's a draw`;
//     }
// }



// console.log(checkWinner(calcAverage(44,24,71), calcAverage(65,54,49))); // draw
// console.log(checkWinner(calcAverage(85,54,41), calcAverage(23,34,47))); // draw
// console.log(checkWinner(calcAverage(85,84,96), calcAverage(23,34,47))); // Dolphins wins (88.33333333333333 vs 69.33333333333333)
// console.log(checkWinner(calcAverage(25,34,46), calcAverage(93,94,107)));
// Koala wins (70 vs 98)



// console.log(checkWinner(avgDolphin, avgKoalas));

// const result = checkWinner(avgDolphin,avgKoalas);
// console.log(result);


// all the functions are complete as stand alone function so we can also callthis function with randome values like:
// console.log(checkWinner(545, 111)); // Dolphi wins

/************************** ARRAYS ********************************/


// const friendsArray = ['ajju','bajju','yoyo']; // literal syntex
// console.log(friendsArray);

// console.log(typeof friendsArray); // object
// console.log(typeof friendsArray[0]); // string

// const numbersArr = new Array(2, 5, 56, 6);
// console.log(numbersArr); // object
// console.log(typeof numbersArr[2]); // numbers

// console.log(friendsArray.length); // .length --> property
// console.log(friendsArray[friendsArray.length - 1]);

// friendsArray[2] = "bobo";
// console.log(friendsArray);

// friendsArray = ['pam','param']; // not allowed
// TypeError: Assignment to constant variable.


// array just expect an expression as the position of its value which reduces to value ex friendsArray[friendsArray.length - 1] here "friendsArray.length - 1" is a expression which ereduces too value and also for array decleration ex below:
// const myDataArray = [/* any expression */, /* any expression */];

// const firstName = 'chandraprakash';
// const myDataArray = [firstName, 'ghritlahare', 2024-2001, friendsArray];

// console.log(myDataArray);

// // exercise
// const calcAge = birthYear => 2024 - birthYear;

// const years = [2001, 2007, 2012, 2015, 2020, 2021, 2023, 2024];

// calcAge(years); // well you can do operations with whole array at once you can pass an entire aerray but not do opertions at once like 2024 - (whole array) as currently we are doing
// also
// console.log(calcAge(years)); // NaN
// console.log(years + 10); // 2001,2007,2012,2015,2020,2021,2023,202410 (+ --> string --> "array" + "10" --> "array10")
// console.log(years - 10); // NaN

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3); // 23 17 0

// also we can do like this

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages); // [ 23, 17, 0 ]



// let myArray = [42, "Hello", true, undefined, null, Symbol("foo")];
// console.log(myArray[5]); // Symbol(foo)
// let myObject = { name: "John", age: 30 };
// // let myFunction = function() { console.log("Hello, World!"); };
// let myFunction = () => { console.log("Hello, World!"); };

// let myArrayCombined = [myObject, myFunction];

// console.log(myArrayCombined[1]()); //it loged undefined coz it not returning any thing
// myArrayCombined[1](); // it run the function (myFunction)


/***************** Arrays Methods ****************/

// Add elements
// let nameArr = ['bbbb','cccc','dddd'];

// const newLength = nameArr.push('eeee');
// console.log(newLength); // 4 --> push() method returns the new length of an array
// console.log(nameArr); // [ 'bbbb', 'cccc', 'dddd', 'eeee' ]

// add elemnt to the front of an array
// console.log(nameArr.unshift('aaaa')); // 5 --> unshift() method returns the new length of an array
// console.log(nameArr); // [ 'aaaa', 'bbbb', 'cccc', 'dddd', 'eeee' ]

// remove element (back)

// console.log(nameArr.pop()); // eeee --> it returns the elemen that has been poped
// console.log(nameArr); // [ 'aaaa', 'bbbb', 'cccc', 'dddd' ]

// remove from front
// console.log(nameArr.shift()); // aaaa --> it returns the elemen that has been poped from front of an array
// console.log(nameArr); // [ 'bbbb', 'cccc', 'dddd' ]

// Index of (strict check)
// it returns the index (zero based) of that element if found and -1 if not found

// nameArr.push(22);
// console.log(nameArr); // [ 'bbbb', 'cccc', 'dddd', 22 ]

// console.log(nameArr.indexOf('cccc')); // 1
// console.log(nameArr.indexOf('ccc')); // -1
// console.log(nameArr.indexOf(22)); // 3
// console.log(nameArr.indexOf("22")); // -1

// is Element include or not (strict check)
// it returns the bool value if include then true else false

// console.log(nameArr.includes('cccc')); // true
// console.log(nameArr.includes("ccc")); // false
// console.log(nameArr.includes(22)); // true
// console.log(nameArr.includes("22")); // false

// use case of includes:

// if(nameArr.includes('cccc')) console.log('youre friend cccc is here');
// else console.log('cccc is not here');


/************************ CODING CHALLENGE **************************/


// const calcTip = amount => amount >= 50 && amount <= 300 ? (amount * 15)/100 : (amount * 20)/100; 

// const billsArr = [125,555,44];

// const tipsArr = [calcTip(billsArr[0]), calcTip(billsArr[1]), calcTip(billsArr[billsArr.length -1]),];

// console.log(tipsArr);
// const totalAmountArr = [billsArr[0] + tipsArr[0], billsArr[1] + tipsArr[1], billsArr[2] + tipsArr[2],]

// console.log("total Amount is (bill + tip) : ", totalAmount);
// console.log(billsArr, tipsArr, totalAmountArr);
// [ 125, 555, 44 ] [ 18.75, 111, 8.8 ] [ 143.75, 666, 52.8 ]


/*******************************************************************/



/***************************** OBJECTS ******************************/

// in Array we can not reffer or give array's element a name, we just have to relay on there index values, to solve that problem object was introduced in object we can give nameToTheData : thenActualData it is also known as key : value pair, also order of elements does not matter in objects henece it is used for unstructured data where as arrays are used for structured data  

// example:

// let myArray = [
//     'chandraprakash',
//     'ghritlahare',
//     2024-2001,
//     'student',
//     // function(){console.log('jai shree ram');},
//     () => {console.log('jai shree ram');},
//     ['aaaa','bbbb','cccc','dddd']
// ];

// const myObj = {
//     firstName: 'chandraprakash',
//     lastName: 'ghritlahare',
//     age: 2024-2001,
//     job: 'student',
//     slogan: () => {console.log('jai shree ram');},
//     friends: ['aaaa','bbbb','cccc','dddd']
// }

//******** Retrive and Change data from Object *********/

// console.log(myObj);

// console.log(myObj.firstName); // . 'dot notation' --> dot is a operator
// console.log(myObj["lastName"]); // [] bracket notation (any expression can be, but under this brackets [....] only of string type) property name is put here as a string

// let experiment with Bracket notation expression

// const nameProperty = "Name";
// console.log(myObj["first" + nameProperty], myObj[`last${nameProperty}`]);
// here we tap to "Name" string of firstName <-- this and lastName <-- this of object property key


// it won't work with dot notation
// console.log(myObj."first" + nameProperty)

// were to use what?
// if the property name of the object is need to be computed before then we use [] notation (imp: string darta type)
// if we exactly know object propert name not like that somthing stored in any variable or any implisit naming, only exact name is required let see more example below

// let intrestedIn = prompt('What do you want to know about cpgl (firstName, lastName, age, job, and friends)');
// let intrestedIn = 'job';

// console.log(myObj[intrestedIn]); // student (if property name is derived by an kind of computation)
// console.log(myObj.intrestedIn); // undefined (only exact property name, no refference or anything)

// ADDING NEW PROPERTY TO THE OBJECTS

// myObj.location = "Indore";
// myObj["enrollmentNumber"] = 57;
// console.log(myObj);

// challenge

// experiment
// console.log(`${myObj["firstName", "lastName"]}`); // ghritlahare, it do not print firstname
// console.log(myObj["firstName"] + " " + myObj["lastName"]); // you need to write myObj every single time
// console.log(`${myObj["firstName"]} ${myObj["lastName"]}`);



// solve

// using dot notation
// console.log(`${myObj.firstName}, has ${myObj.friends.length} and his best frinend is ${myObj.friends[0]}`); // chandraprakash, has 4 friends and his best frinend is aaaa

// using bracket notation
// console.log(`${myObj["firstName"]}, has ${myObj["friends"].length} friends and his best frinend is ${myObj['friends'][0]}`); // chandraprakash, has 4 friends and his best frinend is aaaa

// in above ex: myObj["friends"].length or myObj.friends.length --> myObj.friends is an our array, in which we can apply all the array properties (like length)

/*

Precedence: 
1. Grouping (highest precedence)
2. Member access (dot notation)
3. Computed member access (square brackets)
4. `new` with argument list
5. Function call
6. Optional chaining

Associativity:
- Left-to-right for most operators

Explanation:
1. Grouping ( )
   - Used for grouping expressions and controlling the order of evaluation.
2. Member access (x.y)
   - Accessing properties or methods of objects using dot notation.
3. Computed member access (x[y])
   - Accessing properties or methods of objects using square brackets and a variable or expression.
4. `new` with argument list (new x(y))
   - Creating a new instance of an object with arguments.
5. Function call (x(y))
   - Invoking a function or method with arguments.
6. Optional chaining (x?.y)
   - Safely accessing properties or methods of objects when the object may be null or undefined.
   

   */

//********* OBJECT METHODS **************/



// const myObj = {
//     firstName: 'chandraprakash',
//     lastName: 'ghritlahare',
//     age: 2024-2001,
//     job: 'student',
//     slogan: () => {console.log('jai shree ram');}, // only function expression is allowed as (function value)
//     friends: ['aaaa','bbbb','cccc','dddd'],
//    //  calcAge: function() {  console.log(this); return this.age; } // inside this 'this' reffer to "myObj".so it log whole MyObj
//     calcAge: function() {  return this.ageNo = this.age; },
//     // inside of computing age multiple times suppose if me log it for 100 times, insted we here create a new object proberty as 'this.ageNo'  and assigning absolute value of age by computing 'this.age' and returning ageNo via 'return this.age', so now we have to only compute 'console.log(myObj.calcAge());' once it will be going to store in ageNo property hence next time we can log 'console.log(myObj.ageNo);' multiple time, no need for re computation as no object itself hold this property, hence it is a optimize way
//    getSummery: function() {
//       // return `${this.firstName} is ${this.calcAge()} year boy, and has ` + this.ageNo >= 18 ? 'a' : 'no' + `driving licence`
//       return `${this.firstName} is ${this.calcAge()} year boy, and he has ${this.ageNo >= 18 ? 'a' : 'no'} driving licence, his friends are ${this.friends} and his best friend is ${this.friends[0]}`
//    },
//    // getSummery: () => {
//    //    return `${this.firstName} is ${this.calcAge()} year boy, and has ${this.ageNo >= 18 ? 'a' : 'no'} driving licence, his friends are ${this.friends} and his best friend is ${this.friends[0]}`
//    // } // it produces error for this keyword
// }

// console.log(myObj['calcAge']);
// console.log(myObj['calcAge']());

// optimize way
// console.log(myObj.calcAge()); // one time calculation and assigning that result into new property of myobj
// console.log(myObj.ageNo); // direct access of object no need of computation
// console.log(myObj.ageNo); // direct access of object no need of computation
// console.log(myObj.ageNo); // direct access of object no need of computation
// console.log(myObj.ageNo); // direct access of object no need of computation


// challange
// console.log(myObj.getSummery());



//****************************** CODING CHALLENGE ***********************/

// const dolphin = {
//    fullName : 'dolphin team',
//    mass : 78,
//    height: 1.69,
//    calcBMI : function (){
       // return dolphin.BMI =  dolphin.mass / dolphin.height ** 2; // both working and both are same logic
//       return this.BMI =  this.mass / this.height ** 2;
//    },
// };

// const koala = {
//    fullName : 'koala team',
//    mass : 92,
//    height: 1.95,
//    calcBMI : function (){
       // return koala.BMI =  koala.mass / koala.height ** 2; // both working and both are same logic
//       return this.BMI =  this.mass / this.height ** 2;
//    },
// };

// without using `this`
// console.log(`Dolphin team's BMI (${dolphin.mass / dolphin.height ** 2}) is ${dolphin.mass / dolphin.height ** 2 > koala.mass / koala.height ** 2 ? 'higher' : 'lower'} then Koala team's (${koala.mass / koala.height ** 2})!`);

// using `this`
// console.log(`Dolphin team's BMI (${dolphin.calcBMI()}) is ${dolphin.BMI > koala.calcBMI() ? 'higher' : 'lower'} then Koala team's (${koala.BMI})!`);


/**************************** LOOPS ***************************************/

// for(let i=0; i<=10; i++){
//    console.log('count is:', i);
// }

// const years = [2001, 2007, 2012, 2015, 2020, 2021, 2023, 2024];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
   // ages.push(years[i]);
   // ages.push(2024 - years[i]);
// }
// console.log(ages);


// looping backward

// const years = [2001, 2007, 2012, 2015, 2020, 2021, 2023, 2024];
// const ages = [];

// for (let i =  years.length -1; i >= 0; i--) {
//    // ages.push(years[i]);
//    console.log(i);
//    // ages.push(2024 - years[i]);
// }
// console.log(ages);

// continue and break

// const myArr = ['aa', 'bb', 24, 'ccc', [1, 2,3, 4], true];

// for (let i=0 ; i<myArr.length; i++){
   //    console.log(typeof myArr[i]);
   // }

   
   // console.log('---continue---');
   // for (let i=0 ; i<myArr.length; i++){
      //    if(typeof myArr[i] !== 'string') continue; // it means skip this current iteration and jump to next iteration imideatly
      
      //    console.log(myArr[i]);
      // }
// console.log('---break---');
// for (let i=0 ; i<myArr.length; i++){
   //    if(typeof myArr[i] === 'number') break; // if condition met skip the whole loop
   
   //    console.log(myArr[i]);
   // }
   // console.log('loop exited');


   //*************** loop under loop *********/
   
   // for(let exerciseNo=1; exerciseNo<5; exerciseNo++){
   //    console.log('----------- Starting exercise ' + exerciseNo);

   //       for(let reps=1; reps<11; reps++){
   //          console.log(`Exercise ${exerciseNo}: Lifting weight repetation ${reps}`);
   //       }
   // }

//OUTPUT:
/*

----------- Starting exercise 1
Exercise 1: Lifting weight repetation 1
...
Exercise 1: Lifting weight repetation 10
----------- Starting exercise 2
Exercise 2: Lifting weight repetation 1
...
Exercise 2: Lifting weight repetation 10
----------- Starting exercise 3
Exercise 3: Lifting weight repetation 1
...
Exercise 3: Lifting weight repetation 10
----------- Starting exercise 4
Exercise 4: Lifting weight repetation 1
...
Exercise 4: Lifting weight repetation 10

*/

// While loop
// while loop is very varsitle beacouse it does not depend on counter it just need a conditions to run
// it will run untill the condition is true

// let i=1;
// while(i<=10) console.log(i++);


// ROLL A DICE UNTILL YOU GOT 6


// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while(dice !== 6){
//    console.log(`You rolled a dice ${dice}`);
//    dice = Math.trunc(Math.random() * 6) + 1; // if we don't put this line , till loop will run forever beacouse we are only assigning dice vale at once at the top so think if come up to 4 then it will run forever and if it come 6 it want run, so to randomize the dice value we re initilize it with randome so it get another value till it hit 6
//    if(dice === 6) console.log('loop is about to end');
// }


/**************************** CODING CHALLANGE ********************************/

// const billsArr = [22,295,176,440,37,105,10,1100,86,52];

// const tipsArr = [], totalArr = [];

// const calcTip = amount => amount >= 50 && amount <= 300 ? (amount * 15)/100 : (amount * 20)/100; 

// const calcAvg = (arr) => {
//    let sum = 0; 
//    let len = arr.length;
//    let i=0;
//    while (i < len) {
//       sum += arr[i++];
//    }

//    return sum/len;
// };

// for(let i=0; i<billsArr.length; i++){
   // const tip = billsArr[i] >= 50 && billsArr[i] <= 300 ? (billsArr[i] * 15)/100 : (billsArr[i] * 20)/100;

//    const tip = calcTip(billsArr[i]); // fusing function call

//    tipsArr.push(tip);
//    totalArr.push(billsArr[i]+tip);
// }

// console.log(tipsArr, totalArr, calcAvg(billsArr));
// console.log(calcAvg([1,2,3,4]));

/***************************************************************************************/


/********************************** Devloper Skills and Setup ************************************/



























/********************************** Devloper Skills and Setup END ************************************/


/********************************** Section 6 : HTML and CCS crash Course ************************************/



/********************************** Browser Dom and JS Events ************************************/





/********************************** Section: 9 Data stuctures, Modern Operators and String  ************************************/

//************************* Array Destructuring *******************************/
// Unpacking a valuye from an array or aobjects to its sperate variabales
//        OR
// it is a process of braking large array into pices
// syntex: const [] = myArr;
// whenever js sees [] <-- this in left side of the '=' equal sign it knows it has to perform destructuring now i.e., data_type    [] =    only_array_name;

// orignal array is not affected at all 

// const arr = [2, 3, 4];

// const [firstEl, secondEl, thirdEl] = arr;

// console.log(firstEl, secondEl, thirdEl);


// console.log(secondEl, thirdEl);
// console.log(secondEl, firstEl,  thirdEl);
// console.log   (         thirdEl,    secondEl ,            firstEl)   ;

// example:

// const restaurent = {
//    name: 'Classico Itelano',
//    location: 'Via Anigo 23, France, Italy',
//    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese salad'],
//    mainMenue: ['Pizza', 'Pasta', 'Rassoto'],
//    order: function(starterIndex,mainIndex){
//       return [this.starterMenu[starterIndex], this.mainMenue[mainIndex]];
//    },
// }

// const [catIt1, catIt2] = restaurent.categories;
// // const [starterMenu1, starterMenu2, starterMenu3] = restaurent.starterMenu;
// const [starterMenu1, starterMenu2, starterMenu3] = restaurent['starterMenu'];

// console.log(catIt2, catIt1);
// console.log('1 is :', starterMenu1+'.','. 2 is : ' ,starterMenu2,'3 is : ', starterMenu3);

// what if you want to take only selected item:
// let's pick first and last item of mainMenue

// const [firstMen, , lastMen] = restaurent.mainMenue;
// console.log(firstMen, lastMen);

// just live tahat place taht you don;t wan't to pick
// ex: const [a, , ,b, ,c,d, , , , ,e , ,];
// let [a, , b, ,] = restaurent.categories;

// console.log(a, b); // Italian Vegetarian
// console.log(a, b, restaurent.categories[restaurent.categories.length-1]);

// lets swap two var using destructuring without the need of third veriable

// [a, b] = [b, a];
// console.log(a, b); // Vegetarian Italian


// ex 2:
// let myArr = [1,2];

// let [x,y] = myArr; // 1 2
// [x,y] = [y,x];
// console.log(x, y); // 2 1

// reciving multiple values from return and destruicturing that; benifit is that we wil be able to create two or mare variable imedeatily to that result from the function 

// console.log(restaurent.order(1,1));
// console.log(restaurent['order'](1,2));

// const [starter, main] = restaurent.order(2,1);
// console.log(starter,'and', main);

// destructuring in nested array:-


// const nestedArr = [2,3,[4,3,'2',1],4];
// const [l,m,n] = nestedArr;
// console.log(m); //3
// const [l,,n] = nestedArr;

// console.log(l); // 2

// console.log(n); // [4,3,'2',1]
// console.log(n[0]); // 4

// console.log(parseInt(n[2])); // 2

// const [j,,h,i] = n;
// console.log(j); // 4
// console.log(h); // 2

// OR 

// const [p,,[q,,r,s], t] = nestedArr;

// console.log(p); // 2
// console.log(r); // 2
// console.log(s); // 1
// console.log(t); // 4

// seting default value when you don't know the length of array (unpack array int the positions which may even not exists)

// const [a,b,c] = [8,9];
// console.log(a,b,c); // 8 9 undefined

// const [a,,c] = [8,9];
// console.log(a,c); // 8 undefined

// const [a=1,b=1,c=1] = [8,9]; // default value
// console.log(a,b,c); // 8 9 1

// const [a=1,b=1,c=1] = [8]; // default value
// console.log(a,b,c); // 8 1 1


//***********************************   OBJECT DESTRUCTURING *************************************************/


// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   order: function(starterIndex,mainIndex){
//    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function(obj) {
//    console.log(this); // restaurent object accessed via this
//    console.log(obj); // passed object accessed via parameter
//    return `Order Recuived! ${this.starterMenu[obj.mainIndex]}  and ${this.mainMenu[obj.mainIndex]} will be delivered to ${obj.addresss} at ${obj.time}`;
//   },
//   orderDelivery: function({time: t = "00:00", addresss, mainIndex, starterIndex}) {
//    console.log(this); // restaurent object accessed via this
//    return `Order Recuived! ${this.starterMenu[starterIndex]}  and ${this.mainMenu[mainIndex]} will be delivered to ${addresss} at ${t}`;
//   },

// };

// order not matter
// variable name should be exactily same as property names

// const {name,openingHours,categories} = restaurant;

// console.log(name, openingHours, categories);
// console.log(nameO, openingHours, categories); // undefined (nameO)


// what if we want to give variable name to be refferd as other name
// syntex orignalPropertyName : newVarName

// const {name: restaurantName,openingHours: hours,categories: tags} = restaurant;

// console.log(restaurantName, hours, tags);

// above ex is helpul in dealing with thirdparty data

// seting default value:-

// here we are giving deafult to starterMenue with changed name as starter = [] which is currently empity

// we can also define property that are not in object i.e., 'menu' with some default vale in an array syntex [], and later reffer to it

// const {starterMenu: starter = [], menu = []} = restaurant;

// console.log(starter,'and', menu); // [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ] and []


// Mutating variables:-

// let a = 111;
// let b = 999;


// {a,b} = {a:12, c:42, b:53}; // SyntaxError: Unexpected token '='

// let obj = {a:12, c:42, b:53};
// {a,b} = obj; // SyntaxError: Unexpected token '='

// beacouse this bracket {a,b} <<-- which holds a,b; where js expects any code block or expression in it like { 1+ 2 } it do not expect any assignment to it, which we are doing here like this {a,b} = obj, so the solution is that this is also an codeblock "{a,b} = obj", so to execute code block we wrape it into () and it's a trick, so

// ({a,b} = obj); // it will work now

// console.log(a,b); // 12 53 // here we have mutated the orignal a and b variable

/* ---------------------- Nested objects Destructuring ---------------------- */

// const {{{open: o}}} = restaurant; // Wrong

// const { thu: { open: o } } = restaurant.openingHours; // Right
// const { open: o, close: c } = restaurant.openingHours.thu; // Right

// console.log(o, c);


/* ---------- Object destructuring on the fly in method or function --------- */

// console.log(

// restaurant.orderDelivery({
//    time:'22:30',
//    addresss: 'dummy 123',
//    mainIndex: 1,
//    starterIndex: 2,
// })

// );


/* -------------------------------------------------------------------------- */
/*                               SPREAD OPERATOR                              */
/* -------------------------------------------------------------------------- */

// unpack ana array into it's all emenets

// const arr = [7,8,9];

// const newArr = [1,2,...arr];

// console.log(newArr); // [ 1, 2, 7, 8, 9 ]

// if we do like this
// const newArr = [1,2,arr]; --> [1,2,[7,8,9]]


// console.log(...newArr); // samea swritting console.log(1,2,7,8,9); which will produce the outpur as : 1 2 7 8 9

// IT IS HELPFUL TO USE WHEN WE HAVE TO WRITE A VALUE SEPRATED BY COMMAS

// USE CASES:-


// copy array
// const copyMainArr = [...arr];
// console.log(copyMainArr); // [ 7, 8, 9 ]

// const arr2  = [11, 12, 13];

// merge array
// const meregArr = [...arr2, ...arr];
// console.log(meregArr); // [ 11, 12, 13, 7, 8, 9 ]

// spread operator works on all types of iteratbles in js (arrays,maps,strings,sets) all the typr of inbuilt data structures **but not Objects**


//IMP
// const str = 'cpgl.';
// const arrChar = [...str,"cs"," "];
// console.log(arrChar, " ", "op."); // [ 'c', 'p', 'g', 'l', '.', 'cs', ' ' ] _ op.

// console.log(...str);


// it won't work here:

// console.log(`${...str} is a student`); // beacouse ${} this is not the place which expects multiple value seprated by commas it expect 'expression'

// so spread operator is only usefull when building a new array and passing arguments to a function


// ex:

// 1: As argument
// const tempArr = [1,2,3];
// const elemArr = [...tempArr];

// const sum = function(elem1, elem2, elem3) {
//    return elem1 + elem2 + elem3;
// }

// console.log(sum(...elemArr)); // 6

// 2: As Parameter

// You can also use spread operator to gather remaining arguments into an array parameter
// function sumAll(...args) {
//    let sum = 0;
//    for (let arg of args) {
//        sum += arg;
//    }
//    return sum;
// }

// console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15





// it also works with Objects

// const restorentObj = {
//    name: "resto1",
//    cusion: ['item1', 'item2'],
//    slogan: function(){
//       console.log(`taste be best be at ${this.name}`);
//    },
//    moto: () => 'Enjoy',
// }

// console.log(restorentObj);
// console.log(restorentObj.moto());
// restorentObj.slogan();

// const newResObj = {
//    online: "yes",
//    ...restorentObj,
//    address: 'dummy 123',
// }
// // console.log(newResObj);

// const copyOfNewResObj = {
//    ...newResObj,
// }

// changing on copy and see weather it's parent object 'newResObj' is changed or not --> No (only change reflect in copy)
// shallow copy of newResObj named copyOfNewResObj.

// copyOfNewResObj.name = 'changed';

// console.log(newResObj); // restro1
// console.log(copyOfNewResObj); // changed
// console.log(restorentObj); // restro1

/*


function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  let clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }

  return clone;
}

const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Deep copy using custom function
const copiedObj = deepClone(originalObj);

// Modify the nested object in the copied object
copiedObj.address.city = "Los Angeles";

// Original object remains unchanged
console.log(originalObj.address.city); // Output: New York



*/



/* --------------------------------- VIMP -------------------------------- */
//   SHALLO COPY 

/*

Sure, let's break it down step by step with examples:

**Example 1:**

```javascript
const restorentObj = {
   name: "resto1",
   cusion: ['item1', 'item2'],
   slogan: function(){
      console.log(`taste be best be at ${this.name}`);
   },
   moto: () => 'Enjoy',
}

const newResObj = {
   online: "yes",
   ...restorentObj,
   address: 'dummy 123',
}

const copyOfNewResObj = {
   ...newResObj,
}

copyOfNewResObj.name = 'changed';

console.log(newResObj); // Output: { name: 'resto1', cusion: [ 'item1', 'item2' ], slogan: [Function: slogan], moto: [Function: moto], online: 'yes', address: 'dummy 123' }
console.log(copyOfNewResObj); // Output: { online: 'yes', name: 'changed', cusion: [ 'item1', 'item2' ], slogan: [Function: slogan], moto: [Function: moto], address: 'dummy 123' }
console.log(restorentObj); // Output: { name: 'resto1', cusion: [ 'item1', 'item2' ], slogan: [Function: slogan], moto: [Function: moto] }
```

In this example, when you change `copyOfNewResObj.name`, only `copyOfNewResObj` is modified. `newResObj` and `restorentObj` remain unchanged. This is because `copyOfNewResObj` is a shallow copy of `newResObj`, meaning it only copies the top-level properties. Nested objects and functions are still referenced, not copied.

**Example 2:**

```javascript
// Original object
const originalObj = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA"
  }
};

// Shallow copy using spread operator
const copiedObj = { ...originalObj };

// Modify the nested object in the copied object
copiedObj.address.city = "Los Angeles";

// Changes reflected in the original object
console.log(originalObj.address.city); // Output: Los Angeles
```

In this example, `originalObj` contains a nested object `address`. When you create a shallow copy of `originalObj` using the spread operator (`{ ...originalObj }`), it creates `copiedObj`. Both `originalObj` and `copiedObj` share the same `address` object. So, when you modify `copiedObj.address.city`, it reflects in `originalObj.address.city` as well because they both reference the same nested object.

The key difference between the two examples is the presence of nested objects. In the first example, modifying the copied object does not affect the original because the copy is shallow and nested objects are not deep-copied. In the second example, modifying the copied object does affect the original because the nested object is shallow-copied, meaning it is still referenced rather than copied.


*/


// IMP
// LEARN ABOUT DEEP COPY




/* -------------------------------------------------------------------------- */
/*            Rest Pattern (operator) and Rest Parameters                      */
/* -------------------------------------------------------------------------- */

// // rest - collect multiple elements and condence it into an array

// // SPREAD, beacouse on RIGHT side of =
// const arr = [1,2,...[11,12,13]];
// console.log(arr); // [ 1, 2, 11, 12, 13 ]

// // REST, beacouse on LEFT side of =
// // const [a,b,...others] = arr;
// // const [a,b,...others] = [...arr];
// const [a,b,...others] = [1,2,3,4,5];
// // all there syntex are correct
// console.log(a,b,others); // 1 2 [ 11, 12, 13 ]

// // REST can only be used in the last ex: [a, ,b, ...rest]
// // we can use only one rest in destructuring

// // REST in Objects

// const obj = {
//   name: "resatto",
//   openingHours: {
//     thu: [11, 22],
//     fri: {
//       open: 2,
//       close: 6
//     },
//     sat: {
//       o: 3,
//       c: 8
//     }
//   }
// };

// // const copyRes = {...obj};

// // copyRes.openingHours.fri.open = 1222;
// // console.log(obj.openingHours.fri.open); // 1222 (change in orignal obj) // above three lines are shello copy example

// // const [sat, ...weekday] = obj.openingHours; // look here we are using [] --> which produces error that onject is not iteratable, to fix this use {} as same you are reffering to, like below
// const {sat, ...weekday} = obj.openingHours;

// console.log(sat, weekday);

// //rest with function

// const sum = function(...args){
//    let sum = 0;
//    for (let arg of args){
//       sum+= arg;
//    }
//    return sum;
// }

// console.log(sum(1,2)); // 3
// console.log(sum(1,2,3,4)); // 10
// console.log(sum(1,2,3,4,5,6,7,8)); // 36





// // Example 2: Rest parameter as a parameter in a function
// function multiply(multiplier, ...nums) {
//    return nums.map(num => num * multiplier);
// }

// console.log(multiply(2, 1, 2, 3, 4)); // Output: [2, 4, 6, 8]
// console.log(multiply(3, 5, 6, 7)); // Output: [15, 18, 21]

// const numbers = [1, 2, 3, 4, 5];
// console.log(multiply(2, ...numbers)); // Output: [2, 4, 6, 8, 10]

// const moreNumbers = [5, 10, 15];
// console.log(multiply(3, ...moreNumbers)); // Output: [15, 30, 45]



// // SPREAD: --> values seprated by comma
// // REST: --> variable names seprated by comma


/* -------------------------------------------------------------------------- */
/*                         Short Circuting (&& and ||)                        */
/* -------------------------------------------------------------------------- */


// the can use any data type, return anay data type and so short ciructing or also call as short circuit evalueation



/* --------------------- short circuting in || operator --------------------- */

// console.log(24 || "cpgl"); // 24 
// console.log(24 || 244); // 24
// console.log("cpgl" || 24); // cpgl
// console.log("" || "cpgl"); // cpgl 
// console.log(true || 0); // true
// console.log(undefined || null); // null 
// console.log(NaN || null); // null 

// console.log(undefined || NaN || "" || 0 || "Hello" || 24 || null); // Hello
// console.log(undefined || NaN || "" || 0 || null || "Hello" || 24 || null || true); // Hello
// it does not dipitch any precidence it is just that js will look fron left to right until iimideately short circuit to that point no further looking


// if the first Element is truthy it imeadately return that first value in cas or OR (||)


// real life example (uded to set deafult value conditionally)

// reastaurent.guestNum = 22; // which is undefined (run below code without this line to set deafult value)

// const reastaurent = {
//    // guestNum: 767,
//    orderPizza: (ing1, ing2) => console.log(`Youre pizza with ${ing1} and ${ing2}`),
//    orderPizza2: (ing1, ing2) => {
//       console.log(`Youre pizza with ${ing1} and ${ing2}`);
//       return 'Maked: ready to serve';
//    },
// }

// const guest = reastaurent.guestNum ? reastaurent.guestNum : 10;
// console.log(guest);

//              OR using short circution

// const guest = reastaurent.guestNum || 10;
// console.log(guest);

// one draw back in abouve || short circuting and ternary is that if guest is 0 then it want't work set to 10 by default, to resolve this we use The Nullish Coalescing Operator (??)


/* ------------------------------ And Operator ------------------------------ */

// if we got any falsy value then && will automatically be calse so it imidetely return that falsey value. And in case of || if one value become true hene so no need to look further return the imidate truethy value


// console.log(0 && 'cpgl'); // 0
// console.log(24 && 'cpgl'); // cpgl if all true then last one will be printed

// console.log('hello' && 24  && null && NaN && undefined && 'cpgl' && false); // null

// practical application

// if order pizza method exist then order pizza with this two ingedridents
// if(reastaurent.orderPizza){
//    reastaurent.orderPizza('Olivs', 'spinach');
// }

//             OR using && short circuting


// reastaurent.orderPizza && reastaurent.orderPizza('Olivs', 'spinach');

// const isMaked = reastaurent.orderPizza && reastaurent.orderPizza2('Olivs', 'spinach');
// console.log(isMaked);

// || ---> first truthy -------- or last falsy (if all of them are falsy)
// && ---> first falsy -------- or last truthy (if all of them are truthy)

// console.log('a' && '1' && true && {} && [] && 'last truthy');

// USE:

// || --> use to set default value
// && --> execute code in second operand if first one is true



// ex:
// const data = await fetch(url).then(response => response.json()).catch(() => []);
// const results = data.results || [];

// let street = user.address && user.address.street;


/* -------------------------------------------------------------------------- */
/*                    The Nullish Coalescing Operator (??)                    */
/* -------------------------------------------------------------------------- */

// this is the solution for the || short circuit when data is 0 or "" it jump to second operand beacouse it work on falsy values and 0 and "" (empty string) are falsy values

// const guestNo = 0;
// const guestNo = "";

// const guest = guestNo || 10;
// console.log(guest); // 10 (we actual want 0)
// so 
// const guest = guestNo ?? 10;
// console.log(guest); // 0 
// beacouse it work on Nullish walue which are null and undefined
// where as 0, false and "" are falsy value

// USE CASE: Setting fall back wre you want to assign any value to any variable of key in case of objects


/* -------------------------------------------------------------------------- */
/*                         Logical Assignment Operator                        */
/* -------------------------------------------------------------------------- */


const restaurant1 = {
   name: "raso1",
   noGuest: 0,
}

const restaurant2 ={
   name: "raso2",
   owner: "dummy"
}

// exp
// restaurant2.numberGuest = restaurant1.noGuest || 16;
// console.log(restaurant2.numberGuest);

// we are creating a new property for restaurant2 that is "numberGuest" and in this we are assigning the value of restaurant1's noGuest values and if even restaurant1's has 0 (use ??) or no guest then assign by deafoult 16


/* ---------------------------- now actual topic ---------------------------- */
//                        OR Assignment Operator

// restaurant1.noGuest = restaurant1.noGuest || 10;
// restaurant2.noGuest = restaurant2.noGuest || 11;
//           OR (equivalent of above lines)
// restaurant1.noGuest ||= 10; // agar restaurant1.noGuest me kuch nahi hai (falsy value) toh by deafoult 10 assign kr do
// restaurant2.noGuest ||= 11;
// console.log(restaurant1);
// console.log(restaurant2);



// restaurant1.noGuest ??= 10; // agar restaurant1.noGuest me kuch nahi hai (nullish value) toh by deafoult 10 assign kr do
// restaurant2.noGuest ??= 10;



//                      AND Assignment Operator

// restaurant1.owner = !restaurant1.owner && "Owner set or change"; // agar restaurenrt ka owner nahi hai to set kr do --> trick by using !
// restaurant2.owner = restaurant2.owner && "Owner Canged"; // agar restaurenrt ka owner hai to change kr do

// restaurant1.owner &&= "Owner change"; // (little different) it just do not set owner to undefine (here primary logic is that agr restaurent ka owner hai to uska name change kr do)
// restaurant2.owner &&= "Owner Changed"; // agar restaurenrt ka owner hai to change kr do

// console.log(restaurant1); // { name: 'raso1', noGuest: 0, owner: undefined }
// console.log(restaurant2); // { name: 'raso2', owner: 'Owner Changed' }



/* ---------------------------- Coding challenge ---------------------------- */


/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
   team1: 'Bayern Munich',
   team2: 'Borrussia Dortmund',
   players: [
     [
       'Neuer',
       'Pavard',
       'Martinez',
       'Alaba',
       'Davies',
       'Kimmich',
       'Goretzka',
       'Coman',
       'Muller',
       'Gnarby',
       'Lewandowski',
     ],
     [
       'Burki',
       'Schulz',
       'Hummels',
       'Akanji',
       'Hakimi',
       'Weigl',
       'Witsel',
       'Hazard',
       'Brandt',
       'Sancho',
       'Gotze',
     ],
   ],
   score: '4:0',
   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
   date: 'Nov 9th, 2037',
   odds: {
     team1: 1.33,
     x: 3.25,
     team2: 6.5,
   },
 };

 /* -------------------------------------------------------------------------- */
 /*                              Looping an Arraty                             */
 /* -------------------------------------------------------------------------- */

 let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

 let mixedArray = [
   42,
   "Hello, world!",
   true,
   { name: "John", age: 30 },
   ["apple", "banana", "orange"],
   null,
   undefined,
   new Date(),
   function() {
       return "This is a function inside an array!";
   },
   { city: "New York", country: "USA" },
   3.14,
   false,
   NaN,
   Infinity,
   Symbol("foo"),
   -10,
   ["dog", "cat", "bird"],
   { hobby: "Reading", book: "The Great Gatsby" },
   "OpenAI",
   { x: 10, y: 20 },
   /pattern/,
   new Map(),
   new Set(),
   BigInt(12345678901234567890)
];

//for of loop (it support continue and break keyword)

// for(let item of arr) console.log(item);
// for(let item of mixedArray) console.log(item);

// to also get a index
// for(let item of arr.entries()) console.log(item);


// console.log(arr.entries());
// console.log([...arr.entries()]); // its a array of arrays



// for(let item of arr.entries()){ console.log(`${item[0]+1} : ${item[1]}`); }


// for(let [i, el] of arr.entries()){ console.log(`${i + 1} : ${el}`); }



/* -------------------------------------------------------------------------- */
/*                          Inhanced Object Literals                          */
/* -------------------------------------------------------------------------- */

// const restaurentItem = {
//    item1: "item one",
//    item2: "item two",
// }

// const restro = {
//    owner: "dummy",
//    // restaurentItem : restaurentItem, // key value has same same so
//    //        or
//    restaurentItem, // work the same way
   
//    // order: () => console.log("you order this"), 
//    //        or
//    order() { console.log("you order this") }, // work the same way
   
//    [`any compputed value arr[5] 1+2`]: {
//       [`morning`]: 10,
//       [`evening`]: 10,

//    },
// }

// console.log(restro);
// console.log(restro["any compputed value arr[5] 1+2"]);
// restro.order();
// /* OUTPUT:
// {
//   owner: 'dummy',
//   restaurentItem: { item1: 'item one', item2: 'item two' }
// }
// */


/* -------------------------------------------------------------------------- */
/*                              Optional Channing                             */
/* -------------------------------------------------------------------------- */


// const restaurent = {
//    openingHour: { 
//       fri: {
//          open: 10,
//          Close: 10,
//       },
//       sat: {
//          open: 10,
//          close:10,
//       },
//    },
// }


// // normal way of checking that it exist or not

// if(restaurent.openingHour.fri){
//    console.log(restaurent.openingHour.fri.open); // 10
// }

// // if two thinghs to check and more....

// // if(restaurent.openingHour && restaurent.openingHour.fri){
// //    console.log(restaurent.openingHour.fri.open); // 10
// // }

// //    OR (using short cirtcuting) what if more many parameters 
   
// restaurent.openingHour.fri && 
// console.log(restaurent.openingHour.fri.open); // 10



// // console.log(restaurent.openingHour.fri.open); // 10


// // console.log(restaurent.openingHour.mon.open);
// // ERR: TypeError: Cannot read properties of undefined (reading 'fri')
// // restaurent.openingHour.mon --> this is undefined so (not produce err, simply return undefined)
// //   |-> undefined.property (e.i., Undefined.open) --> produce err

// // to solve
// // console.log(restaurent.openingHour.mon?.open); // undefined (only if mon not `exist` return vaule if it is set to 0 or "")
// console.log(restaurent?.openingHour?.mon?.open); // undefined



// //  more ex:
// const weeks = ["sun", "mon", "tue", "wed", "tue", "thr", "fri", "sat"];

// for(const day of weeks){
//    const open = restaurent?.openingHour[day]?.open ?? "closed";
//    console.log(`on day ${day} we open at ${open}`);
// }


// // on methods
// console.log(restaurent.order?.() ?? "method does not exist");

// // on arrays
// const users =
// [
//    {
//       name: "dummy",
//       email: "dummy@mail.com",
//    },
//    {
//       name: "demo",
//       email: "demo@mail.com",
//    },
// ];

// console.log(users[0]?.name); // dummy
// console.log(users[1]); // { name: 'demo', email: 'demo@mail.com' }
// console.log(users[1]?.email); // demo@mail.com
// console.log(users[2]?.name); // undefined
// console.log(users[2]?.name ?? "User array empty or not found at this index"); // User array empty or not found at this index (withou this we have to then write using if else)


/* -------------------------------------------------------------------------- */
/*              Looping Objects: Object Keys, Values, and Entries             */
/* -------------------------------------------------------------------------- */


// const openingHour =
// [
//    {
//       fri: {
//          open: 10,
//          close: 10,
//       },
//    },
//    {
//       sat: {
//          open: 10,
//          close: 10,
//       },
//    },
// ]

// // const keysArr = Object.keys(/* SOme Object */);
// const myObject = {a: 1, b: 2, c: 3};
// const keysArr = Object.keys(myObject);
// console.log("keys:",keysArr); // kwys: [ 'a', 'b', 'c' ]

// const keysVal = Object.values(myObject);
// console.log("Values:",keysVal); // Values: [ 1, 2, 3 ]

// for(const key of Object.keys(openingHour)){
//    console.log("key is : ", key);
//    console.log(openingHour[key]);
// }
// // OUT:
// key is :  0
// { fri: { open: 10, Close: 10 } }
// key is :  1
// { sat: { open: 10, close: 10 } }

/*

It seems like you're trying to iterate over the keys of an object in JavaScript using a `for...of` loop, but there are a few syntax errors in your code. Let's correct it and then dive into what it does:

```javascript
for (const key of Object.keys(someObject)) {
   // Do something with each key
}
```

Here's what this code does:

1. `Object.keys(someObject)`: This function returns an array containing the keys of the `someObject` object. For example, if `someObject` is `{a: 1, b: 2, c: 3}`, then `Object.keys(someObject)` will return `['a', 'b', 'c']`.

2. `for...of` loop: This loop iterates over the elements of an iterable object (like arrays or strings). In this case, we're using it to iterate over the array of keys returned by `Object.keys(someObject)`.

3. `const key`: This declares a constant variable `key` that will be assigned the value of each element in the array during each iteration of the loop. Since it's declared using `const`, its value cannot be changed within the loop.

So, when you put it all together, the loop iterates over each key of the object `someObject`, and you can perform whatever operation you need with each key inside the loop.

Here's an example:

```javascript
const myObject = {a: 1, b: 2, c: 3};

for (const key of Object.keys(myObject)) {
    console.log(key); // Output: 'a', 'b', 'c'
    console.log(myObject[key]); // Output: 1, 2, 3
}
```

This loop prints each key and its corresponding value in the `myObject` object.

*/


/* --------------------------------- Entries -------------------------------- */


// not posible ast dit dynamic key value

// for(const [val, {day : { open: friOpen, close: friClose } }] of Object.entries(openingHour)){
// for(const [val, {day : {open: o, close: c}}] of Object.entries(openingHour)){
//    console.log(`on day ${day} we open at ${o} and close at ${c}`);
// }

// for (const dayObj of openingHour) {
//    // const day = Object.keys(dayObj)[0]; // Extract the day from the object
//    console.log(Object.keys(dayObj));
//    // const { open, close } = dayObj[day]; // Extract the open and close times
//    // console.log(`On ${day}, we open at ${open} and close at ${close}.`);
// }


/* -------------------------------- challenge ------------------------------- */
















