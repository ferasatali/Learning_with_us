function getFactorialFunction() {
    const obj = {};

    return function factorial(number) {
       console.log(obj, 'obj');
        if (obj[number]) {
            return obj[number];
        }

        if (number < 2) {
            return number;
        }
        const result = number * factorial(number - 1);
        obj[number] = result;
        return result;
    }
}


let factorial = getFactorialFunction();