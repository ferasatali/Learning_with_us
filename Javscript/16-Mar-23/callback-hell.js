

function sum(a, b, c) {
    const result = a + b;
    c(result); 
}

function mul(a, b, c) {
    const result = a * b;
    c(result)
}


sum(1, 2, (result) => {

    mul(result, 3, (result1) => {
        console.log(result1, 'result1');  // 9
    })

}
);

