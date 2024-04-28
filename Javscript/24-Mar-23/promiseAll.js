const promise1 = () => {
  return new Promise((resolve, reject) => {
    resolve(1 + 2);
  });
};

const promise2 = () => {
  return new Promise((resolve, reject) => {
    reject(3 * 4);
  });
};

const promiseAll = [promise1(), promise2()];

promiseAll.forEach((promise) => {
  promise
    .then((result) => {
      console.log(result,'my result'); // 3
    })
    .catch((error) => {
      console.log(error,'my error'); // 12
    });
});

Promise.all(promiseAll)
  .then((result) => {
    console.log(result,'Promise.all'); // [3, 12]
  })
  .catch((error) => {
    console.log(error,'Promise.all error'); 
  })
  .finally(() => {
    console.log("Promise.all settled");
  });
