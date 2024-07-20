'use strict';


// --> SELECT, CREATE and DELETE ELEMENT ///////////////////////////////////////

// Selecting Elements
console.log(document); // #document
console.log(document.documentElement); // html (very huge) <-- this real whole dom you can apply style to it not in above one
console.log(document.head);
console.log(document.body);

// IMP: querySelector is avialble on both element and document

const domElementHeader = document.querySelector('.header'); // it will return first html element which matches the class name
const domAllSectionEl = document.querySelectorAll('.section'); // it will return Nodelist of all matched class name
console.log('domElellment: ', domElementHeader);
console.log('domAllSectionEl: ', domAllSectionEl);

const secOne = document.getElementById('section--1');
const allBtn = document.getElementsByTagName('button'); // return HTML Collection which is live
const allBtnClass = document.getElementsByClassName('btn'); // return HTML Collection which is live
console.log('secOne: ', secOne);
console.log('allBtn: ', allBtn);
console.log('allBtnClass: ', allBtnClass);

// creating and inserting elements

// to insert use : insertAdjecentHTML()

// lets see creation

const message = document.createElement('div'); // it's not really in the dom yet // it's just a dom object that represent dom element // it is a dom object, hence we can use methods on it (it is just like when you select an element say from querySelector(), jusrt like now you can do any thing) like classList, innerHTML, etc.

message.classList.add('cookie-message');
// message.textContent = 'we use cookies for improve functanality and analytics';
message.innerHTML = `we use cookies for improve functanality and analytics<button class="btn btn--close--cookie">Got it!</button>`;


// domElementHeader.prepend(message);
// domElementHeader.append(message); // meassage element is a live element hence can be used only once, only this line shows above line has no effect // so it is also used for moving element (from first child noe this lement is last child) // this create child element (header>message) not sibling (message<->header) // to use that 'message' in other place at the same time then you have to clone it like below

// domElementHeader.prepend(message.cloneNode(true));

// .innerHTML and .textContent can be use for both "to read" and "to set"


// before and after (as a sibling <->)
domElementHeader.after(message); // here also only one is displayed, else clone it 
// domElementHeader.before(message.cloneNode(1)); // this will stay even after delete enev below seting a styple property to this element won't apply to it

// deleteing an element
document.querySelector('.btn--close--cookie').addEventListener('click',()=>message.remove())

// inserting:

// <!-- beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!-- afterend -->


// ex:-activeElem.insertAdjacentElement("beforebegin", tempDiv);

// ------- styles ---------
// this are all inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // (empty) you can get only you have seted
console.log(message.style.width); // 120%

// to get style from style.css file
console.log(getComputedStyle(message).color); // rgb(187, 187, 187)
console.log(getComputedStyle(message).height); // 43px

// supose you want to add 100px more to the already height of the message, then this is the way to do it
message.style.height = String(parseInt(getComputedStyle(message).height) + 100)+'px';

// like toogling dark mode:-
document.documentElement.style.setProperty('--color-primary','orangered')

// attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt); // Bankist logo
console.log(logo.src); // not actual path:- http://127.0.0.1:5500/zero_to_expert_js/Projects/5%20Advanced%20DOM%20Bankist-landingpage/img/logo.png <-- absolute url
console.log(logo.className); // nav__logo
// non-standerd
console.log(logo.designer); // undefine (js not know custome define attributes only standerd one is allowed)
// solution
console.log(logo.getAttribute('designer')); // cpgl

// also you can set attributes
logo.alt = 'Beautiful minimalist logo';
console.log(logo.alt); // Beautiful minimalist logo
console.log(logo.setAttribute('company','Bankist'));

console.log(logo.getAttribute('src')); // img/logo.png (relative url) use also for 'href'

// data attributes (data-....) <-- attribute in html file
// data-version-number --> camelCase
console.log(logo.dataset.versionNumber); // 3.0

// Classes
// logo.classList.add('....','....')/remove/toogle/contains

// DON'T USE (it will over-ride all the class name and allow us to only set one class name only)
// logo.className = 'dummy';


// --> Smooth Scrolling ////////////////////////////////////////////////////////////////

// 1st way (old scool)

// coordinates
// scrooling
// dimensions of the view port

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',(e)=>{
  // coordinates
  const section1Coordinates = section1.getBoundingClientRect();
  console.log(section1Coordinates); // DOMRect {x: 0, y: 639, width: 1899, height: 2012.25, top: 639, …}
  
  console.log(e.target.getBoundingClientRect()); // {x: 374.5, y: 288.078125, width: 110, height: 29, top: 288.078125, …}
  
  // scrooling
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset ); // Current scroll (X/Y) 0 149
  
  // dimensions of the view port
  console.log('height/width of viewport', document.documentElement.clientHeight, document.documentElement.clientWidth); // height/width of viewport 624 1899

  // scrolling
  // window.scrollTo(section1Coordinates.left + window.pageXOffset, section1Coordinates.top + window.pageYOffset);

  // window.scrollTo({
  //   left: section1Coordinates.left + window.pageXOffset,
  //   top: section1Coordinates.top + window.pageYOffset,
  //   behavior: "smooth"
  // });

  // 2nd way modern one
  // element we want to scroll to.scrollIntoView({})
  section1.scrollIntoView({behavior: 'smooth'});  

});

// const btnScrollTo = document.querySelector('');


// ------ types of Event and Event handlers ------

// an event is just a signal that was generated by a DOM node it can be anything like mouse hover, click, user enter into full screen mode 

// moder way
// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter',(e)=>{
//   console.log('mouse enter');
// });

// old school
// el.OnEvent

// h1.onmouseenter = (e)=>{
//   console.log('onmouseenter: mouse enter');
// } 

// why addEvent listner is better:-
// - we can attach another function to same event
//      h1.addEventListener('mouseenter',(e)=>console.log(' another function added'));
// - you can remove eventListner

const h1 = document.querySelector('h1'); // GET

const eventOnH1Id = (e)=>{
  console.log('mouse enter');

  // h1.removeEventListener('mouseenter',eventOnH1Id); // REMOVE
  
  // h1.removeEventListener('mouseleve',eventOnH1Id); // X not work event of both must be same
};

h1.addEventListener('mouseenter',eventOnH1Id); // ATTACH eventListner

// you can remove it at anywhere in the code:-

// console.log('this1');
// console.log('this2');
// console.log('this3');
// console.log('this4');

// for(let i=0;i<1000;i++) console.log(i);

// HERE: h1.removeEventListener('mouseenter',eventOnH1Id); // REMOVE

//      OR

// after 3 second

setTimeout(()=>h1.removeEventListener('mouseenter',eventOnH1Id),3000);

// (NOT USED NOW DAYS) html way of attacking evet listners like onClick() <-- in html file
// <h1 onclick="alert('from html file')" >

// IMP:
// ------ Bubbeling ------
// js event has tw propert capturing phase and bubbeling phase

// Most of the event is generated at the document level then it was propogated to the target element ( from document -> to it's grand parent ->to it's parent -> to the target element ) and this is know CAPTURING PHASE; then the event is handled at the target element this is known as TARGET PHASE; ans then the event is re-propogated upword towerds document and this is known as BUBBELING PHASE

// NOTE:
// - event can be handled during capturing phase also
// - event can be handled during bubbeling phase also
// - some types of event is generated to the target element itself


























// --> Modal window ///////////////////////////////////////

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
btnsOpenModal.forEach(btn => {
  // btnsOpenModal[i].addEventListener('click', openModal);
  btn.addEventListener('click', openModal);
});

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
