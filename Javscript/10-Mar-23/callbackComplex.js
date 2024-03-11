

function x1(callback) { // x2
    console.log('x1');
    callback(x3); //x2(x3)
    
}

function x2(callback) {
    console.log('x2');
    callback(); //x3()
}

function x3(callback) {
    console.log('x3');
}

function print(callback) {   // x1
    callback(x2);   // x1(x2)
}


print(x1);  


// line by line 
// =>  taqi
 // x2, x1, x3
 // =>  wasif
 //  x2
 // x2,x1,x3

