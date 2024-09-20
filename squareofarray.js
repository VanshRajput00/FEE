function arrayOperators(arr, operation) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(operation(arr[i]));
    }
    return newArr;
}

function square(number) {
    return number * number;
}

let array = [1, 2, 3, 4, 5];
console.log(arrayOperators(array, square));