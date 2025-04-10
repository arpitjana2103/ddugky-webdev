// 1. Count and Print All Even Numbers Between 1 to 50
// Solution

let num = 1;
let max = 20;

let count = 0;

while (num <= max) {
  if (num % 2 == 0) {
    console.log(num);
    count++;
  }
  num++;
}

console.log("Count : ", count);
