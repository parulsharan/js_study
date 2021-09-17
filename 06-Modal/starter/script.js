'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const openmodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('.hidden');
};

const closemodal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('.hidden');
};
for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', openmodal);

btnCloseModal.addEventListener('click', closemodal);

overlay.addEventListener('click', closemodal);

document.addEventListener('keydown', function (e) {
  console.log('Key pressed is:--> ', e.key);

  if (e.key === 'escape' && !modal.classList.contains('hidden')) {
    closemodal();
  }
});
