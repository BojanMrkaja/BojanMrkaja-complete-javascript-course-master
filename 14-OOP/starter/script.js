'use strict';
/*
WHAT IS OBJECT-ORIENTED PROGRAMMING (OOP)??

-OOP je u sustini stil programiranja(kako pisemo i organizujemo kod)zasnovano na konceptu objekata.
-Koristimo objekte(OOP) da opisemo stvarni svijet(user ili todo list item) ili apstrakne karakteristike(HTML komponente ili strukture baze podataka).
-Objekti mogu da sadrze podatke(properties) i kode (methods).
-Koristeci objekte,pakujemo podatke(properties) i odgovarajuće ponašanje(methods) u jedan blok.
-Interakcija se desava kroz public interface(API):metode koje kode izvan objekta moze da pristupi i koristi da komunicira sa objektom.
-OOP je razvijen sa ciljem bolje organizacije koda, da kod bude vise fleksibilan i laksi za odrzavanje.

CLASSES AND INSTANCES(TRADITIONAL OOP)
-u java scriptu class je kao "nacrt" od kojeg mozemo da kreiramo novi objekat.
- 4 osnovna principa OOP-a:

1.Encapsulation:Enkapsulacija je sposobnost skladištenja povezanih informacija,
bilo podataka ili metoda, međusobno u jednom objektu.

2.Aggregation:Agregacija je sposobnost skladištenja jednog objekta unutar drugog.

3.Inheritance:Klasa može zavisiti od druge klase ili odredjenog broja klasa i naslediti njihove varijable i metode za određenu upotrebu

4.Polymorphism:Polimorfizam je potencijal koncepta OOP-a za pisanje jedne funkcije ili metode koja funkcioniše na različite načine.

OOP IN JAVASCRIPT:PROTOTYPE

Objekti su povezani sa prototype objektom.Prototype sadrzi medode kojem objekat moze da pristupi(prototypal inheritance).

3 WAYS OF IMPLEMENTING PROTOTYPAL INHERITANCE IN JAVASCRIPT:

1.Constructor functions
-tehnika kreiranja objekta kroz funkcije
-na ovaj nacin su ugradjeni objekti kao sto su Arrays ,Maps ili Sets impelementirani.

2.ES6 classes
-moderna alternativa constructor funkcijama.
-"Syntactic sugar": Ispod haube, ES6 clase rade identicno kao constructor funkcije
-ES6 clase ne rade i ne "ponasaju" se isto kao klase u klasicnom OOP.

3.Object.create()
-Najlaksi nacin povezivanja objekta sa prototype objektom.
-Ne koristi se toliko kao predhodne dve metode.
*/

const Person = function(firstName,birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  // this.calcAge = function(){
  //   console.log(2022 - this.birthYear);
  // }
}

const bojan = new Person('Bojan', 1988);

console.log(bojan);

//Add static method to constructor function
//not inherited
Person.hey = function(){
  console.log('Hey there');
}

Person.hey();


//1.New {} is created
//2.function is called, this = {}
//3.{} linked to prototype
//4.function automatically return {}

//Create new instance of Person
const boris = new Person('Boris', 1986);
const mladen = new Person('Mladen', 1966);

console.log(boris, mladen);

console.log(boris instanceof Person);//return true

//Prototype
Person.prototype.calcAge = function(){
  console.log(2022 - this.birthYear);
}

bojan.calcAge();
boris.calcAge();
mladen.calcAge();

console.log(bojan.__proto__);
console.log(bojan.__proto__ === Person.prototype); //return true
console.log(Person.prototype.isPrototypeOf(bojan));//return true
console.log(Person.prototype.isPrototypeOf(Person));//return false - confused naming convention

//setting properties on prototype

Person.prototype.species = "Homo Sapiens";

//inherit properties from prototype
console.log(bojan.species, boris.species);

//PROTOTYPAL INHERITANCE ON BUILT-IN OBJECTS(ARRAYS,MAP,SETS)
const arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6];
console.log(arr.__proto__);//return all array methods we can use, thanks to prototypal inheritance

//set custom methods on Array constructor
Array.prototype.unique = function(){
  return [...new Set(this)];
}

const noDuplicates = arr.unique();
console.log(noDuplicates);

///////////////////////////////////////
// Coding Challenge #1

