const arr = [1, 2, 3];

// let sum = 0;
// let i = 0;

// while (i < arr.length) {
//     sum += arr.at(i);
//     i++;
// }

const sum = arr.reduce(function (acc, ele) {
    return acc + ele;
}, 0);
