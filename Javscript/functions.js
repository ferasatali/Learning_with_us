

function printName(x) {
  console.log(x, "inner");

  x = JSON.parse(JSON.stringify(x));
  
  x.name = "taqi";
  x.f.a = "hey taqi";

  console.log(x, "inner after");
}

let name = {
  name: "ali",
  age: 20,
  f: {
    a: 1,
    b: 2,
  },
};

printName(name);

console.log(name, "outer");