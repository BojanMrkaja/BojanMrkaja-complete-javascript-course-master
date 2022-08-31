'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const addHiddenClass = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let index = 0; index < btnsOpenModal.length; index++) {
  btnsOpenModal[index].addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

btnCloseModal.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    addHiddenClass();
  }
});
