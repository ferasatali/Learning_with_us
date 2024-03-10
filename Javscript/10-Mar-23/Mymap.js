




Array.prototype.myMap = function(callback) {
     const array = []
    for (let i = 0; i < this.length; i++) {
        array.push(callback(this[i]));
    }
    return array;
}


const array = [1,2,3,4,5,6,7,7,8,8];

const y = (item) =>  {
    return ++item;
}

const v = array.myMap(y);

console.log(v)