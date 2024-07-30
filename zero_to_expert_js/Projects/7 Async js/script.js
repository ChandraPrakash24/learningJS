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

// SYNTEX: new PromiseConstructor(executerFunction(resolveFunArgs1, rejectFunArg2){}) <-- it return promise

// const lotteryPromise = new Promise(function(resolve,reject){
//     if(Math.random() >= 0.5){
//         resolve('You win the lottery'); // this promise state (200 OK) is consume in .then
//     } else {
//         reject('Buying lottery is a waste of money'); // this promise state (Err) is handled in .catch
//     }
// });


// lotteryPromise is a Promise object so you can direct attach .then or .catch
// lotteryPromise.then(res => console.log(res)).catch(err => console.log(err)); // Buying lottery is a waste of money

// The above example is not really asynchronous in nature; so below is modifyed one to make it asynchronous we can wraap it into Timers or in things which return promise by deafault

// const lotteryPromise = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         if(Math.random() >= 0.5){
//             resolve('You win the lottery');
//         } else {
//             reject(new Error('Buying lottery is a waste of money'));
//         }
//     },2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err)); // Error: Buying lottery is a waste of money


// we generally use this new Promise constructor function when we have to wrapp a callBack based function into asynchronous based this is knowns as Promisifying
// callback based asynchronous behavious --> into promise based asynchronous behaviour

// ex:-
// Promisifying setTimeout ( IMP )

const wait = function(seconds) {
    return new Promise(function(resolve) {
        // timeout never fail so no need for reject args
        setTimeout(resolve,seconds * 1000); 
    });
}

// wait(2).then((res)=>{
//     // this just means no you can write any code which you want to execute after 2 (almost) seconds using 'promise based asynchronous behaviour'
//     console.log('2 second wait time');
//     console.log(res); // undefined
//     console.log(this); // Window
//     return wait(1); // new Promise for 1 second
// }).then(()=>console.log('1 second wait time'));

//output:
// 2 second wait time
// undefined
// Window
// 1 second wait time

// so multiple timer without callback hell using above method and below is the eloberated example

// PREVIOUS

// setTimeout(()=>{
//     console.log('1 seconds')
//     setTimeout(()=>{
//         console.log('2 seconds')
//         setTimeout(()=>{
//             console.log('3 seconds')
//             setTimeout(()=>{
//                 console.log('4 seconds')
//             },1000);
//         },1000);
//     },1000);
// },1000);

// NOW

// wait(1).then(_=>{
//     console.log('1 seconds')
//     return wait(1);
// })
// .then(_=>{
//     console.log('2 seconds')
//     return wait(1);
// })
// .then(_=>{
//     console.log('3 seconds')
//     return wait(1);
// })
// .then(_=>{
//     console.log('4 seconds')
//     return wait(1);
// })

// 1 seconds
// 2 seconds
// 3 seconds
// 4 seconds

// resolve and reject this are static methods on Promise() constructor
Promise.resolve('Wooooo').then(res=>console.log(res));
Promise.reject('Nooooo').catch(err=>console.log(err));



// ------- Promecifying Geolocation -------

// async in nature
// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
// console.log('getting position');

