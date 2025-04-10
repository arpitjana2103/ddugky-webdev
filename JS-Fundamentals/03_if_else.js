// Flow Control
// 1. If-Else ( yaa to eee or yaa to oh)
// 2. Loops

/*
var age = 17;
var canVote = age >= 18;

if (canVote) {
  console.log("As your age is ", age);
  console.log("Yes, You can vote");
} else {
  console.log("As your age is ", age);
  console.log("No You can't vote");
}
*/

// MarkSheet
// 90 ... 100                                 Grade O - Outstanding
// 70 ... 89                                  Grade G - Good
// 50 ... 69                                  Grade A - Average
// 20 ... 49                                  Grade B - Bad
// 0 ... 19                                   Grade F - Fail

var marks = 15;
var grade;

// 90 ... 100
var conditionO = marks >= 90;

// 70 ... 89
var conditionG = marks >= 70 && marks < 90;

// 50 ... 69
var conditionA = marks >= 50 && marks < 70;

// 20 ... 49
var conditionB = marks >= 20 && marks < 50;

if (conditionO) grade = "O";
else if (conditionG) grade = "G";
else if (conditionA) grade = "A";
else if (conditionB) grade = "B";
else grade = "F";

console.log("Your marks is ", marks, " Your grade is ", grade);
