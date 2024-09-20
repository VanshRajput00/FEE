function array1(arr) {
    for (let i = arr[0]; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array1(arr);