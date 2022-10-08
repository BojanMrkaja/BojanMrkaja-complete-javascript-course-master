'use strict';

//Default parameters

const bookings = [];

const createBooking = function (
  flightNumm,
  numPassengers = 55,
  price = 299.99
) {
  const booking = {
    flightNumm,
    numPassengers,
    price,
  };

  bookings.push(booking);
  //   console.log(bookings);
};

createBooking('LH123');
createBooking('LH213', 32, 999);

//HOW PASSING ARGUMENTS WORKS: VALUE VS. REFERENCE

const flight = 'LH213';
const bojan = {
  name: 'Bojan Mrkaja',
  passport: 123475986,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LJ444';
  passenger.name = `Mr. ${passenger.name}`;

  //   passenger.passport === 1234759869
  //     ? alert('check in')
  //     : alert('Wrong passport');
};

// checkIn(flight, bojan);

// console.log(flight);
// console.log(bojan);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(bojan);
checkIn(flight, bojan);

//FIRST-CLASS AND HIGHER ORDER FUNCTION

/*
U java script programskom jeziku se koriste first class funkcije sto znaci
da se one tretiraju kao obicne vrednosti(values).

1.mozemo da skladistiomo funkcije u varijable ili properies u objektima
2.Mozemo da prosledimo funkciju kao argument u drugu funkciju
3.Mozemo da vratimo funkciju iz druge funkcije
4.Mozemo da pozivamo metodu na funkcijama

HIGHER-ORDER FUNCTION
-Funkcija koja prima neku drugu funkciju kao argument, onda vraca drugu funkciju, ili i jedno i drugo.
-Ovo je moguce zahvaljujuci first-class funkcijama

*/

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-Order function

const transformer = function (str, fn) {
  //   console.log(`Transformed string: ${fn(str)}`);
};

transformer('Java Script is the best', upperFirstWord);
transformer('Java Script is the best', oneWord);

//FUNCTION RETURNIG FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeter = greet('hey');

greeter('Bojan');

//Useing arrow function
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Zdravo')('Filipe');

//CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Bojan Mrkja');
lufthansa.book(112, 'Boris Mrkja');

const eurowings = {
  airline: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Petar Petrovic');
book.call(lufthansa, 44, 'Brankica Plazinic');

console.log(eurowings);
console.log(lufthansa);

//Apply method

const flightData = [567, 'Teodora Vukovic'];

book.apply(lufthansa, flightData);

//using spread operator to get arguments from array
book.call(eurowings, ...flightData);

//Bind method
const bookEw = book.bind(eurowings);

bookEw(24, 'Mladen Mrkaja');

//With Event Listeners

lufthansa.planes = 200;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. 
Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), 
which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). 
This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. 
Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is your favourite proramming language?',
  options: ['0:JavaScript', '1:Pyton', '2:Rust', '3:C++'],
  //This generate [0,0,0,0]
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    if (isNaN(answer) || answer < 0 || answer > 3) {
      console.log('Wrong Answer, Try again');
    } else {
      this.answers[answer]++;
      this.displayResults();
      this.displayResults('string');
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

const addAnswers = poll.registerNewAnswer;

document
  .querySelector('.poll')
  .addEventListener('click', addAnswers.bind(poll));

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

const display = poll.displayResults;

display.call({ answers: [5, 2, 3] }, 'string');

//IMMEDIATELY INVOKED FUNCTION (IIFE)

(function () {
  console.log('Run only once');
})();
