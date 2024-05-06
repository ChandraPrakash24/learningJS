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
   // // break
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



