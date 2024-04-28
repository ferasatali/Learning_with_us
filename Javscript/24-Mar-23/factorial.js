function getFactorialFunction() {
  const obj = {};

  return function factorial(number) {
    console.log(obj, "obj");
    if (obj[number]) {
      return obj[number];
    }

    if (number < 2) {
      return number;
    }
    const result = number * factorial(number - 1);
    obj[number] = result;
    return result;
  };
}

let factorial = getFactorialFunction();

const obj1 = {};

const result = (num) => {
  if (obj1[num]) return obj1[num];

  if (num > 2) {
    fic = num * result(num - 1);
    obj1[num] = fic;
    return fic;
  } else {
    return num;
  }
};

console.log(result(9));
console.log(result(6));

console.log(obj1, "obj1");