const getLoaction = function(){
    return new Promise((resolve, reject) => {
        // navigator.geolocation.getCurrentPosition(position => resolve(position),err => reject(err));
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}


// getLoaction().then(response => {
//     console.log(response)
// }).catch(err => console.log(err));

// ex:-
// whre am i by asking user's browser to give there locall position

getLoaction().then(response => {
    // const {latitude: lat, longitude: lon} = response.coords; // from browser
    // console.log(lat,lon); // 22.7195687 75.8577258 (Indore)
    // return fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`);

    return fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=54.9824031826&lon=9.2833114795&zoom=18&addressdetails=1`);
})
.then((response) => {
    if(!response?.ok) throw new Error(`Wrong Lattitude or longitude values ${response.ststus}`);
    return response.json();
})
.then((data) => {
    console.log(data?.address?.country);
})
.catch((err) => {
    console.error('Error is :- ',err);
})
.finally(() => {
    console.log('FINNALY');
});




// -------------- Coding chalange --------------

const wait = function(seconds){
    const imgContainer = document.querySelector('.images');
    const img = document.querySelector('img');
    // img.remove();

    // img.removeChild(img);
    // img.style.disply = 'none'
    // img.src = '';
    return new Promise((resolve,_ ) => {
        setTimeout(resolve, seconds * 1000); // retrun promise after 2 sec that means run resolve after 2 sec
    });
}

const createImage = function(imgPath) {
    
    return new Promise((resolve, reject) => {
        const img = document.createElement('img');
        img.setAttribute('src',imgPath);
        img.addEventListener('load',()=>{
            const imageContaner = document.querySelector('.images');
            imageContaner.insertAdjacentElement("beforeend",img);
            resolve(img); 
        })

        img.addEventListener('error',()=>{
            reject(new Error('Image not found'));
        })
    });
}

let currentInage;

createImage("img/img-1.jpg")
.then((result) => {
    // console.log(result); this result in only withing this then to hide this image we need gloabal var
    currentInage = result;
    return wait(2);
})
.then(_=>{
    currentInage.style.display= 'none';
    // createImage("img/img-2.jpg")
    // console.log(createImage("img/img-2.jpg"));
    // console.log(res);
    return createImage("img/img-2.jpg")
})
.then(result=>{
    // console.log(result);
    currentInage = result;
    return wait(2);
})
.then(_=>{
    currentInage.style.display= 'none';
    return createImage("img/img-3.jpg")
})
.catch((err) => {
    console.error(err);
});


// createImage("img/img-2.jpg") :- Implicit Behavior: The function createImage will be called and it will return a Promise. However, if you do not return this Promise from within the then handler, the Promise will not be directly passed down the chain. This means that the subsequent then handlers won't be able to wait for this Promise to resolve before they execute.
// return createImage("img/img-2.jpg") :- Explicit Behavior: By using return, you ensure that the Promise returned by createImage is passed along to the next then handler. This allows the promise chain to wait for the Promise to resolve before executing the next then in the chain.




// ----------- Async/Await -----------
// better and easyer way to consume promises

// async function logger(){}
// const logger = async () => {}
// const logger = async function() => {}

// const whichCounteryIAm = async function(countryName){
//     // fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     // .then(res=>console.log(res))
//     //           Equivalent of 
//     const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
//     console.log(response);
// }

// whichCounteryIAm('bharat');
// console.log('FIRST'); // this will run first coz above function is asynchronouesly out of the way now 

// completely making this function using async await syntex

const whichCounteryIAm = async function(countryName){
    try {
        // get current loaction using getGiolocation() 
        // const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
        // const data = await response.json();
        // console.log(data[0]);

        return `2: you are in ${countryName}`;

    } catch(err) {
        console.log(err);
        // Rejecting promise returned from asying function above so that it can propogate to catch block where it was called (beacouse this async function alsways return promise state as succesful even though it has error <-- only if you are trying to use .then and .catch where this functionis called )
        throw err;
    }
}
// whichCounteryIAm('bharat');


// we can't use .actch with async await coz where to attach that but we use try catch in general

// try{
//     let y = 2;
//     const x = 1;
//     x = 3; // TypeError: Assignment to constant variable.
// } catch(err) {
//     console.log(err); // TypeError: Assignment to constant variable.
//     //    at script.js:637:7
//     console.log(err.message); // Assignment to constant variable.
// }

// try {
//     let result = fetch('');
//     if(!result.ok) throw new Error('Error for fetch'); // IMP: always use this coz fetch will not throw any error type error it will respond in like 404 (this not error hence can'y be catch by below catch block hence we ourself need to throw error in this cas if we not found !result.ok) 

// } catch (error) {
    
// }

// -------- retruning value from async function --------

// console.log('1: below is the couentry you are in');
// console.log(whichCounteryIAm('bharat')); // Promise {<pending>} (you expect that this is goin to be a third line)
// console.log('3: above is the couentry you are in');

// solution:-

// console.log('1: below is the couentry you are in');
// whichCounteryIAm('bharat').then(res=>console.log(res))
// console.log('3: above is the couentry you are in');
// out: (now as expected)
// 1: below is the country you are in
// 3: above is the country you are in
// 2: you are in bharat


// what if you want  1 then 2 then 3 do do this place '3's code in finally of 2'nd call
// console.log('1: below is the country you are in');
// whichCounteryIAm('bharat').then(res=>console.log(res)).catch(err=>console.log(err)).finally(()=>console.log('3: above is the country you are in'))
// 1: below is the country you are in
// 2: you are in bharat
// 3: above is the country you are in


// converting above code into pure async/await pattern

// console.log('1: below is the couentry you are in');
// (async function(){
//     try {
//         const res = await whichCounteryIAm('bharat');
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
//     console.log('3: above is the couentry you are in');
// })();

// it produce weard error:-
// (async function() {
//     try {
//         const res = await whichCounteryIAm('usa');
//         console.log(res);
//     } catch (error) {
//         console.log(error);
//     }
//     console.log('1: below is the country you are in');
//     console.log('3: above is the country you are in');
// })();



// ------------- Running Promises in Parallel -------------

// const convertIntoJSON = async function(responseData){

//     if(!responseData.ok) throw new Error('Error during fetch like 404');

//     const [data] = await responseData.json();

//         // const {capital} = data; // ['New Delhi']
//         const {capital} = data; // ['New Delhi']
//         // console.log(...data.capital); // New Delhi

//         // return capital[0]; //  we can do this as well then no need to spread in below function return
//         return capital; // [New Delhi]
// }


// const get4CouentryCapitalArray = async function(c1,c2,c3,c4) {
//     try {
//         const response1 = await fetch(`https://restcountries.com/v3.1/name/${c1}`);
//         const response2 = await fetch(`https://restcountries.com/v3.1/name/${c2}`);
//         const response3 = await fetch(`https://restcountries.com/v3.1/name/${c3}`);
//         const response4 = await fetch(`https://restcountries.com/v3.1/name/${c4}`);

//         const data1 = await convertIntoJSON(response1);
//         const data2 = await convertIntoJSON(response2);
//         const data3 = await convertIntoJSON(response3);
//         const data4 = await convertIntoJSON(response4);



//         // throw new Error('sample error');

//         return [...data1,...data2,...data3,...data4];
//     } catch (err) {
//         console.log(err);
//         throw err;
//     }
// }

// // Usage example:
// const country1 = 'usa';
// const country2 = 'canada';
// const country3 = 'india';
// const country4 = 'australia';

// if use just like this it will log:-
// const capitalArr = get4CouentryCapitalArray(country1, country2, country3, country4);
// console.log('capitalArr: ', capitalArr); // capitalArr:  Promise {<pending>}

//you can use .then() .catch() like (no need for capitalArr var as well):-
// get4CouentryCapitalArray(country1, country2, country3, country4)
// .then((result) => {
//     console.log(result); // ['Washington, D.C.', 'Ottawa', 'New Delhi', 'Canberra']
// }).catch((err) => {
//     console.log(err);
// });


// also you can use iffi

// (async function(){
//     const result = await get4CouentryCapitalArray(country1, country2, country3, country4);
//     console.log(result);
// })();

// the above ex is not realy parallel
// to make above example to run all the fetch in parralle you can use Promise.all()
// this function takes the array of promises thwn it will rerturn the new promise which will then run all the promises in the array simultaniously
// if one promise reject --> entire promises reject
// this operations like featching a data is non depend on each other henece we use Promise.all()


const convertIntoJSON = async function(responseData) {
    if (!responseData.ok) throw new Error('Error during fetch like 404');
    const [data] = await responseData.json();
    const { capital } = data;
    return capital;
}

const get4CountryCapitalArray = async function(c1, c2, c3, c4) {
    try {
        const urls = [
            `https://restcountries.com/v3.1/name/${c1}`,
            `https://restcountries.com/v3.1/name/${c2}`,
            `https://restcountries.com/v3.1/name/${c3}`,
            `https://restcountries.com/v3.1/name/${c4}`
        ];

        const responses = await Promise.all(urls.map(url => fetch(url)));
        console.log('responses: ', responses); // [Response, Response, Response, Response]
        const dataArray = await Promise.all(responses.map(response => convertIntoJSON(response)));
        console.log('dataArray: ', dataArray); // [Array(1), Array(1), Array(1), Array(1)]

        return dataArray.flat(); // Flatten the array of arrays into a single array
    } catch (err) {
        console.error(err);
        throw err;
    }
}

const country1 = 'usa';
const country2 = 'canada';
const country3 = 'india';
const country4 = 'australia';

get4CountryCapitalArray(country1, country2, country3, country4)
    .then(capitals => {
        console.log('Capitals:', capitals);
    })
    .catch(err => {
        console.error('Error:', err);
    });


// More static combinators like .all :-

// 1: .race() // return promise from promise array
// result = which request settele first(no matter resolve (success) or rejected) (in terms of network response)

(async ()=>{
    const result = await Promise.race(
        [
            fetch('https://restcountries.com/v3.1/name/usa'),
            fetch('https://restcountries.com/v3.1/name/bharat'),
            fetch('https://restcountries.com/v3.1/name/nepal'),
            fetch('https://restcountries.com/v3.1/name/bhutan'),
        ]
    );
    console.log(result);
})();

// use case : if you want one of the promise from that all the promise in that array finish before certain time then use an abort timer

// const abortTimer = function(second) {
//     return new Promise((_,reject) => {
//         setTimeout(()=>reject('tok long rime to run hence aboarted'),second * 1000);
//     })
// }

// this syntex of function worked but above one won't
function abortTimer(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Timeout occurred');
        }, second * 1000);
    });
}

