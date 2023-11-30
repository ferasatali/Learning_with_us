let x = ["cat", "dog", "bird"];

let y = x.reverse().map(item => item.split('').reverse().join(''));

console.log(y, 'y');
x = [];

console.log(x, 'x');

let u = 'abc';
console.log(u.split(''));