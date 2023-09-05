
var LearningWithUs = "LearningWithUs"

console.log(LearningWithUs);



// Event Handling With Closures
// function createButton(elementId) {
//   const button = document.getElementById(elementId);

//   button.addEventListener("click", function () {
//     console.log(`Button with ID ${elementId} clicked.`);
//   });
// } 
// createButton("myButton");

function createPerson(name) {
  let privateName = name;

  return {
    getName: function () {
      return privateName;
    },
    setName: function (newName) {
      privateName = newName;
    },
  };
}

const person = createPerson("Learn");
console.log(person.getName()); 
person.setName("With Us");
console.log(person.getName()); 









function createCounter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  function decrement() {
    count--;
    console.log(count);
  }

  return {
    increment,
    decrement,
  };
}

const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

function outer() {
    let outerVariable = "I am from the outer function";
  
    function inner() {
      console.log(outerVariable);
    }
  
    return inner;
  }
  
  const closure = outer();
  closure();