(async ()=>{
    try {
        const res = await Promise.race([
            fetch('https://restcountries.com/v3.1/name/nepal'),
            fetch('https://restcountries.com/v3.1/name/bhutan'),
            abortTimer(1)
        ]);
        console.log('is aborated request:', res);
    } catch (err) {
        console.log(err);
    }
})();



// .allSettled

// take array of promises and return all the setteled promises (no matter resolve or rejected)
// In Promise.all() if one call got rejected all rejected, but in .allSettled do not short circuits

Promise.allSettled([
    Promise.resolve('resolve 1'),
    Promise.reject('404 bad gateway'),
    Promise.resolve('resolve 2')
]).then(response=>console.log(response)).catch(err=>console.log(err));

// [{…}, {…}, {…}] // this is response (not error)
//     0:{status: 'fulfilled', value: 'resolve 1'}
//     1:{status: 'rejected', reason: '404 bad gateway'}
//     2:{status: 'fulfilled', value: 'resolve 2'}
//     length:3
//     [[Prototype]]:Array(0)


// if above example was use with .all() : Promise.all([ --< only log '404 bad gateway' beacouse it sort circuits

// async version:
// async function example() {
//     try {
//         const response = await Promise.allSettled([
//             Promise.resolve('resolve 1'),
//             Promise.reject('404 bad gateway'),
//             Promise.resolve('resolve 2')
//         ]);
//         console.log(response);
//     } catch (err) {
//         console.log(err);
//     }
// }

// example();



// .any()
// return first fullfiled promise, and rejected one are ignored unless all are rejected it is kind of same as .race() but race will return reject as well. 
Promise.any([
    Promise.resolve('resolve 1'),
    Promise.reject('404 bad gateway'),
    Promise.resolve('resolve 2')
]).then(response=>console.log('from ANY',response)).catch(err=>console.log(err));
// from ANY resolve 1

*/

// ---- Coding challenge -----
















