/*
{
  "example.com": ["alice@example.com", "david@example.com"],
  "gmail.com": ["bob@gmail.com", "charlie@gmail.com"],
  "yahoo.com": ["eve@yahoo.com"]
}
*/

// const obj = {};

// console.log(obj["example.com"]);

// if (obj["example.com"] === undefined) {
//     obj["example.com"] = new Array();
// }

// obj["example.com"].push("alice@example.com");
// console.log(obj["example.com"]);

const nums = [10, 15, 14];
// { '9': 10, '13': 14, '14': 15 }++

// {
//   key : 5,
//   9: 10,
//   14: 15,
//   13: 14
// }

// Get Sum using while loop
let sum01 = 0;
let i = 0;
while (i < nums.length) sum01 += nums[i++];

// Get Sum using array reduce
const sum02 = nums.reduce(function (acc, num) {
    acc += num;
    return acc;
}, 0);

// Create obj using while loop
let obj01 = {};
let j = 0;
while (j < nums.length) {
    let val = nums[j];
    let key = val - 1;
    if (obj01[key] === undefined) obj01[key] = val;
    j++;
}

const emails = [
    "alice@example.com",
    "bob@gmail.com",
    "charlie@gmail.com",
    "david@example.com",
    "eve@yahoo.com",
];

// Create obj using array reduce
const obj02 = nums.reduce(function (acc, num) {
    let val = num;
    let key = val - 1;
    if (acc[key] === undefined) acc[key] = val;
    return acc;
}, {});

const getKey = (email) => email.split("@").at(1);

const res = emails.reduce(function (acc, email) {
    const key = getKey(email);
    if (acc[key] === undefined) acc[key] = new Array(email);
    else acc[key].push(email);
    return acc;
}, {});

console.log(res);
