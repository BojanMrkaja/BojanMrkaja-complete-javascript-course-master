'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
    console.log(
      `Oreder recived!${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
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
      open: 0, // Open 24 hoursb
      close: 24,
    },
  },
};

restaurant.orderDelevery({
  time: '22:30',
  address: 'Nikole Marakovica 13',
  starterIndex: 1,
  mainIndex: 2,
});

/*
Destructuring Objects
*/

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
