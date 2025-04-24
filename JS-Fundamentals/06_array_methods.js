/*
let arr = [1, 5, 9];

///////////////////////////////////////////
////////////////////// Array.prototype.at();

// console.log(arr[1]); // 5
// console.log(arr.at(1)); // 5

///////////////////////////////////////////
/////////////////// Array.prototype.push();

arr.push(10);
arr.push(12);

// console.log(arr);

///////////////////////////////////////////
//////////////////// Array.prototype.pop();

console.log(arr); // [1,5,9,10,12]
// const poppedEle = arr.pop();
console.log(poppedEle); // 12

// console.log(arr); // [1,5,9,10]

///////////////////////////////////////////////
///////////////////// Array.prototype.concat();

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);


///////////////////////////////////////////////
//////////////////////// Array.prototype.fill();

const arr = new Array(10);
arr.fill("DDUGKY");

let i = 0;
while (i < arr.length) {
  console.log(arr.at(i));
  i++;
}


///////////////////////////////////////////////
//////////////////////// Array.prototype.indexOf();

let arr = [4, 8, 10, 14, 12];
console.log(arr.indexOf(10));
console.log(arr.includes(12));


///////////////////////////////////////////////
//////////////////////// Array.prototype.shift();
let arr = [1, 2, 3];
arr.shift();

console.log(arr);


/////////////////////////////////////////////////
//////////////////////// Array.prototype.forEach();

let arr = [5, 8, 25, 10];

// let i = 0;
// while (i < arr.length) {
//   let num = arr.at(i);
//   console.log(num);
//   i++;
// }

// arr.forEach(function (num) {
//   console.log(num);
// });

/////////////////////////////////////////////////
//////////////////////// Array.prototype.slice();

const animals = ["ant", "bison", "camel", "duck", "elephant"];
const newAnimals = animals.slice();
// const newAnimals = animals.slice(0, 5);
// start = 0
// end = arr.length;
console.log(newAnimals);
*/

// splice(start);
// splice(start, deleteCount);
// splice(start, deleteCount, item1);
// splice(start, deleteCount, item1, item2);

const months = ["Jan", "March", "April", "June"];
const deleted = months.splice(1, 2, "DDUGKY", "BHOPAL", "TRAINEING");

console.log(deleted);
console.log(months);
