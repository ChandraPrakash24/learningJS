'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/* 
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
*/


// (NEW) DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2024-07-06T10:51:36.790Z',
    '2024-07-08T10:51:36.790Z',
    '2024-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// project

// format movemensts date 

const formatMovementsdate = function (date){

  const calcDaysPass = (date1,date2) => Math.round(Math.abs((date2 - date1) / (1000 * 24 * 60 * 60)));
  const dayPassed = calcDaysPass(new Date(), date);

  if(dayPassed === 0) return 'Today';
  if(dayPassed === 1) return 'Yesterday';
  if(dayPassed <= 7)  return `${dayPassed} days ago`;
  else{
    const day = `${date.getDate()}`.padStart(2,0); // 1 --> padd it to 01, padding only work on strings
    const months = `${date.getMonth()}`.padStart(2,0);
    const year = date.getFullYear();
    
    return `${day}/${months}/${year}`;
  }
} 

// --> displaying movements (on UI) ////////////////////////////////////////////
const displayMovements = function(movements, entire_current_acc, sort = false){

  containerMovements.innerHTML = '';

  // sorting logic
  // temp movements array
  const movesT = sort ? movements.slice().sort((a,b)=> a-b) : movements;
  //                             ^-> creating copy of array so that 'sort' won't mutate our orignal movements array 
  movesT.forEach(function(moves,i){

    const date = new Date(currentAccount.movementsDates[i]);

    // const day = `${date.getDate()}`.padStart(2,0); // 1 --> padd it to 01, padding only work on strings
    // const months = `${date.getMonth()}`.padStart(2,0);
    // const year = date.getFullYear();

    // const displayDates = `${day}/${months}/${year}`; // <-- moving this to above function

    
    const displayDates = formatMovementsdate(date); // <-- moving this to above function

    const type = moves > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__date">${displayDates}</div>
        <div class="movements__value">${moves.toFixed(2)}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html);

  });



  // --> display balance (on UI)
  const displayBalance = function(movements_array){
    labelBalance.innerText = '';
    const balance = movements_array.reduce((acc,amount)=> acc + amount, 0);
    
    labelBalance.innerText = balance.toFixed(2) + '€';
  }
  displayBalance(movements);
  



  // --> display transaction summery (on UI)

  const displayTransactionSummery = function(curr_account){
    const income = curr_account.movements.filter(mov => mov > 0).reduce((acc,mov) => acc + mov, 0);
    labelSumIn.textContent = `${income.toFixed(2)}€`;

    const spendeature = curr_account.movements.filter(mov => mov < 0).reduce((acc,mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(spendeature.toFixed(2))}€`;

    // intrest on each deposit of 1.2 %
    const interest = curr_account.movements
      .filter((mov) => mov > 0)
      .map((mov) => (mov * curr_account.interestRate) / 100) // task: bak new rule:- bank only payes intrest if it is atlears 1€
      .filter((int, _ , arr) => { // this array is returned by aboev method and we are currently workong on it
        // console.log(arr); // [2.4, 5.4, 36, 0.84, 15.6] // 0.84 <-- not paying this intrest 
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);   // before new rule 60.24€, after 60.24 - 0.84 = 59.4€
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  }

  displayTransactionSummery(entire_current_acc); // move down to login




}

// displayMovements(account1.movements); // moved below to login logic
// displayMovements(movements);

// console.log(containerMovements.innerHTML); // html that we created



// -------------------- challenge (prep) --------------------

// // const userName = account3.owner; // Jonas Schmedtmann

// const userName = 'Jonas Thomas Schmedtmann'; //to get --> jts


// // const user = userName.toLowerCase().split(' '); // ['jonas', 'thomas', 'schmedtmann']
// // const userActualArr = user.map(el=>el[0]); // ['j', 't', 's']
// // const userActual = userActualArr.join(''); // jts
// // console.log(userActual);


// //             OR

// const user = userName.toLowerCase().split(' ').map(el=>el[0]).join(''); // jts
// console.log(user);

// -------------------- challenge (prep) END --------------------

// --> generating username (not on UI) //////////////////////////////////////////////

const createUserName = function(accountsArrayOfObj){ // just a wrapper fun // const accounts = [account1, account2, account3, account4];

  accountsArrayOfObj.forEach(function(curr_acc){ // looping to all acoount
    curr_acc.username = curr_acc.owner.toLowerCase().split(' ').map(el=>el[0]).join(''); // creating a new property to all objects
  });
  
}

// previously (accounts1)
// owner:"Jonas Schmedtmann"
// pin:1111

createUserName(accounts);
// console.log(accounts);

// after (accounts1)
// owner:"Jonas Schmedtmann"
// pin:1111
// username:"js"






// --> displaying account balance (on UI) ////////////////////////////////////////////

// const displayBalance = function(movements_array){
//   labelBalance.innerText = '';
//   const balance = movements_array.reduce((acc,amount)=> acc += amount, 0);
  
//   labelBalance.innerText = balance + '€';
// }

// displayBalance(movements); // moving this up to displayMovements function





// --> Implimenting Login (on UI) //////////////////////////////////////////////////

let currentAccount;

// FAKE ALWAYS LOGGED IN
currentAccount = account1;
displayMovements(currentAccount.movements, currentAccount);
containerApp.style.opacity = 1;

// --> Adding transactio, login, session, etc datae and time (on UI) /////////////////////////////

// Experimenting 'Intl' api

const nowLocal = new Date(); //                 lan-CONTERY

const options = {
  hour: 'numeric',
  minute: 'numeric',
  day: 'numeric',
  month: 'long', // numeric // 2-digit
  year: 'numeric',
  weekday: 'long'
}

const loaclBrowser = navigator.language;
console.log(loaclBrowser); // en-US

// labelDate.textContent = new Intl.DateTimeFormat(loaclBrowser, options).format(nowLocal);
// labelDate.textContent = new Intl.DateTimeFormat('en-IN', options).format(nowLocal);
// 'ar-SY', en-US, hi-IN, en-IN , et-EE, gu-IN


// Experimenting 'Intl' api end


const nowDateObject = new Date();
// const day = `${nowDateObject.getDate()}`.padStart(2,0); // 1 --> padd it to 01, padding only work on strings
// const months = `${nowDateObject.getMonth()}`.padStart(2,0);
// const year = nowDateObject.getFullYear();
// const hours = `${nowDateObject.getHours()}`.padStart(2,0);
// const minutes = `${nowDateObject.getMinutes()}`.padStart(2,0);

// labelDate.textContent = `${day}/${months}/${year}, ${hours}:${minutes}`;
//                    OR
// console.log('local', nowDateObject.toLocaleDateString());
// labelDate.textContent = `${nowDateObject.toLocaleDateString()}`;
// labelDate.textContent = `${nowDateObject.toLocaleDateString()}, ${nowDateObject.toLocaleString().slice(6,-3)}`;
//                     OR
labelDate.textContent = new Intl.DateTimeFormat(loaclBrowser, options).format(nowLocal);
// labelDate.textContent = new Intl.DateTimeFormat(currentAccount.locale, options).format(nowLocal); // --> make all 'numeric' in options object


btnLogin.addEventListener('click', function(e){
  e.preventDefault(); // to privent form from automatically submetting

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  // console.log(currentAccount);

  const loginPin = inputLoginPin.value;
  // console.log(loginPin);
  // console.log(currentAccount.pin);
  if(parseInt(currentAccount?.pin) ===  parseInt(loginPin)){
    labelWelcome.textContent = `Welcome back ${currentAccount?.owner.split(' ')[0]}`;
    // containerApp.style.opacity = 100;
    containerApp.style.opacity = 1;

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    
    displayMovements(currentAccount.movements, currentAccount);
    // displayTransactionSummery(currentAccount);
  } 

});


// --> Implimenting Amount Transfer functaniality (on UI) //////////////////////////////////////////


btnTransfer.addEventListener('click',function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const recipeantAcc = accounts.find(acc => acc.username === inputTransferTo.value);

  // console.log(amount, recipeantAcc);
  // console.log(recipeantAcc?.username); // returns undefine hence do not use optional chaining here
  
  // just clean up nothind to do with below transfer logic
  inputTransferAmount.value = inputTransferTo.value = '';
  inputTransferAmount.blur();

  if(amount>0 && recipeantAcc && recipeantAcc.username !== currentAccount.username && amount <= currentAccount.movements.reduce((acc,mov) => acc + mov )){
    // currentAccount.movements[0] -= amount;
    // recipeantAcc?.movements[0] += amount; // you can use arr.pushBack hence it will also update that @displayMovements
    currentAccount.movements.push(amount * -1);
    recipeantAcc?.movements.push(amount); // you can use arr.pushBack hence it will also update that @displayMovements

    currentAccount.movementsDates.push(new Date().toISOString());
    recipeantAcc?.movementsDates.push(new Date().toISOString());
    
    // console.log('this: ', new Date().toISOString());

    displayMovements(currentAccount.movements, currentAccount);
  }
  
  
  // console.log(currentAccount); // we ahve acces to current user coz it was defined globally using let
});

// --> Get Loan functaniality (on UI) ////////////////////////////////////////////////////////////////////////

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    displayMovements(currentAccount.movements, currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});


// --> Get Sorting functaniality (on UI) ////////////////////////////////////////////////////////////////////////

let sort = false; // to implement toogle functanilaty

btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currentAccount.movements, currentAccount, !sort );
  sort = !sort;
})








// --> Implimenting Account Deletion functaniality (on UI) //////////////////////////////////////////

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  const user = inputCloseUsername.value;
  const usersPin = Number(inputClosePin.value);

  if(currentAccount.username === user && currentAccount.pin === usersPin){
    const index = accounts.findIndex(acc => acc.username === user);

    accounts.splice(index,1); // removing 1 elemnt at index in orignal array

    containerApp.style.opacity = 0;    

  }

  inputCloseUsername.value = inputClosePin.value = '';
  inputClosePin.blur();

});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////------ NUMBER, DATE, INTL and TIMERS ------//////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

//----------------------------------- LECTURES ------------------------------------

/* 



*/

// all Numbers, Decimels are internally represented as 'flooting points' ex:- console.log(24 === 24.0); // ture
// in a 64 base 2 format (in binary) 

// BASE 10 :- 0 to 9
// BASE 2 :- 0 and 1
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
// js struggle to represent some fractios like this 0.1


// string to Number
console.log(Number('24')); // 24
console.log(+'24'); // 24 (when js see + it try to cohersion hence convert string into Number)

// Parsing
console.log(Number.parseInt('24px')); // 24 (struing must start with number)
console.log(Number.parseInt('px24')); // NaN
console.log(Number.parseInt('px24px')); // NaN
console.log(Number.parseInt('24px23')); // 24



console.log(Number.parseInt('24px', / /)); // 24 <-- second arg is regx
console.log(Number.parseInt('24px', 10)); // 24 <-- 10 means we are using Base 10
console.log(Number.parseInt('24px', 2)); // NaN <-- 2 means we are using Base 2

// White Spaces is allowed <--

console.log(Number.parseFloat('    24.24rem    ', 10)); // 24.24
console.log(Number.parseInt('   24.24rem ', 10)); // 24

// below is global 'parseInt/Float' but it is always good to use it on 'Number' using dot operator beacouse Number object provieds 'namespace' that is 'isNaN()'

console.log('this:',parseInt('   24.24rem ', 10)); // this: 24

console.log(Number.isNaN(20)); // false (it's a number)
console.log(Number.isNaN('20')); // false (it's a value)
console.log(Number.isNaN(+'20px')); // true (on converted to number, this is not a number)
console.log(Number.isNaN(12 / 0)); // false (infinity is also not a number)

// better method (to check if a value is number or not)

console.log(Number.isFinite(20)); // t
console.log(Number.isFinite('20')); // f
console.log(Number.isFinite(+'20px')); // f
console.log(Number.isFinite(12 /0)); // f

// use if you are sure that the value is only intiger
console.log(Number.isInteger(12)); // t
console.log(Number.isInteger(12.0)); // f
console.log(Number.isInteger(12 / 0)); // f



//------------ Math and Rounding ---------------------------

// sqrt
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1/2)); // 5
console.log(8 ** (1/3)); // 2 <-- only way to calculate 'cube root'

// max
console.log(Math.max(5,11,24,18,2)); // 24
console.log(Math.max(5,11,'24',18,2)); // 24 <<- it do type correstion
console.log(Math.max(5,11,'24px',18,2)); // NaN <<- it do not do parsing

// min
console.log(Math.min(5,11,24,18,1)); // 1
console.log(Math.min(5,11,'24',18,-1)); // -1 <<- it do type correstion
console.log(Math.min(5,11,'24px',18,1)); // NaN <<- it do not do parsing

// Math. <- means math namespace so get max from Math namespace

// radius of cicrle using PI
let r = 10;
console.log(Math.PI); // 3.14159265358979
console.log(Math.PI * (r ** 2));

// Randome No.
console.log(Math.random()); // 0.01 to 0.99
console.log(Math.random() * 6); // 0 to 5

const randomeInt = (min,max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomeInt(11,22));
// 0....1 -> 0....(max - min) -> min....(max - min + min) (add min) -> - min + min got cancel out and we will endup with -> min....max


// rounding (all this method do type coresion)
console.log(Math.trunc(3.141592653589793)); // 3

console.log(Math.round(23.3)); // 23
console.log(Math.round(23.9)); // 24

console.log(Math.ceil(23.3)); // 24
console.log(Math.ceil(23.9)); // 24

console.log(Math.floor(23.3)); // 23
console.log(Math.floor('23.9')); // 23

// round where different with negative numbers
console.log(Math.round(-23.3)); // 23
console.log(Math.floor(-23.3)); // 24

console.log(Math.round(-23.9)); // 24
console.log(Math.floor(-23.9)); // 24

// so 'floor' is the perfect way to do rounding
// so replace 'Math.trunc' with 'Math.floor' in above randomeInt function so it can also work with negative values

// rounding decimals
// toFixed() <-- DO NOT DO TYPE COERSION
console.log((2.7).toFixed(0)); // 3 <-- this returned value is string type, so first convert to number before using it
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35 
console.log((2.355).toFixed(2)); // 2.35 
console.log((-2.355).toFixed(2)); // -2.35 
console.log((2.365).toFixed(2)); // 2.37 
console.log((-2.365).toFixed(2)); // -2.37 
// console.log(('-2.365').toFixed(2)); // ERROR 
console.log(+(2.345).toFixed(2)); // 2.35 <-- type : Number

// there are more functions like logerithmic, sin function, etc. -> check mdn




// -- remainder operator (of division) --
console.log(5%2); // 1
console.log(5/2); // 2.5 ->floor-> 2 explanition: // 5 = 2 * 2 + 1 <-- this 1 is remainder in above line 


console.log(8 % 3); // 2
console.log(8 / 3); // 2.6666 --> 2 // 8 = 2 * 3 + 2 <-- this 2 is remainder in above line

//              (dividend)
//
//   (divisor)  3 ) 8 ( 2  (quotient)
//                  6
//                =====
//                  2     (remainder/modulus)


// even (means it was divisible by 2 hence reminder will be 0)
console.log(8 % 2); // 0 <-- hence 'even'
console.log(8 / 2); // 8 = 2 * 4 + 0 <-- remainder is 0

// odd (means it was not divisible by 2 hence reminder will be 1)
console.log(7 % 2); // 1 <-- hence 'odd'
console.log(7 / 2); // 3.5 // 7 = 2 * 3 + 1 <-- remainder is 1

const isEven = n => n % 2 === 0;
console.log(isEven(8)); // true
console.log(isEven(7)); // false
console.log(isEven(1)); // f
console.log(isEven(0)); // t
console.log(isEven(2)); // t
console.log(isEven(-2)); // t
console.log(isEven(-3)); // f

// application (every nth time) : like if you want to color every 2nd row to any color the use if(index % 2 === 0) color: orange; --> 0,2,4,6,8.....
// if you want to color every third row then if(index % 3 === 0) color: blue; --> 0,3,6,9,.... 

// ---------------- Numeric seprator ---------------------
// only use in code (for hard coded value of type Number only, for logical sepration)

console.log(15_00); // 1500 (but means 15$ 0 cents)
console.log(1_500); // 1500 (mans 1 thousend 5 hundred $)

console.log(Number('230_000')); // NaN
console.log(parseInt('230_000')); // 230

// ----------------- BIGINT ------------------

// in INT : 64 bit only 54 bit is use store digit , rest is used to store decimal part and signature of that number

console.log(2 ** 53-1); // 9007199254740991 safest biggest number that js can reprsent  
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308

// what if we use grater then max sage int
console.log(2 ** 53 +  3); // 9007199254740996
console.log(2 ** 53 +  4); // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER + 4); // 9007199254740996
// all no are same even thoug added no was different
// un expected behavioures

// bigInt syntex:
// console.log(bigNo then 'n');

// no mater how big like database id ,etc
// console.log(764695621361249482640806012630129301630613060126612036612093n);
// console.log(BigInt(764695621361249482640806012630129301630613060126612036612093));
// out:
// 764695621361249482640806012630129301630613060126612036612093n
// 764695621361249442660659033472102123347961801897551572500480n

// both above outputs are differnent beacouse js internally first store this no into somting before converting into bigInt 

// operations:
console.log(1000n + 1000n); // 2000n
console.log(1000n * 1000n); // 1000000n

// IMP:  mixing bigInt with regual no is not possible
// IMP: Math operation also not works like Math.sqrt(68766968998988n)

// EXCEPTION:
// but comperasion work
console.log(20n > 15); // true

// with string concatenation
console.log(213247234239429849n + 'this is Huge no'); // 213247234239429849this is Huge no

// division
console.log(11n/3n); // 3n (it will cut the decimal part automatically)
console.log(11/3); // 3.666666666666666


// ---------------- Dates and Times -----------------------------------

// ways to create Date

// syntex: new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds);

const now = new Date(); // <-- using Date() constructor function
console.log(now); // Sat Jul 13 2024 14:03:31 GMT+0530 (India Standard Time)

console.log(new Date('Jul 13 2024 14:03:31')); // Sat Jul 13 2024 14:03:31 GMT+0530 (India Standard Time) it will 'parse' a time based on that string
console.log(new Date('December 24, 2015')); // Thu Dec 24 2015 00:00:00 GMT+0530 (India Standard Time)

console.log(new Date(account1.movementsDates[0])); // Tue Nov 19 2019 03:01:17 GMT+0530 (India Standard Time)
console.log(new Date(2037,10,19,15,23,5)); // Thu Nov 19 2037 15:23:05 GMT+0530 (India Standard Time)

// months counting for this Date() constructor is '0' based :- new Date(year,month(0 based))

console.log(new Date(2037,10,31)); // <-- it means Nov 31, which do not exist hence js is smart enough to convert it into: Tue Dec 01 2037



console.log(new Date(0)); // birth of unix time: Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // 3 days after birth of unix time: Sun Jan 04 1970 05:30:00 GMT+0530 (India Standard Time) --> * by 1000 to convert it into ms

// 3 * 24 * 60 * 60 * 1000 = 259200000 (timestamps of day no 3)

//working with dates

const future = new Date(2037,10,19,15,2);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getMilliseconds());
// Thu Nov 19 2037 15:02:00 GMT+0530 (India Standard Time)
// 2037
// 10
// 19
// 4
// 15
// 2
// 0
// 0

// convert a date into iso standred string
console.log(future.toISOString()); // 2037-11-19T09:32:00.000Z

// get time stamp
console.log(future.getTime()); // 2142235920000
// revers of above time stamp
console.log(new Date(2142235920000)); // Sat Jul 13 2024 14:47:59 GMT+0530 (India Standard Time)

// get current time stamp
console.log(Date.now()); // 1720862389885

// seting date
future.setFullYear(2040);
console.log(future); // Mon Nov 19 2040 15:02:00 GMT+0530 (India Standard Time)

// conversions
console.log( +future ); // 2236930320000

// const noOfDaysPassed = (day1,day2) => `no. of days passed in between this two days are: ${day2.getTime() - day1.getTime()}`;


const noOfDaysPassed = (day1, day2) => `Number of days passed between ${day1.toDateString()} and ${day2.toDateString()}: ${Math.floor((day2.getTime() - day1.getTime()) / (1000 * 3600 * 24))}`;

// ---------------
console.log(noOfDaysPassed(new Date(2001,11,24),new Date(2024,6,13))); // Number of days passed between Mon Dec 24 2001 and Sat Jul 13 2024: 8237
// ---------------

console.log(new Date()); // Sat Jul 13 2024 17:04:44 GMT+0530 (India Standard Time)
console.log(new Date().toDateString()); // Sat Jul 13 2024
console.log(new Date().toString()); // Sat Jul 13 2024 17:04:30 GMT+0530 (India Standard Time)
console.log(new Date().toLocaleDateString()); // 7/13/2024
console.log(new Date().toTimeString()); // 17:04:16 GMT+0530 (India Standard Time)
console.log(new Date().toJSON()); // 2024-07-13T11:34:08.003Z

// format : 'year-month-date'
// console.log(noOfDaysPassed(new Date('2001-12-24'),new Date('2024-07-13'))); // Number of days passed between Mon Dec 24 2001 and Sat Jul 13 2024: 8237


// console.log(new Date());
// console.log(new Date());
// console.log(new Date());
// console.log(new Date());
// console.log(new Date());

// const = new Date()
// const = new Date()
// const = new Date()
// const = new Date()







//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


// ---------------- LECTURES ----------------
/*
// 1: SLICE - [0,1,....)
// extract the part of the array, it do not mutate orignal array, zero indexd based, returb that sliced array

let arr = ['a','b','c','d','e'];

console.log(arr.slice(2)); // ['c', 'd', 'e'] --> zero based indexing
console.log(arr.slice(2,4)); // ['c', 'd'] --> excluding last index // 4-2=2

console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1,-2)); // ['b', 'c']

// create a shello copy
// both method do same
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e'] // usefull if you want to chain multiple methods
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']


// SPLICE (mutate orignal array -- extract out (ranged/given range) this elemnt from orignal)

// console.log(arr.splice(2)); // ['c', 'd', 'e']
console.log(arr); // orignal: ['a', 'b']

// console.log(arr.splice(-1)); // ['b']
console.log(arr); // orignal: ['a']

console.log(arr.splice(1,3)); // delete only three elemnt afterword from 1st position --> zero based
console.log(arr); // ['a', 'e']

// REVERSE (mutate the orignal array) 

const arr2 = ['j','i','h','g','f'];
console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2); // ['f', 'g', 'h', 'i', 'j']

// CONCAT

const letters = arr.concat(arr2);
console.log(letters); // ['a', 'e', 'f', 'g', 'h', 'i', 'j'] --> do not mutate
console.log([...arr,...arr2]); // do not mutate

// JOIN
console.log(letters.join('-')); // a-e-f-g-h-i-j <-- string

// AT method

const arr3 = [11,22,33];

console.log(arr3[1]); // OR
console.log(arr3.at(1)); // 22

// geting a last element from array
console.log(arr3[arr3.length - 1]); // 33
// console.log(arr3.slice(-1)); // [33]
console.log(arr3.slice(-1)[0]); // 33

console.log(arr3.at(-1)); // 33
console.log(arr3.at(-2)); // 22


console.log("arr3".at(-2)); // rr

// forEach() loop

// already defined above:- const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


//  DIFF BETWEEN FOR OF LOOP AND FOOR EACH LOOP

// for(const movement of movements){
for(const [i,movement] of movements.entries()){ // geting index value
  if(movement > 0) console.log(`Movement ${i+1}: You deposited ${movement}`);
  else console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
}

console.log('---- forEach ----');
// forEach : forEach is HOF it work on the basis of callBack function 

movements.forEach(function(movement, index, array){ // order matters of args: (currentElement, curr_index, entire_array) // current_index and entire_array is optional
  // console.log(array); // whole array was passed as argument
  if(movement > 0) console.log(`Movement ${index+1}: You deposited ${movement}`);
  else console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
});

// IMP : continue; and brak; wan't work in forEeach loop

// forEack with maps ans set

// MAPS:

// already above just for reffrence in here:
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

currencies.forEach(function(currValue, key, entireMap){
  console.log(`${key}: ${currValue}`);
});

// USD: United States dollar
// 176 EUR: Euro
// 176 GBP: Pound sterling


// SET:

const uniqueCurrencies = new Set(['INR', 'INR', 'USD', 'EUR', 'EUR']);

// uniqueCurrencies.forEach(function(value,justSameAsValue,wholeSet){ // set does not have either 'index' or nor 'key' so it is like (curren_value,current_value,entireSet)     so use this below
uniqueCurrencies.forEach(function(value, _ ,wholeSet){ // set does not have either 'index' or nor 'key' so it is like (curren_value,current_value,entireSet)
  console.log(`${value} : ${value}`); 
});

// underscore ( _ )it's just a throw away varible or say ignore variable by js devloper convensions

// INR : INR
// 189 USD : USD
// 189 EUR : EUR




// ----------------------- MAP, FILTER, REDUCE -----------------------

// create new array after transforming from other array

// MAP:

// already defined above:- const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements to movementsRUP (rupees)

const movementRUP = movements.map(function(curr_el){
  return curr_el * 80; // return a el of new array for current position
});

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]
console.log(movementRUP); // [16000, 36000, -32000, 240000, -52000, -10400, 5600, 104000]

// forEach --> perform side efeects inside it's call back function which is to log somthing
// map --> perform operation and returns to create a brand new array (more aligned to functional programming)


// FILTER:

const depositsArr = movements.filter(function(curr_ammount){
  // deposit filter: amount > 0
  // if(curr_ammount > 0) return curr_ammount;
  //            OR
  return curr_ammount > 0; // return boolian (kind of) --> it's like if current_ammount > 0 then include it else do nothing
});

console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300] <<- orignal
console.log(depositsArr); // [200, 450, 3000, 70, 1300]

// above deposit thing can also be done using forOf loop but what if it was large calculation, hence we can use channing using this loops like:-> arr.filter().map().reduce()

const withdrawals = movements.filter(curr_ammount => curr_ammount < 0);
console.log(withdrawals); // [-400, -650, -130]


// REDUCE: to one value

// balance is a one value
const balance = movements.reduce(function(accumulator,curr_element,index,entire_array){
  console.log(`Iteration No: ${index} Value of Accumulator is: ${accumulator}`);
  return accumulator + curr_element;
}, 0); // <-- initial value, default it's 0

console.log(balance);

// Iteration No: 0 Value of Accumulator is: 0
// Iteration No: 1 Value of Accumulator is: 200
// Iteration No: 2 Value of Accumulator is: 650
// Iteration No: 3 Value of Accumulator is: 250
// Iteration No: 4 Value of Accumulator is: 3250
// Iteration No: 5 Value of Accumulator is: 2600
// Iteration No: 6 Value of Accumulator is: 2470
// Iteration No: 7 Value of Accumulator is: 2540
// 3840 <<-- accumulator it self


// reduce or reduce's accumulatror variable is not just oncy use to accumulate somthing it can aslo be use for other purpos such as finding max/min value in an array, etc.

const max = movements.reduce((max_till,mov)=>{
  if(max_till > mov) return max_till;
  else return mov; // return crrent value as max till now  
}, movements[0]);
console.log(max); // 3000



// ---------- MAGIC OF CHAINING METHODS -------------------
// we can only chain methods one after if they return an array ex:
// filter --> map
// map --> filter

// use reduce as last method in chain: ex:- filter-->map-->map-->reduce


// do not overuse chaining
// if huge array and has multiple chained methods then introduce performance issues
// it is bad bractice to chain orignal array mutable methods such as (splice and reverse, etc)






// ---------------------- FIND method -------------------------------

// return the first element in an array that satisfy that condition

const findFirstWithdrawals = movements.find(mov=> mov<0);
console.log(findFirstWithdrawals); // -400

// use case: find specific objec in an array of objects

const acc = accounts.find(cur_acc => cur_acc.owner === 'Jonas Schmedtmann');
console.log(acc); // {owner: 'Jonas Schmedtmann', movements: Array(8), interestRate: 1.2, pin: 1111, username: 'js'}

// treditional way:-
// for(const acco of accounts){
//   if(acco.owner === 'Jonas Schmedtmann'){
//     console.log(acco);
//     break;
//   }
// }

for (const key in accounts) {
  // if (Object.hasOwnProperty.call(accounts, key)) {
  //   const element = accounts[key];
  //   console.log(element);
  // }
  console.log(account+key);
}



// --------------- findIndex() -------------------------
// returns the index of found element


// --------------- some() -------------------------


// EQUALITY
console.log(movements.includes(-130)); // true <-- treditional way


// CONDITIONS
// does movements's conatin some or any deposit greater then 2000

console.log(movements.some(mov => mov > 2000)); // true


console.log(movements.some(mov => mov === -130)); // true




// --------------- every() -------------------------
// every element must satisfy this condition in an array

// ex: - does the movements array every element id greater then 100 or less then 100

console.log(movements.every(mov => mov >= 100 || mov <= 100)); // true

// is all positive deposits
console.log(movements.every(mov => mov > 0)); // false


// --------------- flat() -------------------------

// for array:
const arr = [[1,2,3,4],[5,6,7,8],9,10]; // one depth array

console.log(arr.flat());

const arr2 = [[1,[2,3],4],[[5,6],7,8],9,10]; // two depth array

console.log(arr2.flat(1)); // [1, Array(2), 4, Array(2), 7, 8, 9, 10]
console.log(arr2.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]







// suppose you have to calculate the balanace (combined) of all the accounts in youre bank which is some sort of nested in objectsa nad array, etc.

//                         accounts array has 4 obj --> then map (another use of map or trick) will return all that array in single array --> on which flat is applyed             
// const allAcountBalanace = accounts.map(acc => acc.movements).flat().reduce((acc,mov) => acc + mov, 0);
// console.log(allAcountBalanace); // 17840

// [Array(8), Array(8), Array(8), Array(5)]
// [200, 450, -400, 3000, -650, -130, 70, 1300, 5000, 3400, -150, -790, -3210, -1000, 8500, -30, 200, -200, 340, -300, -20, 50, 400, -460, 430, 1000, 700, 50, 90]
// 17840


// IMP: so using a map first and flatening the result is very common so we got:-
// above example with flatMap

// ONLY ONE LEVEL DEEP

const allAcountBalanace2 = accounts.flatMap(acc => acc.movements).reduce((acc,mov) => acc + mov, 0);
console.log(allAcountBalanace2); // 17840




// --------------- SORTING -------------------------

// IMP:-

// mutates the orignal array 
// It do sorting on the basic of string ex:-
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70] <-- incorrectotely sorted
//                                |-1,   -4,   -6  | 1,    2,   3,    4,   7 | 

const arr = ['j','z','a','m'];
console.log(arr.sort()); // ['a', 'j', 'm', 'z']
console.log(arr); 


// correct sorting:-

// agar 'switch' krna hai ex: 450 (A) -400 (B) toh return 1 (any positive no ) else agar switch nahi krn hai toh return -1 (any negative no)

// sort in assending order:
// 450 (curr_val) > -400 (next_val), yes we want to switch, then return -1

// if switch --> 1
// if no switch --> -1


// ascending 
// movements.sort((current_val, next_val)=>{
//   if(current_val > next_val) return 1;
//   if(current_val < next_val) return -1;
// })

// console.log(movements); // ascending :- [-650, -400, -130, 70, 200, 450, 1300, 3000]
// or
movements.sort((a, b)=> a - b); // IMP: only work for accending and with numbers only
// 2 - 4 = - 2 (means no switch)
// 4 - 2 =  2 (means no switch)
console.log(movements); // asscending :- [-650, -400, -130, 70, 200, 450, 1300, 3000]


// decending

// movements.sort((current_val, next_val)=>{
//   if(current_val > next_val) return -1;
//   if(current_val < next_val) return 1;
// })

// console.log(movements); // ascending :- [3000, 1300, 450, 200, 70, -130, -400, -650]




// --------------- Programeaticaly creating and filling an array -------------------------

// IPM: fill mutate the orignal array


// til now we are creating array like this:-
console.log([1,2,3,4,5]);
console.log(new Array(1,2,3,4,5));
let arr = [1,2,3,4,5]; console.log(arr);

// const x = new Array(8);
// console.log(x); // [empty × 8]

// const x = new Array(8).fill(1);
// console.log(x); // [1, 1, 1, 1, 1, 1, 1, 1]

// const x = new Array(8)  <-- EMPTY ARRAY


const x = new Array(8).fill(1,3,6); // where to start filling (inclusive) where to end (exclusive)
console.log(x); // [empty × 3, 1, 1, empty × 2]

const y = [1,2,3,4,5,6,7];
y.fill(24,2,5);
console.log(y); // [1, 2, 24, 24, 24, 6, 7]

// what if we want to create array like this [1,2,3,4,5] programeticaly

// -------- Array.from() -----------

const z = Array.from({length : 7}, () => 1); 
console.log(z); // [1, 1, 1, 1, 1, 1, 1]


// const p = Array.from({length : 7}, (curr, i) => i+1); 
const p = Array.from({length : 7}, (_, i) => i+1); 
console.log(p); // [1, 2, 3, 4, 5, 6, 7

// create an array with 100 randome dice roll


const dice1000 = Array.from({length : 100}, () => Math.trunc(Math.random() * 6 + 1)); 
console.log(dice1000); // [5, 1, 6, 4, 1, 1, 3, 4, 3, 4, 1, 2, 3, 2, 6, 4, 1, 3, 2, 2, 5, 5, 4, 5, 4,
// 2, 6, 4, 2, 4, 5, 1, 5, 1, 6, 1, 2, 1, 4, 4, 6, 5, 6, 2, 2, 3, 6, 2, 4, 4, 1, 6, 3, 4, 4, 6, 1, 4, 2,
// 3, 1, 1, 4, 4, 3, 4, 1, 5, 6, 4, 4, 3, 1, 4, 1, 4, 5, 5, 2, 6, 3, 1, 3, 4, 4, 3, 6, 3, 5, 1, 2, 6, 1,
// 1, 5, 5, 6, 1, 1, 1]


// REAL USE CASE OF Array.from() it means you can create array from (any iterables) even iterables like node list which was returned by querySelectorAll which is not an actual array, so we can convert into into real array so we can then fermor operations like, map, reduce, etc.

// syntex: Array.from(task, mapFun)


// labelBalance.addEventListener('click', function(){
//   const movementsFromUi = Array.from( document.querySelectorAll('.movements__value'));

//   console.log(movementsFromUi.map(el => Number(el.textContent.replace('€', '')))); // [1300, 70, -130, -650, 3000, -400, 450, 200]
// });

//                      OR


// good way
labelBalance.addEventListener('click', function(){
  const movementsFromUi = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsFromUi); // [1300, 70, -130, -650, 3000, -400, 450, 200]
});

//                    OR

const movementsFromUi2 = [... document.querySelectorAll('.movements__value')];
console.log(movementsFromUi2);
// then we have to use seprately


*/






// ------------------------ coding challenge ------------------------
/*
// 1:

const checkDogs = function(dogArrJulia, dogsArrKate){
  const allDogsArr = dogArrJulia.slice(1,dogArrJulia.length - 2);
  // console.log(allDogsArr);

  // allDogsArr.concat(dogsArrKate);

  console.log(`------ Julia Dog's ------`);
  allDogsArr.forEach(function (dogEl, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dogEl >= 3 ? `an adult, and is ${dogEl} years old` : `still a puppy`
        }`
      );
    });
    console.log(`------ Kate Dog's ------`);
  dogsArrKate.forEach(function (dogEl, i) {
    console.log(
      `Dog number ${i + 1} is ${
        dogEl >= 3 ? `an adult, and is ${dogEl} years old` : `still a puppy`
      }`
    );
  });

}


checkDogs([3,5,2,12,7],[4,1,15,8,3]);


// 2


// WRONG silly mistake:-

// const calcAvgHumanAgeAsPerDogAge = function(dogAges){
  //   // step 1: calculate the human equivalent age --> map
  //   // step 2: exclude all dog that are less then 18 human equvalent age --> filter
  //   // step 3: now calculate average --> reduce

  
  //   const avg = dogAges
  //                 .map((curr_dog_age) => {
    //                   if (curr_dog_age <= 2) return 2 * curr_dog_age;
    //                   else return 16 + curr_dog_age * 4;
    //                 })
    //                 .filter(curr_human_equivalent_age => curr_human_equivalent_age >= 18)
    //                 .reduce((avg, curr_filtered_human_equivalent_age) => avg + curr_filtered_human_equivalent_age, 0 / dogAges.length); // beacouse 'dogAges.length' is reduce in filter phase
    
    
    //   return avg;
    
    // }
    
    // const avgRes = calcAvgHumanAgeAsPerDogAge([5,2,4,1,15,8,3])
    // console.log(avgRes);  // 31.428571428571427
    // // const avgRes = calcAvgHumanAgeAsPerDogAge([16,6,10,5,6,1,4])
    // // console.log(avgRes);  // 40.5714285714285727
    
    
    
    // CORRECT:-
    
    
    
    const calcAvgHumanAgeAsPerDogAge = function(dogAges) {
      // Step 1: Calculate human equivalent ages based on dog ages
      const humanEquivalentAges = dogAges.map(curr_dog_age => {
        if (curr_dog_age <= 2) {
          return 2 * curr_dog_age;  // If dog age is <= 2
    } else {
      return 16 + curr_dog_age * 4;  // If dog age is > 2
  }
  });
  
  // Step 2: Filter out ages less than 18
  const filteredAges = humanEquivalentAges.filter(curr_human_equivalent_age => curr_human_equivalent_age >= 18);
  
  // Step 3: Calculate the average of filtered ages
  if (filteredAges.length === 0) {
    return 0;  // Return 0 if no ages are eligible
  } else {
    const sum = filteredAges.reduce((total, age) => total + age, 0);
  const average = sum / filteredAges.length;
  return average;
}
}


// const avgRes = calcAvgHumanAgeAsPerDogAge([5,2,4,1,15,8,3])
// console.log(avgRes);  // 44
const avgRes = calcAvgHumanAgeAsPerDogAge([16,6,10,5,6,1,4])
console.log(avgRes);  // 47.333333333333336





// 3: re write with arraow fun and chaining

const calcAvgHumanAgeAsPerDogAge = function(dogAges){
    // step 1: calculate the human equivalent age --> map
    // step 2: exclude all dog that are less then 18 human equvalent age --> filter
    // step 3: now calculate average --> reduce

  
    const avg = dogAges
                  .map(curr_dog_age => curr_dog_age <= 2 ? 2 * curr_dog_age : 16 + curr_dog_age * 4)
                  .filter(curr_human_equivalent_age => curr_human_equivalent_age >= 18)
                  .reduce((acc,curr_filtered_human_equivalent_age, _ , arr) => {
                      // console.log(arr.length); // filtered arr // 5
                      // console.log(dogAges.length); // orignal arr // 7
                      return acc + (curr_filtered_human_equivalent_age / arr.length);
                    },0);

                  // .reduce((acc,curr_filtered_human_equivalent_age, _ , arr) => acc + (curr_filtered_human_equivalent_age / arr.length),0);
                  
                  // .reduce((acc,curr_filtered_human_equivalent_age, _ , arr) => {
                  //     return acc + curr_filtered_human_equivalent_age;
                  //   },0 / arr.length); // X ERR: > arr is not define (coz it's outside of reduce scope)
                  
                  return avg;
    
    }
    
  // const avgRes = calcAvgHumanAgeAsPerDogAge([5,2,4,1,15,8,3])
  // console.log(avgRes);  // 44
  const avgRes = calcAvgHumanAgeAsPerDogAge([16,6,10,5,6,1,4])


// 4:

// Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
// Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:

// GOOD LUCK 😀

// 1
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
// recommendedFood = weight ** 0.75 * 28
dogs.forEach((v,i,arr)=>{
  v.recommendedFood = Math.trunc(v.weight ** 0.75 * 28);
})
// console.log(dogs);


// 2
const {curFood, recommendedFood} = dogs.find((dog)=>dog.owners.includes('Sarah'));
// console.log(`${curFood > recommendedFood ? `eating too much` : `eating too less`}`);

// 3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recommendedFood) // [{},{}]
  .map((dog) => dog.owners) // // [Array(1), Array(2)]
  .flat(); // ['Matilda', 'Sarah', 'John']

const ownersEatTooLittle = dogs
.filter((dog) => dog.curFood < dog.recommendedFood) // [{},{}]
.flatMap((dog) => dog.owners) // <-- here flatMap
console.log('ownersEatTooLittle: ', ownersEatTooLittle); // ['Alice', 'Bob', 'Michael']

// 4

console.log(`${ownersEatTooMuch.slice(0,-1).join(', ')} and ${ownersEatTooMuch.slice(-1)}'s dog eat too much`);
console.log(`${ownersEatTooLittle.slice(0,-1).join(', ')} and ${ownersEatTooLittle.slice(-1)}'s dog eat too little`);
// Matilda, Sarah and John's dog eat too much
// Alice, Bob and Michael's dog eat too little


// 5

console.log('exect ammount of food: ',dogs.some((dog)=>dog.curFood === dog.recommendedFood));

// 6

console.log('ok ammount of food: ',dogs.some((dog)=>dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10));

// 7
console.log(dogs.filter((dog)=>dog.curFood > dog.recommendedFood * 0.90 && dog.curFood < dog.recommendedFood * 1.10)); // {weight: 32, curFood: 340, owners: Array(1), recommendedFood: 376}


// 8
const dogsCopy = dogs.slice().sort((a,b)=>{
  if(a.recommendedFood < b.recommendedFood) return a.recommendedFood - b.recommendedFood;
  else return a.recommendedFood - b.recommendedFood;
})

// console.log('dogsCopy: ', dogsCopy);

*/



// ------------------------ coding challenge END ------------------------

// ------------------------ Array Method Practice ------------------------

/*
// 1
const bankDepositSum = accounts.map(mov => mov.movements).flat().filter(mov => mov > 0).reduce((acc, mov) => acc + mov );
console.log(bankDepositSum); // 25180


// 2
// const numDeposit1000 = accounts.flatMap(mov => mov.movements).filter(mov => mov >= 1000).length;
// console.log(numDeposit1000);

// using reduce
const numDeposit1000 = accounts.flatMap(mov => mov.movements).reduce((count,mov) => mov >= 1000 ? ++count : count, 0);
console.log(numDeposit1000); // 6


// 3: create an object which contain sum of all deposit and withdrawals of all account

const {deposit, withdrawls} = accounts.flatMap(mov => mov.movements).reduce((sums,mov) => {
// const sums = accounts.flatMap(mov => mov.movements).reduce((sums,mov) => {
  // mov > 0 ? sums.deposit += mov : sums.withdrawls += mov * -1;
  sums[mov > 0 ? 'deposit' : 'withdrawls'] += mov;
  return sums;
}, {deposit: 0, withdrawls : 0});

console.log(deposit ,withdrawls); // 25180 7340
// console.log(sums); // {deposit: 25180, withdrawls: 7340}

// 4: convert title case
const convertTitleCase = function(title){
  const exceptions = ['a','an','the','but','or','on','in','with'];
  const titleWordArr = title.split(' ');
  const convertedTitle = titleWordArr.reduce((acc,el)=>{
    exceptions.includes(el.toLowerCase()) ?  acc += `${el.toLowerCase()} ` : acc += `${el[0].toUpperCase()}${el.slice(1).toLowerCase()} `;
    // el.length !== 1 ? acc += `${el[0].toUpperCase()}${el.slice(1).toLowerCase()} ` : acc += `${el[0].toLowerCase()} `;
    return acc;
  },'')
  console.log(convertedTitle); // This Is a Nice Title
}

convertTitleCase('this is a nice title');
convertTitleCase('this is a nice TITLE'); // This Is a Nice Title 
convertTitleCase('this is THE nice TITLE'); // This Is a Nice Title 

 */









