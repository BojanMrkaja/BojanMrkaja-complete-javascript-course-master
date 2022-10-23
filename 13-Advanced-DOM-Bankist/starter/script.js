'use strict';

///////////////////////////////////////
// Modal window
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

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

//Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();

  //scrolling
  window.scrollTo(s1coords.left, s1coords.top + window.pageYOffset);

  // smooth scrolling
  window.scrollTo({
    left: s1coords.left,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});

//page navigation
// const navLinks = document.querySelectorAll('.nav__link');
//
// navLinks.forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     const section = document.querySelector(id);
//     section.scrollIntoView({behavior:'smooth'});
//   })
// })

//Event delegation
// 1.Add event listeners to common element
// 2.Determine what element originated event

const navigation = document.querySelector('.nav__links');

navigation.addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

//Tabs
const tabContainer = document.querySelector('.operations__tab-container');
const allTabs = document.querySelectorAll('.operations__tab');
tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  allTabs.forEach(tab => {
    tab.classList.remove('operations__tab--active');
  });
  clicked.classList.add('operations__tab--active');

  //change content
  const dataTab = clicked.dataset.tab;
  const operationContentActive = document.querySelector(
    `.operations__content--${dataTab}`
  );
  const operationContentAll = [
    ...document.querySelectorAll('.operations__content'),
  ];

  operationContentAll.forEach(operation =>
    operation.classList.remove('operations__content--active')
  );

  operationContentActive.classList.add('operations__content--active');
});

//Menu fade animation
const handleHoverLinks = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHoverLinks.bind(0.5));

nav.addEventListener('mouseout', handleHoverLinks.bind(1));

//Sticky navigation with the intersection observer API
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: -nav.clientHeight + 'px',
});

headerObserver.observe(header);

//Reveal sections with the intersection observer API
const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
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

// console.log(document.documentElement);

// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section'); //return node list

// console.log(allSection);

// document.getElementById('section--1');

// const allBtns = document.getElementsByTagName('button'); //return HTML Collection
// //HTML collection se azurira u realnom vremenu za razliku od node liste

// console.log(allBtns);

// const btnClass = document.getElementsByClassName('btn'); //return HTML Collection
// console.log(btnClass);

// //Creating and inserting elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = `
// We use cookies for improved functionality and analitycs
// <button class="btn btn-close-cookie">Got it!</button>
// `;

// header.prepend(message);
// // header.append(message);

// //da ubacimo isti DOM element na vise mjesta
// header.append(message.cloneNode(true));

// //delete elements
// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// //Styles

// message.style.backgroundColor = 'red';
// message.style.width = '120%';

// //get style properties and values
// console.log(getComputedStyle(message).color);

// //incres hight of element
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// //change css variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// //get absolute path of src attribute
// console.log(logo.src);
// console.log(logo.className);

// //get custom attributes
// console.log(logo.getAttribute('designer'));

// //set attributes
// logo.alt = 'Minimalistic logo';
// logo.setAttribute('company', 'Bankist');
// //get relativ path of src attribute
// console.log(logo.getAttribute('src'));

// //data attributes
// console.log(logo.dataset.virsionNumber);

// //classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//addEventListeners

// const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great');
// });

// Event bubbling
// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min)
// }
//
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
//
// document.querySelector('.nav__link').addEventListener('click', function (e){
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget)
// })
// document.querySelector('.nav__links').addEventListener('click', function (e){
//   e.preventDefault();
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget)
// })
// document.querySelector('.nav').addEventListener('click', function (e){
//   e.preventDefault();
//   e.stopPropagation();
//   this.style.backgroundColor = randomColor();
//   console.log(e.currentTarget)
// })

// //DOM traversing
// const h1 = document.querySelector('h1');
//
// //going downwards : child elements
// console.log([...h1.querySelectorAll('.highlight')]);
// console.log(h1.children); // return html collection
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
//
// //going upwards : parents
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
// //going sideways : siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
//
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
