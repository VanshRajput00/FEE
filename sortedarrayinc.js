function array1(arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}

let arr = [9, 2, 5, 1, 8, 6, 3, 7, 4];
array1(arr);