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

const stu02 = new Student(22222, "Shivani");
const stu01 = new Student(11111, "Sanjay");
const stu03 = new Student(33333, "Swapna");
const stu04 = new Student(44444, "Mahesh");
const stu05 = new Student(55555, "Ajay");

console.log(stu01);
stu01.study();
stu01.sleep();

// 1. create {} in the Student() Constructor function
// 2. Link Student()'s this to {}
// 3. Link Student.prototype's this to {}
// 4. return {};
