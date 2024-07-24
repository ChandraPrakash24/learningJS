'use strict';

// 1: Constructor Function

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;

    // never do this (it will be going to get copy to every object/instance; what if it was in thousends) 
    // this.calcAge = function() {
    //     console.log(2024 - this.birthYear);
    // }

    // just try:
    // this.calcAge = function(first) {
    //     console.log(firstName); // cpgl
    //     console.log(this.firstName); // cpgl
    //     console.log(first); // yoo
    // }

}

const cpgl = new Person('cpgl',2001); // constructo function
// const cpglCalc = new Person('cpgl',2001).calcAge('yoo'); 
// console.log('cpglCalc: ', cpglCalc); // undefine

// MECHANISAM
// 1: new {} (empty obj is created) // if console.log(this) > Person {}
// 2: this keyord point to above created object
// 3: that obj is linked to prototype
// 4: that obj is returned

console.log(cpgl); // Person {firstName: 'cpgl', birthYear: 2001}
console.log(typeof cpgl); // object

// now you can create many obj/instance

const bajju = new Person('bajju',2001); // constructo function
const jack = new Person('jack',1998); // constructo function
console.log(bajju, jack);

console.log(cpgl instanceof Person); // true

let jay = "jay";
console.log(jay instanceof Person); // false

// ------ prototypes ------

//  defining or seting a prototype property of Person
// Person.prototype === is equivalent of Person.prototypePropertyOfObject/instance

console.log(Person.prototype);// 
// {}
//  calcAge:ƒ ()
// constructor:ƒ (firstName, birthYear)
// [[Prototype]]:Object

Person.prototype.calcAge = function(){
    console.log(2024 - this.birthYear);
}

cpgl.calcAge();
jack.calcAge();

console.log(cpgl.__proto__);
// {calcAge: ƒ}
//     calcAge: ƒ ()
//     constructor: ƒ (firstName, birthYear)
//     [[Prototype]]: Object



// Person [prototype] <-- it has calcAge()
//   ^         ^ it's utility

// jack.calcAge() <-- a insatance can access that Parent prototype even though it does not have that property (instacnce is linked to parent prototype)

console.log(jack.__proto__ === Person.prototype); // true

console.log(Person.prototype.isPrototypeOf(jack)); // true
console.log(Person.prototype.isPrototypeOf(bajju)); // true
console.log(Person.prototype.isPrototypeOf(Person)); // false

// you can not set any method or property of an specidic object, irt will always be go to it's parent prototype box

Person.prototype.species = 'Human';
console.log(jack.species, bajju.species); // Human Human

// species is not there own property of objects, it's in prototype of this obj whic is own by Parent
// even you can't do like this

// jack.prototype.fun = 'true'; // X // Cannot set properties of undefined (setting 'fun')

console.log(jack.hasOwnProperty('firstName')); // true
console.log(jack.hasOwnProperty('species')); // false


