



const x =[1, 2, 3, 4, 5].reduce((acc, cur) => {   
    return { ...acc, [cur]: cur};

}, { hello:'a' }) 

console.log(x); 




const obj = {
    a: 1,
    b: 2,
    c: 3
}

obj['c'] = 4;
console.log(obj);


