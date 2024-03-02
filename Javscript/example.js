let x = ["cat", "dog", "bird"];

let y = x.reverse().map((item) => item.split("").reverse().join(""));

// console.log(y, "y");

let number = [0, 0,1,1,1,1,1,1,1,1,1,0,0,0,0,0, 1, 1, 0, 0, 1, 0, 0,1,0,0,0,0,1,0,1, 1, 0, 1, 0, 1, 0, 1, 0];
console.log(number.length,"number");

let k = number.length - 1;

for (let i = 0; i < k; ) {
  if (number[i] === 0) {
    i++;
  } else if (number[i] === 1) {
    if (number[k] === 0) {
      number[k] = 1;
      number[i] = 0;
      k--;
      i++;
    }
    else {
        k--
    }
  }
}

console.log(number, "number");
