'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2022-10-10T18:49:59.371Z',
    '2022-10-14T12:01:20.894Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2022-10-10T18:49:59.371Z',
    '2022-10-14T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions
const formatMovmentsDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
  const daysPassed = calcDaysPassed(new Date(), date);
  if (daysPassed === 0) return `Today`;
  if (daysPassed === 1) return `Yesterday`;
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCurrency = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovmentsDate(date, acc.locale);

    const foramattedMov = formatCurrency(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${foramattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const foramattedMov = formatCurrency(acc.balance, acc.locale, acc.currency);

  labelBalance.textContent = foramattedMov;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  );

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(
    Math.abs(out),
    acc.locale,
    acc.currency
  );

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const StartLogOutTimer = function () {
  const callBackTimer = function () {
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0);
    const sec = `${time % 60}`.padStart(2, 0);

    //in each call, print remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    //when 0 seconds , stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    time--;
  };
  //set time to 5min
  let time = 300;
  //call time every second
  callBackTimer();
  const timer = setInterval(callBackTimer, 1000);

  return timer;
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer, setTime;

//fake login
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //create current date and time
    //INTERNATIONALIZING DATES(INTL)
    const now2 = new Date();
    const year = now2.getFullYear();
    const month = `${now2.getMonth() + 1}`.padStart(2, 0);
    const day = `${now2.getDate()}`.padStart(2, 0);
    let hour = `${now2.getHours()}`.padStart(2, 0);
    let min = `${now2.getMinutes()}`.padStart(2, 0);
    let sec = `${+now.getSeconds()}`.padStart(2, 0);
    const tick = function () {
      sec++;
      if (sec === 60) {
        sec = `${0}`.padStart(2, 0);
        min++;
      }
      if (min === 60) {
        min = `${0}`.padStart(2, 0);
        hour++;
      }
      sec = `${sec++}`.padStart(2, 0);
      min = `${min++}`.padStart(2, 0);
      labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}:${sec}`;
    };

    tick();

    setTime = setInterval(tick, 1000);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = StartLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = StartLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);
    }, 3000);
    //reset timer
    clearInterval(timer);
    timer = StartLogOutTimer();
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//converting and checking numbers
console.log(23 === 23.0);

//base 10 - 0 to 9
//binary base 2 - 0 and 1
console.log(0.1 + 0.2);

//convert number to string
console.log(Number('23'));
console.log(+'22');

//Parsing
console.log(Number.parseInt('20px', 10));
console.log(Number.parseFloat('2.4rem'));

//if value is number
console.log(Number.isFinite(30));
console.log(Number.isFinite('33'));
console.log(Number.isInteger(22));
console.log(Number.isInteger('33'));

//MATH AND ROUNDING
console.log(Math.sqrt(25));

//max value
console.log(Math.max(12, 3, 55, 6, 7));
//min value
console.log(Math.min(12, 3, 55, 6, 7));

//calculate area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random numbers
console.log(Math.trunc(Math.random() * 6) + 1);

const random = (min, max) => Math.floor(Math.random() * (max - min) + 1) + min;

console.log(random(10, 20));

//rounding integers
console.log(Math.trunc(23.22));
console.log(Math.ceil(23.8));
console.log(Math.floor(22.44));

//rounding decimals
console.log((2.5).toFixed(1));
console.log((2.3).toFixed(3));

//THE REMAINDER OPERATOR
console.log(5 % 2); // 5 = 2 * 2 + 1 is reminder
console.log(8 % 3); // 8 = 3 * 2 + 2 is reminder

//if number is even
const isEven = n => n % 2 === 0;

console.log(isEven(8));
console.log(isEven(55));
console.log(isEven(188));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach((row, index) => {
    if (isEven(index)) {
      // row.style.backgroundColor = 'orangered';
    }
  });
});

//CREATE DATES

const now = new Date();

console.log(now.toISOString());

console.log(new Date(2034, 10, 19, 15, 23, 4).toISOString());

console.log(new Date(0).toISOString());

const future = new Date(2034, 10, 19, 15, 23, 4);

console.log(future.getFullYear());
console.log(future.getMonth() + 1);
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.getTime());

console.log(Date.now());

//calculating with dates
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2035, 3, 14), new Date(2035, 3, 24));
console.log(days1);

//INTERNATIONALIZING NUMBERS(INTL)

const num = 28884.23;
const options = {
  style: 'currency',
  unit: 'mile-per-hour',
  currency: 'EUR',
};
console.log('US', new Intl.NumberFormat('en-US').format(num));
console.log('SRB', new Intl.NumberFormat('sr-SP', options).format(num));

//TIMERS:SETTIMEOUT AND SETINTERVAL
const ingredients = ['olives', 'spinach'];
const pizzaTimeOut = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}`),
  3000,
  ...ingredients
);

console.log('Waiting....');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimeOut);

setInterval(function () {
  const now = new Date();
  // console.log(now);
}, 1000);
