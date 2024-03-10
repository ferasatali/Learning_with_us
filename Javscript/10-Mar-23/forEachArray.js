


Array.prototype.forEach1 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        // console.log(this[i]);
        callback(this[i],i,this);
    }
}


const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

x.forEach1((item, index,array) =>  {
    console.log(item +' d ' , index , ' ', array);
});
