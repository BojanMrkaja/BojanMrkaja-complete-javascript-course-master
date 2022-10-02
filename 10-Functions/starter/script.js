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
