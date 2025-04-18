// Print the Digits of a Given Number : 94560

// Initial Stage
let pointer = 94560;

while (pointer > 0) {
  // TASK
  let digit = pointer % 10;
  console.log(digit);

  // POINTER UPDATE
  pointer = Math.trunc(pointer / 10);
}
