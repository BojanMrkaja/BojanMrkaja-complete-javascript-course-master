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

//find method
//find metoda vraća vrednost prvog elementa koji prođe test.
//find metoda izvršava funkciju za svaki element niza.
//find metoda vraća undefined  ako nije pronađen nijedan element.
//finde metoda ne menja originalni niz

const firstLessEl = movementOfAcount.find(mov => mov < 0);

console.log(firstLessEl);

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

//some and every methods

//some metoda proverava da li neki elementi niza prolaze test (obezbeđen kao callback funkcija)
//some metoda izvršava callback funkciju jednom za svaki element niza.
//some metoda vraća true (i zaustavlja) ako funkcija vraća true za jedan od elemenata niza.
//some metoda vraća false ako funkcija vraća false za sve elemente niza.
//some metoda ne menja originalni niz

console.log(movements);
console.log(movements.includes(-130));

const deposit2 = movements.some(mov => mov > 0);

console.log(deposit2);

//every metoda izvršava funkciju za svaki element niza.
//every metoda vraća true ako funkcija vraća true za sve elemente.
//every metoda vraća false ako funkcija vraća false za jedan element.
//every metoda ne menja originalni niz

console.log(movements.every(mov => mov > 0));

//flat and flatmap methods
const arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arrFlat.flat());

const arrDeep = [[[4, 5, 6], 2, 3], [4, [7, 6, 4], 6], 7, 8];

//pass deeped argument to flat method
console.log(arrDeep.flat(2));

//Sorting arrays

//sort metoda sortira elemente niza.
//sort metoda menja originalni niz
//sort metoda sortira elemente kao STRINGOVE po abecednom i rastućem redosledu.

const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort());

//sort with numbers

//return < 0 a, b (keep order)
//return > 0 b, a (switch order)

//Ascending
movements.sort((a, b) => a - b);

console.log(movements);

//Descending
movements.sort((a, b) => b - a);

console.log(movements);

//filling arrays
const x = new Array(7);

x.fill(1, 3);

console.log(x);

//array from method
const arrFrom = Array.from({ length: 7 }, () => 1);
console.log(arrFrom);

const count = Array.from({ length: 7 }, (_, i) => ++i);
console.log(count);

//100 random dice rolls
const rollDice = Array.from(
  { length: 100 },
  roll => (roll = Math.trunc(Math.random() * 6) + 1)
);

console.log(rollDice);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

/*
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). 
Basically, the current portion should be between 90% and 110% of the recommended portion.
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

//2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(
  `Sarah's dog is eating too ${
    sarahDog.curFood > sarahDog.recommendedFood ? 'much' : 'little'
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(owner => owner.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(owner => owner.owners);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

//6.
console.log(
  dogs.some(
    dog =>
      dog.curFood > dog.recommendedFood * 0.9 &&
      dog.curFood < dog.recommendedFood * 1.1
  )
);

//7.
const dogEatingOk = dogs.filter(
  dog =>
    dog.curFood > dog.recommendedFood * 0.9 &&
    dog.curFood < dog.recommendedFood * 1.1
);

//8.
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);

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

const accountMovments = accounts.map(acc => acc.movements);
const allBalance = accountMovments
  .flat()
  .reduce((acc, currentElement) => (acc += currentElement), 0);

console.log(allBalance);

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

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  ).map(el => Number(el.textContent.replace('eur', '')));

  console.log(movementsUI);
});

let currentAccaount;

const displayMovments = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (movement, index) {
    const type = movement > 0 ? 'deposit' : 'withdrawal';

    const output = ` 
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
        <div class="movements__date">3 days ago</div>
        <div class="movements__value">${movement}eur</div>
      </div>
  `;

    containerMovements.insertAdjacentHTML('afterbegin', output);
  });
};

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

const calcPrintBalance = function (acc) {
  const balance = acc.movements.reduce((accumulator, currentElement) => {
    return accumulator + currentElement;
  }, 0);

  acc.balance = balance;

  labelBalance.textContent = `${balance} EUR`;
};

const calcDisplaySummry = function (acc) {
  const incomes = acc.movements
    .filter(movement => movement > 0)
    .reduce((accumulator, currentMov) => {
      return accumulator + currentMov;
    }, 0);

  const expense = acc.movements
    .filter(movement => movement < 0)
    .reduce((acc, currMov) => {
      return acc + currMov;
    }, 0);

  const intrest = acc.movements
    .filter(movement => movement > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => {
      return acc + int;
    }, 0);

  labelSumIn.textContent = `${incomes}EUR`;
  labelSumOut.textContent = `${Math.abs(expense)}EUR`;
  labelSumInterest.textContent = `${intrest}EUR`;
};

const updateUI = function () {
  //Display movements
  displayMovments(currentAccaount.movements);

  //Display balance
  calcPrintBalance(currentAccaount);

  //Display summary
  calcDisplaySummry(currentAccaount);
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccaount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccaount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccaount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    updateUI();

    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const transferTo = accounts.find(
    acc => acc.username === inputTransferTo.value
  );

  if (
    amount > 0 &&
    currentAccaount.balance >= amount &&
    transferTo &&
    transferTo?.username !== currentAccaount.username
  ) {
    currentAccaount.movements.push(-amount);
    transferTo.movements.push(amount);

    updateUI();
  }

  inputTransferTo.value = '';
  inputTransferAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccaount.username &&
    Number(inputClosePin.value) === currentAccaount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccaount.username
    );

    accounts.splice(index, 1);

    containerApp.style.opacity = 0;

    inputCloseUsername.value = '';
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccaount.movements.some(mov => mov >= amount * 0.1)
  ) {
    currentAccaount.movements.push(amount);
    updateUI();
    inputLoanAmount.value = '';
  }
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovments(currentAccaount.movements, !sorted);
  sorted = !sorted;
});
