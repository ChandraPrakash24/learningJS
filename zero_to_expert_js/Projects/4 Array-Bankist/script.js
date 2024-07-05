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


// --> displaying movements (on UI) ////////////////////////////////////////////
const displayMovements = function(movements, entire_current_acc){

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



  // --> display balance (on UI)
  const displayBalance = function(movements_array){
    labelBalance.innerText = '';
    const balance = movements_array.reduce((acc,amount)=> acc + amount, 0);
    
    labelBalance.innerText = balance + '€';
  }
  displayBalance(movements);
  



  // --> display transaction summery (on UI)

  const displayTransactionSummery = function(curr_account){
    const income = curr_account.movements.filter(mov => mov > 0).reduce((acc,mov) => acc + mov, 0);
    labelSumIn.textContent = `${income}€`;

    const spendeature = curr_account.movements.filter(mov => mov < 0).reduce((acc,mov) => acc + mov, 0);
    labelSumOut.textContent = `${Math.abs(spendeature)}€`;

    // intrest on each deposit of 1.2 %
    const interest = curr_account.movements
      .filter((mov) => mov > 0)
      .map((mov) => (mov * curr_account.interestRate) / 100) // task: bak new rule:- bank only payes intrest if it is atlears 1€
      .filter((int, _ , arr) => { // this array is returned by aboev method and we are currently workong on it
        // console.log(arr); // [2.4, 5.4, 36, 0.84, 15.6] // 0.84 <-- not paying this intrest 
        return int >= 1;
      })
      .reduce((acc, int) => acc + int, 0);   // before new rule 60.24€, after 60.24 - 0.84 = 59.4€
    labelSumInterest.textContent = `${interest}€`;
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

    displayMovements(currentAccount.movements, currentAccount);
  }
  
  
  // console.log(currentAccount); // we ahve acces to current user coz it was defined globally using let
});

// --> Get Loan functaniality (on UI) ////////////////////////////////////////////////////////////////////////

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    currentAccount.movements.push(amount);
    displayMovements(currentAccount.movements, currentAccount);
  }
  inputLoanAmount.value = '';
  inputLoanAmount.blur();
});










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

*/


// --------------- SORTING -------------------------

// IMP:-

// mutates the orignal array 
// It do sorting on the basic of string ex:-
console.log(movements.sort()); // [-130, -400, -650, 1300, 200, 3000, 450, 70] <-- incorrectotely sorted


const arr = ['j','z','a','m'];
console.log(arr.sort()); // ['a', 'j', 'm', 'z']
console.log(arr); 












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
  console.log(avgRes);  // 47.333333333333336
















*/




// ------------------------ coding challenge END ------------------------




