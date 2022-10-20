'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

///////////////////////////////////////
/*
The HTML DOM (Document Object Model)
Kada se veb stranica učita, pretraživač kreira model objekta dokumenta stranice.
HTML DOM model je konstruisan kao stablo objekata.

Sa objektnim modelom, JavaScript dobija svu mogucnost koja mu je potrebna za kreiranje dinamičkog HTML-a:

-JavaScript može da promeni sve HTML elemente na stranici
-JavaScript može da promeni sve HTML atribute na stranici
-JavaScript može da promeni sve CSS stilove na stranici
-JavaScript može ukloniti postojeće HTML elemente i atribute
-JavaScript može dodati nove HTML elemente i atribute
-JavaScript može da reaguje na sve postojeće HTML event-e na stranici
-JavaScript može da kreira nove HTML event-e na stranici

DOM je veoma kompleksan API koji sadrzi mnogo metoda i properties-a za interakciju sa DOM stablom(tree):
.querySelector()
.addEventListener()
.createElemnt()
.innerHTML()
.textContent()
.children()
  etc.
*/

console.log(document.documentElement);

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section'); //return node list

console.log(allSection);

document.getElementById('section--1');

const allBtns = document.getElementsByTagName('button'); //return HTML Collection
//HTML collection se azurira u realnom vremenu za razliku od node liste

console.log(allBtns);

const btnClass = document.getElementsByClassName('btn'); //return HTML Collection
console.log(btnClass);

//Creating and inserting elements

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
We use cookies for improved functionality and analitycs
<button class="btn btn-close-cookie">Got it!</button>
`;

header.prepend(message);
// header.append(message);

//da ubacimo isti DOM element na vise mjesta
header.append(message.cloneNode(true));

//delete elements
document
  .querySelector('.btn-close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

//Styles

message.style.backgroundColor = 'red';
message.style.width = '120%';

//get style properties and values
console.log(getComputedStyle(message).color);

//incres hight of element
message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//change css variables
document.documentElement.style.setProperty('--color-primary', 'orangered');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
//get absolute path of src attribute
console.log(logo.src);
console.log(logo.className);

//get custom attributes
console.log(logo.getAttribute('designer'));

//set attributes
logo.alt = 'Minimalistic logo';
logo.setAttribute('company', 'Bankist');
//get relativ path of src attribute
console.log(logo.getAttribute('src'));

//data attributes
console.log(logo.dataset.virsionNumber);

//classes
logo.classList.add('c');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
