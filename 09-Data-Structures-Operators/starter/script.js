'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

//Working with strings
const airliine = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]);
console.log(plane[2]);
console.log(plane[1]);
console.log(airliine.length);

//Methoda koja vraca odredjenu prvu poziciju slova u stringu
//Ako ne nadje odredjeno slovo ili element vraca -1
console.log(airliine.indexOf('r'));

//Methoda koja vraca odredjenu poslednju poziciju slova u stringu
console.log(airliine.lastIndexOf('r'));

//Slice metoda izdvaja deo stringa i vraca izvuceni deo u novom stringu
//Ova metoda uzima 2 parametra:pocetnu poziciju i krajnju poziciju(krajnja nije ukljucena)
console.log(airliine.slice(4));
console.log(airliine.slice(4, 7));
//get first word of string
console.log(airliine.slice(0, airliine.indexOf(' ')));
//get last word of string
console.log(airliine.slice(airliine.lastIndexOf(' ') + 1));

console.log(airliine.slice(-2));

const checkMiddleSeat = function (seat) {
  //B and E are midlle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got midlle seat');
  } else {
    console.log('You got lucky');
  }
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('12E');

//Menjanje svih karaktera u stringu u mala slova
console.log(airliine.toLocaleLowerCase());

//Menjanje svih karaktera u stringu u velika slova
console.log(airliine.toLocaleUpperCase());

// const passenger = 'BOjAn';
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect =
//   passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

const correctName = function (name) {
  const nameLower = name.toLocaleLowerCase();
  const nameCorrect = nameLower[0].toLocaleUpperCase() + nameLower.slice(1);

  return nameCorrect;
};

console.log(correctName('BoRiS'));
console.log(correctName('TANJa'));
console.log(correctName('FiLIp'));

const email = 'bojan@gmail.com';
const loginEmail = ' Bojan@Gmail.com ';

const lowerEmail = loginEmail.toLowerCase();
const trimedEmail = lowerEmail.trim();

console.log(trimedEmail === email);

//Replace part of strings
const priceEU = '288,93e';
const priceUS = priceEU.replace(',', '.').replace('e', '$');

console.log(priceUS);

//Replace door with gate
const announcment = 'All passenger come to boarding door 23.Bourding door 23';
console.log(announcment.replaceAll('door', 'gate'));

//Booleans
const plane1 = 'A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.startsWith('A3'));
console.log(plane1.endsWith('neo'));

const checkBaggege = function (items) {
  const itemsToLower = items.toLowerCase();
  if (itemsToLower.includes('gun') || itemsToLower.includes('knife')) {
    console.log('You are not allowed to board');
  } else {
    console.log('You can board, Welcome');
  }
};

checkBaggege('I have laptop, some food and pocket Knife');
checkBaggege('Socks and camera');
checkBaggege('Got some snacks and Gun for protection');

//Split method
console.log('a+very+nice+string'.split('+'));
console.log('Bojan Mrkaja'.split(' '));

//split with destructuring
const [firstName, lastName] = 'Bojan Mrkaja'.split(' ');

//join method
const joined = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(joined);

const capitalized = function (name) {
  const toLowerArr = name.toLowerCase().split(' ');
  const newArr = [];
  for (const n of toLowerArr) {
    newArr.push(n[0].toUpperCase() + n.slice(1));
  }

  return newArr.join(' ');
};

console.log(capitalized('bojan mrkaja'));
console.log(capitalized('boris mrkaja'));
console.log(capitalized('jessica ann smith davis'));

//Padding string
const message = 'Go to gate 23';

console.log(message.padStart(25, '+'));

const maskCreditCard = function (number) {
  const toString = String(number);
  const lastFour = toString.slice(-4);

  return lastFour.padStart(toString.length, '*');
};

console.log(maskCreditCard(26364849239));
console.log(maskCreditCard(2637478589));

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelevery: function ({ starterIndex, mainIndex, time, address }) {
    // console.log(
    //   `Oreder recived!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    // console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
//Maps
const resto = new Map();
resto.set('name', 'Tajna pite i kolaci');
resto.set(1, 'Beograd, Srbija');
resto.set(1, 'Cacak, Srbija');

resto
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 21);

// console.log(resto);
// console.log(resto.get('name'));

const qustion = new Map([
  ['question', 'What is best programming lang in world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Java Script'],
  ['corect', 3],
  [true, 'Corect'],
  [false, 'Try again'],
]);

// console.log(qustion.get('question'));

for (const [key, value] of qustion) {
  // if (typeof key === 'number') console.log(`Answer ${key} : ${value}`);
}

// const answer = Number(prompt('Your Answer'));
// console.log(answer);

// console.log(qustion.get(qustion.get('corect') === answer));

//Sets
//Set ke kolekcija unikatnih/jedinstvenih vrednosti
const orderSet = new Set(['pasta', 'pizza', 'risotto', 'pizza', 'pasta']);

