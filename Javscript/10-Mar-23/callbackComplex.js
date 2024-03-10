function x1(callback) {
    console.log('x1');
    callback(x3);
}

function x2(callback) {
    console.log('x2');
    callback();
}

function x3(callback) {
    console.log('x3');
}



function print(callback) {  
    callback(x2);   
}


print(x1);  