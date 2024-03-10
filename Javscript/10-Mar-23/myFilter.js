Array.prototype.myFilter = function (callback) {
  const array = [];
  for (let i = 0; i < this.length; i++) {
    let value = callback(this[i]);
    if (value) array.push(value);
  }
  return array;
};

const array = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8];

const y = (item) => {
  if (item % 2 === 0) return item;
};

const v = array.myFilter(y);

console.log(v);
