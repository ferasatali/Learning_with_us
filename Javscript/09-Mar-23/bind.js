


function getUserName(x,y,z) {
  return "John" + this.firstName + "Doe" + x + ' ' + y + ' ' + z;
}

const x  = {
    firstName:  ' ferasat ',
}


const user = getUserName.bind(x,'hello','world','!');


console.log(user())