// console.log(orderSet.size);
// console.log(orderSet.has('bread'));
orderSet.add('carlic bread');
// console.log(orderSet);

for (const order of orderSet) {
  // console.log(order);
}

const staff = ['Waiter', 'Chef', 'Waiter', 'Menager', 'Chef'];
const noDuplicates = staff.filter((el, index) => staff.indexOf(el) === index);

// console.log(noDuplicates);

//convert set to array
const staffUnique = [...new Set(staff)];

// console.log(staffUnique);

//for-of loop
const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu1) console.log(item);

for (const item of menu1.entries()) {
  // console.log(`${item[0] + 1}: ${item[1]}`);
}

//Rest Operator
const [one1, two, ...rest] = [1, 2, 3, 4, 5];
// console.log(one1, two, rest);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(pizza, risotto, otherFood);

// Rest operator whith functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  // console.log(sum);
};

add(2, 3);
add(2, 3, 4, 5, 6, 7);
add(3, 6, 76, 7, 8, 9, 0);

/*
Spread operator
*/
const array = [7, 8, 9];

const newArr = [1, 2, 3, ...array];

// console.log(newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

const ingridient = [
  // prompt("Let's make psta!ingrident 1?"),
  // prompt('ingrident 2?'),
  // prompt('ingrident 3?'),
];

restaurant.orderPasta(...ingridient);

// Spred operator whit Object's
const newRestourant = {
  foundedIn: 1998,
  ...restaurant,
  founder: 'Bojan Mrkaja',
};

// console.log(newRestourant);

const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Tajna';

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

/*
Destructuring Objects
*/
restaurant.orderDelevery({
  time: '22:30',
  address: 'Nikole Marakovica 13',
  starterIndex: 1,
  mainIndex: 2,
});

const { name, openingHours, categories } = restaurant;

// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

//Mutating variables
let n = 111;
let m = 999;
const obj = { n: 23, m: 7, c: 14 };
({ n, m } = obj);

// console.log(n, m);

/*
Destructuring Array's

JavaScript izraz koji omogućava raspakivanje vrednosti iz nizova ili properties-a iz objekata u različite varijable.
*/

const arr = [1, 2, 3];

const [a, b, c] = arr;

// console.log(a, b, c);

//prva dva elementa iz array-a
const [first, seccond] = restaurant.categories;
// console.log(first, seccond);

//ako zelimo da spreskocimo neki element iz array-a
const [one, , three] = restaurant.categories;

// console.log(one, three);

let [main, secondary] = restaurant.categories;

//zameniti vrednosti koristeci destrukturiranje
[main, secondary] = [secondary, main];

// console.log(main, secondary);

const [orderStarter, orderMain] = restaurant.order(1, 2);

// console.log(orderStarter, orderMain);

//destrukturiranje array-a u array-u
const nested = [1, 2, [3, 4]];

const [i, , [j, k]] = nested;

// console.log(i, j, k);

// default vrednosti ako neznamo duzinu array-a
const [q = 1, w = 1, e = 1] = [8, 9, 10];

// console.log(q, w, e);

// Coding Challenge #1
/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) 
and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },

  pritGoal: function (...numbersOfPlayers) {
    // console.log(`${numbersOfPlayers.length} was scored`);
  },
};

//1)
const [players1, players2] = game.players;

// console.log('BM:', players1);
// console.log('BD', players2);

//2)
const [goalkeeper, ...fieldPlayers] = players1;

// console.log('goalkeeper', goalkeeper);
// console.log('fieldPlayers', fieldPlayers);

//3)

const allPlayers = [...players1, ...players2];

// console.log(allPlayers);

//4)

const players1Substitute = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...players1, ...players1Substitute];

// console.log(players1Final);

//5)

const { team1, team2, x: draw } = game.odds;

// console.log(team1, team2, draw);

//6)
// game.pritGoal('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// game.pritGoal('Davies', 'Muller');

game.pritGoal(...game.scored);

//7)
// console.log(game.odds.team1 || game.odds.team2);

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//1.
for (const [index, playerName] of game.scored.entries()) {
  // console.log(`Goal ${index + 1}: ${playerName}`);
}

//2.
const odds = Object.values(game.odds);
let average = 0;

for (const odd of odds) {
  average += odd / odds.length;
}

// console.log(average);

//3
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : game[team];
  // console.log(`Odd of victory ${teamStr}: ${odd}`);
}

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

//1.
const events = [...new Set(gameEvents.values())];
// console.log(events);

//2.
gameEvents.delete(64);

//3
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

//4.
for (const [key, value] of gameEvents) {
  if (key <= 45) {
    // console.log(`[FIRST HALF] ${key}: ${value}`);
  } else if (key > 45) {
    // console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}
