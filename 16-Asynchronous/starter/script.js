'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const flag = data.flags.png;
  const name = data.name.common;
  const region = data.region;
  const population = (+data.population / 1000000).toFixed(1);
  const lang = Object.values(data.languages)[0];
  const currency = Object.values(data.currencies)[0].name;
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${name}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${
              population > 1 ? population + 'M' : population + 'K'
            }</p>
            <p class="country__row"><span>🗣️</span>${lang}</p>
            <p class="country__row"><span>💰</span>${currency}</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
};

///////////////////////////////////////
// const getCountryAndNeighbour = function (country) {
//   //AJAX call 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();
//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     //get neighbour
//
//     const neighbours = data.borders;
//
//     if (neighbours.length === 0) return;
//
//     neighbours.forEach(neighbour => {
//       //AJAX call 2
//       const request2 = new XMLHttpRequest();
//       request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
//       request2.send();
//
//       request2.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         renderCountry(data, 'neighbour');
//       });
//     });
//   });
// };
//
// getCountryAndNeighbour('serbia');

//FETCH API
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = '1';
};

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      console.log(response);

      if (!response.ok)
        throw new Error(`Country not found (${response.status})`);

      return response.json();
    })
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0], 'neighbour');
    })
    .catch(err => {
      console.error(`${err} try again letter`);
      renderError(`Something went wrong ${err.message}.Try again!!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
};
btn.addEventListener('click', function () {
  getCountryData('serbia');
});

//BUILD SIMPLE PROMISE
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Waiting for lottery...');
  setTimeout(() => {
    if (Math.random() > 0.5) {
      resolve('You win');
    } else {
      reject(new Error('You lose'));
    }
  }, 3000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      position => resolve(position),
      err => reject(err)
    );
  });
};

getPosition()
  .then(res => console.log(res))
  .catch(err => console.error(err));

//ASYNC AWAIT
const whereAmI = async function (country) {
  countriesContainer.style.opacity = '1';
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!res.ok) throw new Error(`Country not found(${res.status})`);
    const [data] = await res.json();
    renderCountry(data);
  } catch (err) {
    console.error(err);
    renderError(`Something went wrong ${err.message}Try again!`);
  }
};

whereAmI('sss');
