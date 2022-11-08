'use strict';

class Workout {
  date = new Date();
  id = String(Date.now()).slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //in km
    this.duration = duration; //in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    //km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const message = document.querySelector('.message');
const errorMessage = document.querySelector('.error-message');
const confirm = document.querySelector('.confirm');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');
const spinner = document.querySelector('.spin');
const trash = document.querySelector('.fa-trash');
const deleteAllWorkouts = document.querySelector('.delete-all-workouts');
const faContainer = document.querySelector('.fa');
const submitBtn = document.querySelector('.submit');
const sortWorkouts = document.querySelector('.sort');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();
    //get data from localStorage
    this._getLocalStorage();
    if (sortWorkouts.value === 'type') this._sortByType();
    this._toggleElevationField();
    submitBtn.disabled = false;
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    sortWorkouts.addEventListener('change', this._sortWorkouts.bind(this));
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    if (!this.#map) {
      message.textContent = 'Wait for workouts to load...';
      message.classList.remove('hidden');
      message.style.textTransform = 'upperCase';
    }
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your location');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;

    const cords = [latitude, longitude];
    this.#map = L.map('map').setView(cords, 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);
    if (this.#map) {
      message.classList.add('hidden');
    }
    this.#map.on('click', this._showForm.bind(this));
    this.#workouts.forEach(workout => {
      this._renderWorkoutMarker(workout);
      this._renderWorkout(workout);
    });
    spinner.classList.add('hidden');
    this._showWorkoutMessage();
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _clearInputs() {
    inputDistance.value = '';
    inputDuration.value = '';
    inputCadence.value = '';
    inputElevation.value = '';
  }

  _hideForm() {
    this._clearInputs();
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(function () {
      form.style.display = 'grid';
    }, 1000);
  }

  _toggleElevationField() {
    if (inputType.value === 'running') {
      inputCadence.closest('.form__row').classList.remove('form__row--hidden');
      inputElevation.closest('.form__row').classList.add('form__row--hidden');
    }
    if (inputType.value === 'cycling') {
      inputElevation
        .closest('.form__row')
        .classList.remove('form__row--hidden');
      inputCadence.closest('.form__row').classList.add('form__row--hidden');
    }
  }

  _newWorkout(e) {
    const workout = this._addWorkout(
      e,
      this.#mapEvent.latlng.lat,
      this.#mapEvent.latlng.lng
    );

    if (!workout) return;
    this.#workouts.push(workout);

    //add new object in workout array

    //render workout on map as marker
    this._renderWorkoutMarker(workout);
    //render workout on list
    this._renderWorkout(workout);

    //hide form + clear inputs
    this._hideForm();

    //set local storage
    this._setLocalStorage();

    location.reload();
  }

  _errorMessage(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove('hidden');
    setTimeout(function () {
      errorMessage.style.display = 'block';
    }, 1000);
    errorMessage.style.marginBottom = '10px';
    errorMessage.style.textTransform = 'upperCase';
    setTimeout(() => errorMessage.classList.add('hidden'), 4000);
  }

  _addWorkout(e, la, ln) {
    // prettier-ignore
    const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
    const allPositive = (...inputs) => inputs.every(input => input > 0);
    const allEmpty = (...inputs) => inputs.every(input => input === 0);
    e.preventDefault();
    //get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const lat = la;
    const lng = ln;
    let workout;

    //if workout is running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      if (allEmpty(distance, duration, cadence)) {
        this._errorMessage('All inputs are required');
      } else if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        this._errorMessage('All inputs must be positive numbers');
      } else {
        workout = new Running([lat, lng], distance, duration, cadence);
        return workout;
      }
    }

    //if workout is cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      if (allEmpty(distance, duration, elevation)) {
        this._errorMessage('All inputs are required');
      } else if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      ) {
        this._errorMessage('All inputs must be positive numbers');
      } else {
        workout = new Cycling([lat, lng], distance, duration, elevation);
        return workout;
      }
    }
  }

  _renderWorkoutMarker(workout) {
    const [lat, lng] = workout.coords;
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂' : '🚴‍♀'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class='workout workout--${workout.type}' data-id='${workout.id}'>
    <div class='crud'>
      <a href='#' data-id='${workout.id}' class='edit'>edit</a>
      <a href='#' data-id='${workout.id}' class='delete'>delete</a>
    </div>
      <h2 class='workout__title'>${workout.description}</h2>
      <div class='workout__details'>
        <span class='workout__icon'>${
          workout.type === 'running' ? '🏃‍♂' : '🚴‍♀'
        }️</span>
        <span class='workout__value'>${workout.distance}</span>
        <span class='workout__unit'>km</span>
      </div>
      <div class='workout__details'>
        <span class='workout__icon'>⏱</span>
        <span class='workout__value'>${workout.duration}</span>
        <span class='workout__unit'>min</span>
      </div>
    `;

    if (workout.type === 'running')
      html += `
       <div class='workout__details'>
        <span class='workout__icon'>⚡️</span>
        <span class='workout__value'>${workout.pace.toFixed(1)}</span>
        <span class='workout__unit'>min/km</span>
      </div>
      <div class='workout__details'>
        <span class='workout__icon'>🦶🏼</span>
        <span class='workout__value'>${workout.cadence}</span>
        <span class='workout__unit'>spm</span>
      </div>
    </li>
      `;

    if (workout.type === 'cycling')
      html += `
       <div class='workout__details'>
        <span class='workout__icon'>⚡️</span>
        <span class='workout__value'>${workout.speed.toFixed(1)}</span>
        <span class='workout__unit'>km/h</span>
      </div>
      <div class='workout__details'>
        <span class='workout__icon'>⛰</span>
        <span class='workout__value'>${workout.elevationGain}</span>
        <span class='workout__unit'>m</span>
      </div>
      `;
    form.insertAdjacentHTML('afterend', html);
    const deleteLink = document.querySelector('.delete');
    const editLink = document.querySelector('.edit');
    deleteLink.addEventListener('click', this.deleteWorkout.bind(this));
    editLink.addEventListener('click', this.editWorkout.bind(this));
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    if (!workoutEl) return;
    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, 13, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  _showWorkoutMessage() {
    if (this.#workouts.length === 0) {
      message.textContent =
        'No workouts! Click on map and fill the form to add new workout.';
      message.classList.remove('hidden');
      containerWorkouts.style.overflowY = 'hidden';
    }
    if (this.#workouts.length >= 4) {
      containerWorkouts.style.overflowY = 'scroll';
    }
    if (this.#workouts > 0) message.classList.add('hidden');
    if (this.#workouts.length > 1) {
      faContainer.classList.remove('hidden');
    }
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;
    this.#workouts = data;
  }

  editWorkout(e) {
    yes.setAttribute('data-workoutId', e.target.dataset.id);
    const getID = e.target.getAttribute('data-id');
    const findWorkout = this.#workouts.find(workout => workout.id === getID);
    this._showForm();
    inputType.value = findWorkout.type;
    inputDistance.value = findWorkout.distance;
    inputDuration.value = findWorkout.duration;
    findWorkout.type === 'running'
      ? (inputCadence.value = findWorkout.cadence)
      : (inputElevation.value = findWorkout.elevationGain);
    this._toggleElevationField();
    message.innerHTML = 'Are you sure you wont to edit this workout?';
    message.classList.remove('hidden');
    confirm.classList.remove('hidden');
    submitBtn.disabled = true;
    confirm.addEventListener('click', this.confirmEditWorkout.bind(this));
  }

  confirmEditWorkout(e) {
    if (e.target.dataset.confirm === 'yes') {
      const getID = yes.getAttribute('data-workoutId');
      const findWorkout = this.#workouts.find(workout => workout.id === getID);
      const findIndexWorkout = this.#workouts.findIndex(
        workout => workout.id === getID
      );
      const editedWorkout = this._addWorkout(
        e,
        findWorkout.coords[0],
        findWorkout.coords[1]
      );
      if (!editedWorkout) return;
      this.#workouts.splice(findIndexWorkout, 1, editedWorkout);
      this._setLocalStorage();
      this._getLocalStorage();
      this._clearInputs();
      location.reload();
    }
    if (e.target.dataset.confirm === 'no') {
      message.classList.add('hidden');
      confirm.classList.add('hidden');
      this._hideForm();
    }
  }

  deleteWorkout(e) {
    yes.setAttribute('data-workoutId', e.target.dataset.id);
    message.innerHTML = 'Are you sure you wont to delete this workout';
    message.classList.remove('hidden');
    confirm.classList.remove('hidden');
    confirm.addEventListener('click', this.confirmDeleteWorkout.bind(this));
  }

  confirmDeleteWorkout(e) {
    const getID = yes.getAttribute('data-workoutId');
    const findIndex = this.#workouts.findIndex(workout => workout.id === getID);
    if (e.target.dataset.confirm === 'yes') {
      this.#workouts.splice(findIndex, 1);
      this._setLocalStorage();
      this._getLocalStorage();
      location.reload();
    }
    if (e.target.dataset.confirm === 'no') {
      message.classList.add('hidden');
      confirm.classList.add('hidden');
    }
  }

  deleteAllWorkouts() {
    message.innerHTML = 'Are you sure, you want to delete all workouts??';
    message.classList.remove('hidden');
    confirm.classList.remove('hidden');
    confirm.addEventListener('click', function (ev) {
      if (ev.target.dataset.confirm === 'yes') {
        localStorage.removeItem('workouts');
        location.reload();
      }

      if (ev.target.dataset.confirm === 'no') {
        message.classList.add('hidden');
        confirm.classList.add('hidden');
      }
    });
  }

  _sortByType() {
    this.#workouts.sort(function (a, b) {
      if (a.type < b.type) return -1;
      if (a.type > b.type) return 1;
      if (a.type === b.type) {
        if (a.order > b.order) return -1;
        else return 1;
      }
    });
  }

  _sortWorkouts() {
    if (sortWorkouts.value === 'type') {
      this._sortByType();
      this._setLocalStorage();
      this._getLocalStorage();
      location.reload();
    }
    if (sortWorkouts.value === 'distance') {
      this.#workouts.sort((a, b) => a.distance - b.distance);
      this._setLocalStorage();
      this._getLocalStorage();
      location.reload();
    }
    if (sortWorkouts.value === 'duration') {
      this.#workouts.sort((a, b) => a.duration - b.duration);
      this._setLocalStorage();
      this._getLocalStorage();
      location.reload();
    }
  }
}

const app = new App();

trash.addEventListener('click', app.deleteAllWorkouts);

trash.addEventListener('mouseover', function () {
  deleteAllWorkouts.style.opacity = '1';
});
trash.addEventListener('mouseout', function () {
  deleteAllWorkouts.style.opacity = '0';
});
