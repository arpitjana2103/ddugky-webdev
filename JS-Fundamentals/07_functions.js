// What is a Function ?
// Function is a block of code, used to perform a specific task.
// 1. Always function will take one or many input
// 2. Alywas functin will return an output

// Q1 : Create a function to add 2 numbers.

// 1st way to create Function

// Declare & Initialize the Function
// function addNumber(num1, num2, num3) {
//   const res = num1 + num2 + num3;
//   return res;
// }

// Calling the function / Executing the function / invoking the function
// const ans = addNumber(3, 10, 10);
// console.log(ans);

// Q2 : Create a function which will take an array as input,
// and print the sum of the array.

// function sumArr(arr) {
//   let i = 0;
//   let res = 0;

//   while (i < arr.length) {
//     res += arr.at(i);
//     i++;
//   }
//   console.log(res);
//   //   return res;
// }

// sumArr([1, 2, 4]);

// 1st way to create function
console.log(addNumbers01(2, 3));

function addNumbers01(num1, num2) {
  const res = num1 + num2;
  return res;
}

console.log(addNumbers02(4, 5));

// 2nd way to create function
// [ Most Right way to create a function ]
const addNumbers02 = function (num1, num2) {
  const res = num1 + num2;
  return res;
};

// 3rd way to create function
// if(true) console.log("Hello World")

const addNumbers03 = function (num1, num2) {
  return num1 + num2;
};

const addNumbers04 = (num1, num2) => num1 + num2;

const addNumbers05 = (num1, num2) => {
  let res = num1 + num2;
  return res;
};
