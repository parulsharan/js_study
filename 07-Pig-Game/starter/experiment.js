const luftansa = {
  airline: 'Air India',
  iataCode: 'AI',
  bookings: [],

  book(flightNum, name) {
    this.bookings.push({
      flight_key: this.iataCode + flightNum,
      name_key: name,
    });
  },
  checkBookings() {
    return this.bookings.length;
  },
};
console.log('current booking: ', luftansa.checkBookings());
// console.log('1. bookings: ', luftansa.bookings);
luftansa.book(101, 'Kamal Mann');
luftansa.book(101, 'Parul Mann');
console.log('2. current booking: ', luftansa.checkBookings());
// console.log('2. after kamal and parul bookings: ', luftansa.bookings);

luftansa.book(201, 'Sanket Doshi');
// console.log('3. after Sanket bookings: ', luftansa.bookings);
