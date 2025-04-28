// Shift array left by one position
// Write a program to shift all elements one position to the left using a while loop.

// iarr = [1, 2, 3, 4];
// oarr = [2, 3, 4, null];

// function shiftArr(){ };

const shiftArr = function (arr) {
  let i = 1;
  while (i < arr.length) {
    arr[i - 1] = arr[i];
    if (i === arr.length - 1) arr[i] = null;
    i++;
  }

  return arr;
};

const shiftedArr = shiftArr([1, 2, 3, 4, 5]);
console.log(shiftedArr);
