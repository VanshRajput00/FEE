function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function primeFinder(num1, num2) {
    for (let i = num1; i <= num2; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}
let num1 = 1;
let num2 = 10;
primeFinder(num1, num2);

function array1(arr) {
    for (let i = arr[0]; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}