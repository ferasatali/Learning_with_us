

var LearningWithUs = "LearningWithUs"

console.log(LearningWithUs);

const numbers = [1, 2, 3, 4, 5];

function square(num) {
  return num * num;
}

const squaredNumbers = numbers.map(square);
console.log(squaredNumbers); 




function fetchData(callback) {
    setTimeout(function() {
      const data = "learn with us";
      callback(data);
    }, 2000);
  }
  
  function processData(data) {
    console.log("Received data: " + data);
  }
  
  fetchData(processData); 

  



function calculate(x, y, callback) {
    const result = x + y;
    callback(result);
  }
  
  function displayResult(result) {
    console.log("The result is: " + result);
  }
  
  calculate(5, 3, displayResult);
  