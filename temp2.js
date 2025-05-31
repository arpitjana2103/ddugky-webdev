const Student = function (idValue, fNameValue) {
    // {}
    this.id = idValue;
    this.fName = fNameValue;
};

Student.prototype.study = function () {
    console.log(`${this.fName} is studing`);
};

Student.prototype.sleep = function () {
    console.log(`${this.fName} is sleeping`);
};

const stu01 = new Student(11111, "Sanjay");
const stu02 = new Student(11111, "Mahest");

console.log(stu01.__proto__ === stu02.__proto__);
console.log(Student.prototype === stu01.__proto__);
console.log(Student.prototype.isPrototypeOf(stu01));
console.log(Student.prototype.isPrototypeOf(Student));

// [true] Student.prototype is the prototype of stu01,02,03
// [false] Student.prototype is the prototype of Student
// [true] Student.prototype is the property of Student

// 1. create {} in the Student() Constructor function
// 2. Link Student()'s this to {}
// 3. Link Student.prototype's this to {}
// 4. return {};
