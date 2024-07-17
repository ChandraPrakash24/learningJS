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
domElementHeader.before(message); // here also only one is displayed, else clone it 
domElementHeader.after(message.cloneNode(1)); // this will stay even after delete

// deleteing an element
document.querySelector('.btn--close--cookie').addEventListener('click',()=>message.remove())


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
