const x = [2, 4, 4, 4, 4, 44, 4, 5, 6, 6, 77]
  .filter((item) => {
    if (item % 2 === 0) return item;
  })
  .every((item) => item % 2 === 0);

console.log(x, "x");
