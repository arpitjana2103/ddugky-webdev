const nums02 = [4, 5, 6];

const nums01 = [1, 2, 3, ...nums02];

console.log(nums01);

// num01 = [1, 2, 3, 4, 5, 6]

// nums02.forEach((num) => nums01.push(num));

// let i = 0;
// while (i < nums02.length) {
//     nums01.push(nums02[i]);
//     i++;
// }

// REST
// ...restNums  =        3, 4, 5, 6
//    restNums  =       [3, 4, 5, 6]

// SPREAD
// ...nums = [4, 5, 6] == 4, 5, 6
