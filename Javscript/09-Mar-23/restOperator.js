

// ... params is called rest operator


function add(a,b,x, ...args) {

    console.log(a,'' ,b,'',x,'',args);
}



console.log(add(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15)); // 120

const x = [1,2,3,4,5,5,6]
const y =  [...x , 7, 8, 9, 10,11,12,13,14,15]

console.log(x.push(23));

console.log(y)



// ...x  spead operator

console.log(y); // 21