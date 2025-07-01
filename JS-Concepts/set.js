
// Map
const myMap = new Map();

myMap.set('name', "Hepsi")
myMap.set("age",35)


console.log(myMap.has('age'));
console.log(myMap.get('age'));


//Set
const mySet = new Set();

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(2)


console.log(mySet.size)
//WeakMap
const wm = new WeakMap();
let obj = {};

wm.set(obj, 'Some value');
console.log(wm.get(obj)); // Some value

obj = null; // Now the object can be garbage collected

//WeakSet
const ws = new WeakSet();
let user = { name: 'Bob' };

ws.add(user);
console.log(ws.has(user)); // true

user = null; // Now eligible for garbage collection

//call

const animal = {
  speak: function() {
    console.log(`${this.name} makes a sound.`);
  }
};

const dog = { name: "Buddy" };

animal.speak.call(dog); // Buddy makes a sound.


//apply ✅ apply is useful when a function expects separate arguments but you have them in an array.
const numbers = [3, 6, 1, 8];

//const max = Math.max.apply(null, numbers); or
const max = Math.max( ...numbers);
//Use ...numbers (spread syntax) — it’s cleaner, modern, and easier to read.

//apply() was the go-to before ES6 introduced the spread operator.
console.log(max); // 8


//bind() ✅ bind is perfect when you want to preserve this for later (e.g., with timers or event handlers).
const user = {
  name: "Dana",
  greet: function() {
    console.log(`Welcome, ${this.name}`);
  }
};

const greetLater = user.greet.bind(user);

setTimeout(greetLater, 1000); // Welcome, Dana (after 1 second)


const person = {
  name: "Alice",
  greet: function() {
    console.log(`Hi, I'm ${this.name}`);
  }
};

const greetFn = person.greet;
greetFn(); // ❌ "this" is undefined or window — not person

const boundGreet = person.greet.bind(person);
boundGreet(); // ✅ Hi, I'm Alice
//🔒 bind() locks this to person, so even if we call boundGreet() elsewhere, it always uses the correct this.


