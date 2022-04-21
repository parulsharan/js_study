'use strict';
const bookings = [
  {
    flightNum: 'AI-123',
    numPassanger: 1,
    price: 199,
  },
  'asdasda',
  true,
];

console.log('before adding aynthing: ', bookings);

const createBooking = function (flightNum, numPassanger = 1, price = 199) {
  //   const booking = {
  //     flightNum,
  //     numPassanger,
  //     price,
  //   };
  console.log('booking to be added: ', booking);
  //   bookings.push(booking);
  bookings.push({});
  console.log('all bookings: ', bookings);
};

createBooking('AI-123');
createBooking('AI-201', 45, 2000);
