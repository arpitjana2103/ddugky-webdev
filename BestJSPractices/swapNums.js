let a = 5;
let b = 6;
console.log(a, b);

// Swaping
const temp = a;
a = b;
b = temp;

console.log(a, b);

// Swap with Arr Destructuring
let c = 10;
let d = 11;
[d, c] = [c, d];
// [d, c] = [10, 11]
