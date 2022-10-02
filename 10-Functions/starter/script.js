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
