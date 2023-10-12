//first
let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(Math.round(Math.random() * 20));
}
console.log(arr);

function bubbleSort(arr, typeSort) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    if (typeSort == "asc") {
        return arr;
    }
    if (typeSort == "desc") {
        return arr.reverse()
    }

}

console.log(bubbleSort(arr, "desc"));

//second
function squareOdd(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            res += arr[i] ** 2;
        }
    }
    console.log(res);
}

squareOdd(arr);

let result = arr.filter(function (item) {
    return item % 2 != 0
}).reduce(function (sum, item) {
    return sum += item ** 2
}, 0);


console.log(result);
