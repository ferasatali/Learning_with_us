

console.log("Learn With Us");


function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  function Student(name, age, grade) {
    Person.call(this, name, age);
    this.grade = grade;
  }
  
  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;
  
  Student.prototype.study = function () {
    console.log(`${this.name} is studying.`);
  };
  
  const person1 = new Person("JavaScript", 30);
  const student1 = new Student("Coder", 20, "A");
  
  person1.sayHello();
  student1.sayHello();
  student1.study();
  