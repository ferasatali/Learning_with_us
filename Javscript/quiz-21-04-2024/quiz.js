// Closure

// 1. What is closure in javascript?
// Find kia return krega?

// function divide(a,b){
//     // console.log(a)
//     return new Promise((resolve,reject)=>{
//        const x = a.every((val) => b/val !== Infinity)
//        if(x){
//            resolve("success")
//        }
//        else{
//            reject("failure")
//        }
// })}

// divide([2,3,4,5,6,10,8,9,1],2)
//  .then((result) => console.log(result))
//  .catch((err) => console.log(err,'err'))

// function find() {
//   return (a) =>  a.some((val) => val.middlename === "wasif");
// }

let array = [
  { firstname: "ali", middlename: "wasif", lastname: "khan" },

  {
    firstname: "ali",
    middlename: "haider",
    lastname: "khan",
  },
  {
    firstname: "ali",
    middlename: "khan",
    lastname: "khan",
  },
];

// let y = find();
// let bool = y(array);

// if (bool) {
//   console.log("found");
// } else {
//   console.log("not found");
// }

const foundname = array.filter((val) => val.middlename === "wasif");
// const foundname = 123454545

// console.log(foundname.length); // 5, 'wasif' 5, 

// array 

if(foundname.length) 
    console.log('found')
else 
console.log('not found')


// Array.prototype.forEach1 = function(callback) {
    


// }



// const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]










// x.forEach1((item, index,array) =>  {
//     console.log(item +' d ' , index , ' ', array);
// });








parame = [1233,3,,4,4,0] , 8

