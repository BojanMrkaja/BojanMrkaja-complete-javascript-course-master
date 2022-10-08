'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE METHOD
//slice metoda vraca izabrane elemente u nizu, kao novi niz
//slice metoda ne menja originalni niz
console.log(arr.slice(2));

//slice with end parameter
console.log(arr.slice(2, 4));

//negativ parameter
console.log(arr.slice(-2));

//last element of array
console.log(arr.slice(-1));

//copy array with slice
console.log(arr.slice());

//SPLICE METHOD
//splice metoda dodaje i/ili uklanja elemente iz niza
//splice metoda menja originalni niz

console.log(arr.splice(2));

//remove last element of array
console.log(arr.splice(-1));

//first parameter
//Položaj za dodavanje/uklanjanje elemenata

//second parameter
//Broj elemenata koje treba ukloniti.

//Ostali opcioni parametri
//Novi elementi za dodavanje.
console.log(arr.splice(-1, 1, 'f', 'g'));
console.log(arr);

//REVERSE METHOD
//reverse metoda menja raspored elemenata u nizu
//reverse metoda menja originalni niz

arr = ['a', 'b', 'c', 'd', 'e'];

let arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

//CONCAT METHOD
//metoda spaja dva ili više nizova.
//metoda vraća novi niz, koji sadrži spojene nizove.
//metoda ne menja originalni niz.

const letters = arr.concat(arr2);
console.log(letters);

//JOIN METHOD
//method returns an array as a string.
//metoda ne menja originalni niz.
//Može se navesti bilo koji separator. default je zarez (,)

console.log(letters.join('-'));

//LOOPING ARRAY'S:FOREACH METHOD

const movementOfAcount = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [index, movement] of movementOfAcount.entries()) {
  if (movement > 0) {
    console.log(`${index + 1}:Client deposit ${movement}`);
  } else {
    console.log(`${index + 1}:Client witdraw ${Math.abs(movement)}`);
  }
}

console.log('--------FOREACH----------');

movementOfAcount.forEach(function (movement, index) {
  if (movement > 0) {
    console.log(`${index + 1}:Client deposit ${movement}`);
  } else {
    console.log(`${index + 1}:Client witdraw ${Math.abs(movement)}`);
  }
});

//FOREACH WITH MAPS AND SETS

const currencies2 = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies2.forEach(function (value, key) {
  console.log(`${value}: ${key}`);
});

const currenciesUnique = new Set(['USD', 'EUR', 'USD', 'GBP', 'EUR', 'USD']);

console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
