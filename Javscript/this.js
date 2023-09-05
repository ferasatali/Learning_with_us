var LearningWithUs = "LearningWithUs";

console.log(LearningWithUs);


const person = {
  firstName: "LEARN",
  lastName: "with _ us",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());

// console.log(this === window); // output => true

// function logThis() {
//   console.log(this === window);
// }

// logThis(); // output => true
