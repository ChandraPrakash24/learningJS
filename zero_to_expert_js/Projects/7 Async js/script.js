'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/*
// The GOAL of Asynchronous JavaScript is basically to deal with loang running task that run in a background. Most comman use case is to fetch data from remote servers.

// Async means: not occuring at the same time

// example of asying behaviour in js: running a timeer, loading an image, geolocation api, AJAX calls, etc.

// topic: Promises, fetch function, async await, error handling

// ----- API cal : old school way -----

const getCountrieData = function(countrieName){

const request = new XMLHttpRequest();

request.open('GET',`https://restcountries.com/v3.1/name/${countrieName}`);
request.send();
// console.log(request.responseText); // _ <-- blank coz data is not loaded yet, it's loading in background in async way // insted you can do this:

request.addEventListener('load',function(){
    // json (big string of texty in js Object format)
    console.log(this.responseText); // [{"name":{"common"..........................................})?$"}}]
    console.log( typeof this.responseText); // string
    // converting JSON into object or array of object
    // const data = JSON.parse(this.responseText);
    // const data = JSON.parse(this.responseText)[0];
    const [data] = JSON.parse(this.responseText);
    console.log(data);// [{....}]
    console.log(typeof data); // object

    // Get the first currency code available
    const currencyCode = Object.keys(data.currencies)[0];
    // const [currencyCode] = Object.keys(data.currencies);
    // console.log('currencyCode: ', currencyCode); // all key
    // console.log(data.currencies); // {INR: {....}}

    // won't work
    // const {currencies} = data;
    // console.log('currencies: ', currencies);

    // const {USD} = currencies;
    // console.log(USD);
    
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
            <p class="country__row"><span>💰</span>${data.currencies[currencyCode].name}</p>
            </div>
            </article>
            `;
            // <p class="country__row"><span>💰</span>$$$$$$$</p>
            
    countriesContainer.insertAdjacentHTML('beforeend',html);
    countriesContainer.style.opacity = 1;

});

}

getCountrieData('bharat');
getCountrieData('USA');
getCountrieData('germany');
getCountrieData('nepal');
getCountrieData('bhutan');

// how to controll which one of the above call finish first
//  how can you arrange all the line it appear


// ----- Callback Hell: when we have lots of nested callback inside of callback 'in order to execute a synchronous task in sequence' -----

// example:
setTimeout(()=>{
    console.log('1 second');
    setTimeout(()=>{
        console.log('2 second');
        setTimeout(()=>{
            console.log('3 second');
            setTimeout(()=>{
                console.log('4 second');
            },1000);
        },1000);
    },1000);
},1000);

// code hard to understand -> BAD code -> more bug -> less mantainablity



// ----- Solution of callback hell using promises: -----

// ----- Modern way of doing ajax call using fetch ----- 

// const data = fetch('https://restcountries.com/v3.1/name/bharat');
// console.log(data); // Promise {<pending>}

// An object is used as a placeholder for the future result of an asynchronous operation
//         OR
// a container for asynchronous deleverd value
//         OR
// Promise: a container for future value <--

// advantage of promise:
// promise element our dependency on (event listner) xyz.addEventListner('event', callBackFn()) and call back function
// no more nesting

// THE PROMISE LIFECYCLE :-
// 1. promises change with time automatically


//   pending ----> settled (fullfiled or rejected)

// fullfiled and rejected are 'STATES' and only satteled 'once'
// you can't change state once it satteled

// ------- Consuming a promise using .then -------

// ALSO WORK with ".then" nesting but it's bad practice
// const getCounteryData = function(name){
//     fetch(`https://restcountries.com/v3.1/name/${name}`).then(function(response){
//         console.log(response);
//         response.json().then(function(data) {
//             console.log(data);
//         })
//     })
// }

// work seperately
// const getCounteryData = function (name) {
//     // <promisePending>.then()
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//         .then(function (response) {
//             console.log(response);
//             return response.json(); // genearte new promise
//         }).then(function (data) { // handeling json() promise
//             console.log(data);
//         })
// }

// cleaner version:
// const getCounteryData = name => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//         .then(response => response.json())
//         .then(data => console.log(data))
// }

// getCounteryData('bharat');
// getCounteryData('bharat');

// chaining promises:
// chaining two sequential call:

// const getCounteryData = name => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         // chaining
//         console.log(data[0].borders?.[0])
//         const neighbour = data[0].borders?.[0];
//         console.log(neighbour);
//         return neighbour;
//     })
//     .then(data2 => {
//         console.log('data2 === neighbour',data2);
//         return fetch(`https://restcountries.com/v3.1/alpha/${data2}`);
//     })
//     .then(neighbourResponse => {
//         console.log(neighbourResponse);
//         return neighbourResponse.json();
//     })
//     .then(neighbourData => console.log(neighbourData))
// }

// getCounteryData('bharat');

// even cleaner version of then chaining looks messy

// const getCounteryData = name => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => response.json())
//     .then(data => data[0].borders?.[0]) // we are not doing console.log(data of first couentry here)
//     .then(data2 => fetch(`https://restcountries.com/v3.1/alpha/${data2}`))
//     .then(neighbourResponse => neighbourResponse.json())
//     .then(neighbourData => console.log(neighbourData))
// }

// getCounteryData('bharat');

// .then(data => data[0].borders?.[0]) // we are not doing console.log(data of first couentry here)
// .then(data2 => fetch(`https://restcountries.com/v3.1/alpha/${data2}`))
//                               ===
// .then(data => fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders?.[0]}`))


// THEN HELL:-

// .then
//    .then
//      .then.
//         .then

// FLAT THEN CHAIN:-

// .then
// .then
// .then
// .then


// ---------- Error Handling ----------

// const getCounteryData = name => {
//     fetch(`https://restcountries.com/v3.1/name/${name}`)
//     .then(response => response.json(), err => console.log('ERROR:',err))
//     .then(data => data[0].borders?.[0]) // we are not doing console.log(data of first couentry here)
//     .then(data2 => fetch(`https://restcountries.com/v3.1/alpha/${data2}`))
//     .then(neighbourResponse =>{ neighbourResponse.json();
//         throw Error('I was constructed via the "new" keyword!');
//     })
//     .then(neighbourData => console.log(neighbourData))
//     // .then(neighbourData => console.log(neighbourData), err => console.log(err))
//     // SYNTEX: .then(()=>{},(err)=>err) <- second colback for error in .then
//     .catch(err => console.log(err)) // ALSO GLOBAL ERROR HANDLE USING .catch AT THE LAST OF .then CHAIN
//     // catch also return promise then finally consume it
//     .finally(()=>{
//         // it always run no matter the state of promise (fullfiled or rejected)
//         // use to hide loading spinner at the end
//     });
// }

// getCounteryData('bharat');

// ----------- throw new Error('message') -----------

const getCounteryData = name => {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(response => {
        if(!response.ok) throw new Error(`No couentry with this name: ${response.message}`);
        return response.json();
    })
    .then(data => data[0].borders?.[0]) // we are not doing console.log(data of first couentry here)
    .then(data2 => fetch(`https://restcountries.com/v3.1/alpha/${data2}`))
    .then(neighbourResponse =>neighbourResponse.json())
    .then(neighbourData => console.log(neighbourData))
    .catch(err => console.error('No country:',err))
    .finally(()=>{
        console.log('finaly');
    });
}

getCounteryData('utuy');


// throw is ;ike break; or return;
// throw also rejects promise (nullify it)
// .catch is more suitable with throw new Error
// .catch can handle all kinds of error (from fetch as well as from then) and even travelling error form previous then downwords
// second collback of .then is used to handle error of that 'individual' then only

//ex:
// fetch('https://example.com/data')
//   .then(response => {
//     if (!response.ok) { throw new Error('Network response was not ok'); } <-- IMP: do by yourself
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


// REVERSE GEOCODE URL:_

// https://nominatim.openstreetmap.org/reverse?format=json&lat=54.9824031826&lon=9.2833114795&zoom=18&addressdetails=1
// https://nominatim.openstreetmap.org/reverse?format=json&lat=19.0760&lon=72.8777
// https://geocode.xyz/51.50354,-0.12768?geoit=xml
// https://www.geonames.org/findNearbyPlaceName?lat=40.65&lng=-73.78



// CODING CHALLENGE:-
// which couentry i am base on lattitude and longitude

const whereAmI = function(lat,lon) {
    // fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lon=${lon}&zoom=18&addressdetails=1`) // BAD REQUEST
    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`)
    .then((response) => {
        if(!response?.ok) throw new Error(`Wrong Lattitude or longitude values ${response.ststus}`);
        return response.json();
    })
    // (err)=>console.log("ERR:",err))
    .then((data) => {
        console.log(data?.address?.country);
    })
    .catch((err) => {
        console.error('Error is :- ',err);
    })
    .finally(() => {
        console.log('FINNALY');
    });
}

whereAmI(54.9824031826,9.2833114795); //denmark
// whereAmI(789.9824031826,9.2833114795); //undefine

*/

// ------------- Event Loop in Practice (micro task queue > callback queue) -------------

// Callstack (Global execution context)         WEB API Environment(async task like loading image, fetch ap, dom , timer, getGeoCorrdinate, etc. )
//  event loop       <->       micro task queue
//                             callback queue   

// guess the order of the output:

console.log('Start');
setTimeout(()=>console.log('Timer'),0);
Promise.resolve('Resolved Promise').then(res => console.log(res));
console.log('End');

// Start
// End
// Resolved Promise
// Timer



// Even though timer appear earlier about 0.000000000001 second and you think why event loop nort executed this first then, so event loop not work like that, leet go through the flow of event loop


// 1: first event loop watches the aomplition of all top level code in callstack
// 2: then event loop go to "Callback queue" from the path of "microtask queue"
// 3: then if micro task is empty, then it will push one callback task to callstack and then agin emideately just after one task it watch the microtask room agin and if found one or many micro task then the event loop executes all of them first then rest of the reamaning callback queue is handled.


// IMP: callBack queue is "time irrelevent" like is it possible that like an setTimeout is set to run in 5 sec it ill going to rubn in 10, or 12 or any sec if ther is lots of upfront task are pending in microtask queue or in callback queue



// Event Loop Mechanics :-
// Execution of Synchronous Code: JavaScript executes the synchronous code first, line by line.

// Queueing of Tasks:

// Microtasks (or Job Queue): Promises and other microtasks are queued in the microtask queue. Microtasks are generally executed immediately after the currently executing script and before any I/O tasks or other macrotasks.
// Macrotasks (or Callback Queue): setTimeout, setInterval, and other asynchronous APIs place their callbacks in the macrotask queue. These tasks are scheduled to be executed after the microtask queue has been cleared.
// Handling Tasks:

// Microtasks Execution: After executing the current synchronous code, the event loop will process all microtasks before moving on to macrotasks. This ensures that promise callbacks are executed as soon as possible after the current script execution.
// Macrotasks Execution: Once the microtask queue is empty, the event loop will process one macrotask from the callback queue.


// Guess the output 2:-

console.log('Start');
setTimeout(()=>console.log('Timer'),2000);
Promise.resolve('Resolved Promise').then(res => console.log(res));
Promise.resolve('Holding timer').then(res => {
    // for loop from i = 0 to i < 1000000000000000000 ->> [for(.....) {//do nothing}] 
    console.log(res)
});
console.log('End');

// Start
// End
// Resolved Promise
// Holding timer (> after ~15 seconds due to heavy computation)
// Timer (after additional ~2 seconds, so total around 17 seconds)

// IMP :- so JS timer like setTimer or setInterval are very bad to use for very persiosion task related to time or any interval's of duretion speacialy in cunjustion with promises


// --------------- Creating Promises ---------------






