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
  console.log(bookings);
};

createBooking('LH123');
createBooking('LH213', 32, 999);
