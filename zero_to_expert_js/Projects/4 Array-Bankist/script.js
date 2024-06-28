'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

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

const displayMovements = function(movements){

  containerMovements.innerHTML = '';

  movements.forEach(function(moves,i){


    const type = moves > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${moves}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin',html);

  });
}

displayMovements(account1.movements);

// console.log(containerMovements.innerHTML);



























// ---------------- LECTURES ----------------

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