/*
1. Use a constructor function to implement a Car. A car has a make and a speed property.
The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function(make, speed){
  this.make  = make;
  this.speed = speed;
}

Car.prototype.accelerate = function(){
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);


//ES6 CLASSES
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(`${this.fullName} is ${2022 - this.birthYear} years old`);
  }

  get age(){
    return 2022 - this.birthYear;
  }

  set fullName (name){
    name.includes(' ') ? this._fullName = name : alert('Full name is wrong, try again');
  }

  get fullName (){
    return this._fullName;
  }

  //Add static method to Class
  //not inherited
  static hey(){
    console.log('Hey there');
  }
}

const jessica = new PersonCl('Jessica Davis', 1988);

console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);

//SETTERS AND GETTERS
const account = {
  owner:'Bojan',
  movements:[200,300,400,500],

  get latest (){
    return this.movements.slice(-1).pop();
  },

  set latest (mov){
    this.movements.push(mov);
  }
}

console.log(account.latest);
account.latest = 50;

console.log(account.movements);

//OBJECT.CREATE
const PersonProto = {
  calcAge(){
    console.log(`${this.name} is ${2022 - this.birthYear} years old`);
  }
}

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2000;

console.log(steven);

steven.calcAge();

///////////////////////////////////////
// Coding Challenge #2

/*
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h
(but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.speed = speed;
    this.make = make;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  break() {
    this.speed -= 5;
    console.log(`${this.make} is going ${this.speed} km/h`);
  }

  get speedUS() {
    return Math.floor(this.speed / 1.6);
  }

  set speedUs (speed){
    this.speed = speed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.break();



//INHERITANCE: CONSTRUCTOR, CLASSES, OBJECT.CREATE
const Person1 = function(firstName,birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;

}

Person1.prototype.calcAge = function(){
  console.log(`${this.firstName} is ${2022 - this.birthYear} years old`);
}

const Student = function(firstName,birthYear, course){
  Person1.call(this, firstName, birthYear);
  this.course = course;
}

//link prototypes
Student.prototype = Object.create(Person1.prototype);

const mike = new Student('Mike', 2000, 'Computer Science');

Student.prototype.introduce = function(){
  console.log(`Hello I am ${this.firstName} and I am study ${this.course}`);
}

mike.introduce();
mike.calcAge();


class PersonCl1 {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge(){
    console.log(`${this.fullName} is ${2022 - this.birthYear} years old`);
  }

  get age(){
    return 2022 - this.birthYear;
  }

  set fullName (name){
    name.includes(' ') ? this._fullName = name : alert('Full name is wrong, try again');
  }

  get fullName (){
    return this._fullName;
  }

  //Add static method to Class
  //not inherited
  static hey(){
    console.log('Hey there');
  }
}

class StudentCl extends PersonCl1 {
  constructor(fullName, birthYear, course) {
    super(fullName,birthYear);
    this.course = course;
  }

  introduce(){
    console.log(`Hello I am ${this.fullName} and I am study ${this.course}`);
  }
}

const teodora = new StudentCl('Teodora Vukovic', 1989, "Mediji i komunikacije")
teodora.introduce();
teodora.calcAge();
console.log(teodora);
///////////////////////////////////////
// Coding Challenge #3

/*
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car.
Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const EV = function(make, speed , charge){
  Car.call(this, make, speed);
  this.change = charge;
}


EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
  this.change = chargeTo;
}

EV.prototype.accelerate = function(){
  this.speed += 20;
  this.change -= 1;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.change}%`);
}

const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();

//PROTECTED METHODS AND PROPERTIES
//Public fields
//Privet fields
//Public methods
//private methods
class Account {
  //Public fields(instances not prototype)
  locale = navigator.language;

  //Private fields
  #movements = [];
  #pin;
  constructor(owner, currency,pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  deposit(val){
    this.#movements.push(val);
  }

  getMovements(){
    return  this.#movements;
  }

  withdraw(val){
    this.deposit(val)
  }

  requestLoan(val){
    if(this.#approvedLoan())
      this.deposit(val);
    console.log('Loan Approved');
  }

  //Private Methods
  #approvedLoan(val){
    return true;
  }
}

const acc1 = new Account('Bojan', 'EUR' , 1111);
acc1.requestLoan(1001);
console.log(acc1.getMovements());



