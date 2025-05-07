// 1. Array.prototype.at();
// 2. Array.prototype.push();
// 3. Array.prototype.pop();
// 4. Array.prototype.concat();
// 5. Array.prototype.fill();
// 6. Array.prototype.indexOf();
// 7. Array.prototype.shift();
// 8. Array.prototype.forEach();
// 9. Array.prototype.slice();
// 10. Array.prototype.forEach();
// 11. Array.prototype.find();
// 12. Array.prototype.findIndex();
// 13. Array.prototype.findLast();
// 14. Array.prototype.findLastIndex();
// 15. Array.prototype.sort();            ****
// 16. Array.prototype.filter();
// 17. Array.prototype.map();             ****
// 18. Array.prototype.reduce();          ****

/*
// Array.prototype.sort();
// Assending Order : ele1 < ele2
// Decenting Order : ele1 > ele2

// -1 : what I want
// +1 : what I don't want
//  0 : We don't care

// -1 indicates that a should come before b.
// +1 indicates that a should come after b.
// 0 indicates that a and b are considered equal.

// -1 ele1 > ele2
// +1 ele1 < ele2
//  0 ele1 == ele2

const arr = [1, 1, 1, 1];

arr.sort(function (ele1, ele2) {
    if (ele1 < ele2) return -1;
    if (ele1 > ele2) return 1;
    if (ele1 === ele2) return 0;
});

console.log(arr);
*/

const arr = [1, 2, 4, 5, 3, 6, 7, 11, 15, 12];
// evenArr = [2, 4, 6, 12]
// oddArr = [1, 5, 3, 7, 11, 15]
// evenIndexArr = []
// oddIndexArr = []

const eArr = [];
const oArr = [];

let i = 0;
while (i < arr.length) {
    if (arr.at(i) % 2 === 0) eArr.push(arr.at(i));
    if (arr.at(i) % 2 === 1) oArr.push(arr.at(i));
    i++;
}

const evenArr = arr.filter(function (ele, index) {
    return ele % 2 === 0;
});

const oddArr = arr.filter(function (ele, index) {
    return ele % 2 === 1;
});

const evenIndexArr = arr.filter(function (ele, index) {
    return index % 2 === 0;
});

const oddIndexArr = arr.filter(function (ele, index) {
    return index % 2 === 1;
});
