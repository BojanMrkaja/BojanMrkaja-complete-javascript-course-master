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
  countriesContainer.style.opacity = '1';
};

///////////////////////////////////////
const getCountryAndNeighbour = function (country) {
  //AJAX call 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);
    //get neighbour

    const neighbours = data.borders;

    if (neighbours.length === 0) return;

    neighbours.forEach(neighbour => {
      //AJAX call 2
      const request2 = new XMLHttpRequest();
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
      request2.send();

      request2.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data, 'neighbour');
      });
    });
  });
};

getCountryAndNeighbour('serbia');
