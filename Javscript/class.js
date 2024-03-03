


const tell = function () {
  const speed = 100;
  let x;
  this.y = 10;

  function getSpeed() {
    console.log(speed, "speed");
    console.log(this.y, "y");
    return speed;
  }

  function setX(newX) {
    console.log(newX, "newX");
    x = newX;
  }

  return "je;";
};


console.log(tell, "tell");


// x => 

// const tell1 = tell);

// // tell();()

// tell1.getSpeed();
