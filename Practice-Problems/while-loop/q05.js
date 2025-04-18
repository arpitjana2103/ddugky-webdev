// Print the factors of a number

let pointer = 1;
let number = 12;

while (pointer <= number) {
  // Taks
  if (number % pointer == 0) {
    console.log(pointer);
  }

  // Increment
  pointer++;
}
