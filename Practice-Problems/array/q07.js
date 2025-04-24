// create a number using all element of an array

function arrToNum(arr) {
  let num = 0;
  let i = 0;

  while (i < arr.length) {
    num = num * 10 + arr.at(i++);
  }

  return num;
}

const arr = [1, 2, 3];
console.log(arrToNum(arr));
