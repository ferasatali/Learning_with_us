





 const bu =  new Promise((resolve, reject) => {
  const x = 11;
    if (x === 10) {
        resolve('Success  h');
    } else {
        reject('Failure');
    }
})


bu.then((message) => {
console.log('This is in the then ' + message);
}).catch((message) => {
    console.log('This is in the catch ' + message);
})




