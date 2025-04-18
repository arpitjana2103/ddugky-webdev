// Reverse a number
let pointer = 15478;
// 87451
let res = 0;

while (pointer > 0) {
  // TASK
  let digit = pointer % 10;
  res = res * 10 + digit;

  // POINTER UPDATE
  pointer = Math.trunc(pointer / 10);
}

console.log(res);
