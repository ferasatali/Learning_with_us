

function getUserName(x,y,z) {
  return "John" + this.firstName + "Doe" + x + ' ' + y + ' ' + z;
}

const x = {
firstName:  ' ferasat ',
}

this.firstName = ' John '

const user = getUserName.call(x,'hello','world','!');


console.log(user); 

let x1 =  {
    a:'het',
    b:'hello'
}
let x2 = x1;
x2.a = 'bye';
x2 = {}
console.log(x2);
console.log(x1);
