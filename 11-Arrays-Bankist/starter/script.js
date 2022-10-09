'use strict';

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

console.log(
  '-----------------------Coding Challenge #1-----------------------'
);

//////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array 
(one array for each). 
For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! 
So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult 
("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀

*/
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCopy = [...dogsJulia].slice(1, -2);
  const concatArr = [...dogsJuliaCopy, ...dogsKate];

  concatArr.forEach(function (dogAge, index) {
    if (dogAge >= 3) {
      console.log(
        `Dog number ${index + 1} is an adu lt, and is ${dogAge} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

console.log('------TEST DATA 2-------');

checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//--------DATA TRANSFORMATION:MAP, FILTER , REDUCE----------

//Map metoda kreira novi niz pozivanjem funkcije za svaki element niza.
//Map metoda poziva funkciju jednom za svaki element u nizu.
//Map metoda ne izvršava funkciju za prazne elemente.
//Map metoda ne menja originalni niz.

//Filter metoda metoda kreira novi niz ispunjen elementima koji prolaze test koji obezbeđuje funkcija.
////Filter metoda ne izvršava funkciju za prazne elemente.
//Filter metoda ne menja originalni niz.

//Reduce metoda izvršava funkciju reduktora za element niza.
//Reduce metoda vraća jednu vrednost: akumulirani rezultat funkcije.
////Reduce metoda ne izvršava funkciju za prazne elemente.
//Reduce metoda ne menja originalni niz.

//Map metohod
const eurToUsd = 1.1;

const usd = movementOfAcount.map(movment => movment * eurToUsd);
const toUsd = movementOfAcount.map((movement, index) => {
  if (movement > 0) {
    return `${index + 1}:Client deposit ${movement}`;
  } else {
    return `${index + 1}:Client witdraw ${Math.abs(movement)}`;
  }
});

console.log(usd);
console.log(toUsd);

//Filter method
const deposit = movementOfAcount.filter(movement => movement > 0);

console.log(deposit);

const withdrawal = movementOfAcount.filter(movement => movement < 0);

console.log(withdrawal);

//Reduce method
const balance = movementOfAcount.reduce(
  (accumulator, currentElement, index) => {
    console.log(`Iteration ${index}:${accumulator}`);

    return accumulator + currentElement;
  },
  0
);

console.log(balance);

//max value with reduce
const maxValue = movementOfAcount.reduce((accumulator, currentElement) => {
  if (accumulator > currentElement) {
    return accumulator;
  } else {
    return currentElement;
  }
}, movementOfAcount[0]);

console.log(maxValue);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = function (ages) {
  const humanAge = ages
    .map(age => {
      if (age <= 2) {
        return 2 * age;
      } else {
        return 16 + age * 4;
      }
    })
    .filter(dog => dog > 18)
    .reduce((accumulator, currentElement) => {
      return accumulator + currentElement / ages.length;
    }, 0);

  console.log(humanAge);

  return humanAge;
};

calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

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

const displayMovments = function (movements) {
  containerMovements.innerHTML = '';

  movements.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const output = ` 
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement} eur</div>
      </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', output);
  });
};

displayMovments(account1.movements);

const createUserName = function (accounts) {
  accounts.forEach(account => {
    const userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(letters => letters[0])
      .join('');

    account.username = userName;
  });
};

createUserName(accounts);

const calcPrintBalance = function (movements) {
  const balance = movements.reduce((accumulator, currentElement) => {
    return accumulator + currentElement;
  }, 0);

  labelBalance.textContent = `${balance} EUR`;
};

calcPrintBalance(account1.movements);

const calcDisplaySummry = function (movements) {
  const incomes = movements
    .filter(movement => movement > 0)
    .reduce((accumulator, currentMov) => {
      return accumulator + currentMov;
    }, 0);

  const expense = movements
    .filter(movement => movement < 0)
    .reduce((acc, currMov) => {
      return acc + currMov;
    }, 0);

  const intrest = movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * 1.2) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => {
      return acc + int;
    }, 0);

  labelSumIn.textContent = `${incomes}EUR`;
  labelSumOut.textContent = `${Math.abs(expense)}EUR`;
  labelSumInterest.textContent = `${intrest}EUR`;
};

calcDisplaySummry(account1.movements);
