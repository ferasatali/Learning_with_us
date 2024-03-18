const sum = (a, b) => {
  const promise = new Promise((resolve, reject) => {
    resolve(a + b);
  });
  return promise;
};

sum(1, 2)
  .then((result) => {
    console.log(result, "result");
  })
  .catch((err) => {
    console.log(err, "err");
  })
  .finally(() => {
    console.log("finally");
  });
