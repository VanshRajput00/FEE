function array1(arr) {
    arr.sort((a, b) => b - a);
    for (let i = arr[0]; i > 0; i--) {

        console.log(i);

    }
}

let arr = [9, 2, 5, 1, 8, 6, 3, 7, 4];
array1(arr);