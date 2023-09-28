
console.log( " Learn with us ")

const person = {
    firstName: "learn",
    lastName: "with us ",
  };
  function greet(greeting) {
    console.log(`${greeting}, ${this.firstName} ${this.lastName}`);
  }
  
  const greetCoder = greet.bind(person, "Hey Coder");
  greetCoder(); 
  
  const greetJavascript = greet.bind({ firstName: "javscript", lastName: "example" }, "Hi");
  greetJavascript(); 
  
  console.log('test')
  