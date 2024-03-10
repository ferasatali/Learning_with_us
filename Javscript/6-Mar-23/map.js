// odd * 3 even *2


const y = (item) => {
  return item % 2 ===  0 ? item * 2 : item *3
}


const x = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(y);



console.log(x, "x");


