'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map, mapEvent;
/*
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(`its your position`, position, 'parul');
    console.log(position.coords.longitude, position.coords.latitude);
    // const longitude = position.coords.longitude;
    // const latitude = position.coords.latitude;

    const { longitude } = position.coords;
    const { latitude } = position.coords;

    const coords = [latitude, longitude];

    console.log('coords: ', coords);
    map = L.map('map').setView(coords, 13);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  },
  function () {
    alert('could not get your position');
  }
);*/

navigator.geolocation.getCurrentPosition(function (position) {
  console.log(`its your position`, position, 'parul');
  console.log(position.coords.longitude, position.coords.latitude);
  // const longitude = position.coords.longitude;
  // const latitude = position.coords.latitude;

  const { longitude } = position.coords;
  const { latitude } = position.coords;

  const coords = [latitude, longitude];

  console.log('coords: ', coords);
  map = L.map('map').setView(coords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  map.on(
    'click',
    function (mapE) {
      mapEvent = mapE;
      form.classList.remove('hidden');
      inputDistance.focus();
    },
    function () {
      alert("couldn't get your position ");
    }
  );

  form.addEventListener('submit', function (e) {
    console.log('form submit called');
    e.preventDefault();

    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnLink: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('workout')
      .openPopup();
  });
});
