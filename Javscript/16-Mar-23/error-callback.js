

function sum(a, b, c) {
  const result = a / b;
  c(result, "this is an error");
}


sum(1, 2, (result, error) => {
    if (result) {
      console.log(result, "result");
    } else {
      console.log(error, "error");
    }
  });
