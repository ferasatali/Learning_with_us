

this.x = 10;

console.log(this.x,"this.x");

hello();

function hello() {
    console.log("Hello World",this.x);
    return "Hello World"; 
}


var hello1 = function () {
    console.log("Hello 1",this.x);
}

hello1()

tell();

const tell = () => {
// parent this 
console.log("tell 1",this.x);

};


// hello();