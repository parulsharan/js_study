const odd = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 !== 0) {
      // console.log(i);
      result.push(i);
    }
  }

  return result;
};

const oddWithCB = function (n, callback) {
  let result = [];
  for (let index = 0; index < n; index++) {
    if (index % 2 !== 0) {
      result.push(index);
    }
  }
  const task = function () {
    callback(null, result);
  };
  setTimeout(task, 3000);
};

module.exports = { odd, oddWithCB };
