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


