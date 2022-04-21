const callbackFn = (firstName, callback) => {
  setTimeout(() => {
    if (!firstName) return callback(new Error("no first name passed in!"));

    const fullName = `${firstName} Mann`;
    return callback(fullName);
  }, 2000);
};

// const promisedFunc = function (firstName) {
//     const cb = function (resolve, reject) {
//       setTimeout(() => {
//         if (!firstName) reject(new Error("no first name passed in!"));

//         const fullName = `${firstName} Doe`;

//         resolve(fullName);
//       }, 2000);
//     };
//     return new Promise(cb);
//   };

const promiseFn = function (firstName) {
  return new Promise((resolve, reject) => {
    resolve(`${firstName} MANN`);
  });
};

promiseFn("Kamal").then() {
// resolve
}.catch() {
// reject
}

const promisedAnonymusFunc = function (firstName) {
  return new Promise((resolve, reject) => {
    // Do work here
  });
};

callbackFn("Kamal", console.log);
console.log("should be running last.");
// callbackFn(null, console.log);

// ===========================
