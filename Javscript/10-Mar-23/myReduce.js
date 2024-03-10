


Array.prototype.myReduce = function(callback,extra) {
    for (let i = 0; i < this.length; i++) {
        extra = callback(extra,this[i]);
    }
    return extra
}


const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const func = (acc,curr) =>  { 
    return acc + curr
}

const c = x.myReduce(func,0);
console.log(c,'c')
