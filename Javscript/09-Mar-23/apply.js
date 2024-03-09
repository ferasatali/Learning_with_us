

function getUserName(x,y,z) {
  return "John" + this.firstName + "Doe" + x + ' ' + y + ' ' + z;
}

const x  = {
    firstName:  ' ferasat ',
}


let user = getUserName.apply(x,['hello','world','!']);

console.log(user);


function get() {
    return this.number * 12;
}

