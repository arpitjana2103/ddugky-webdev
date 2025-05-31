// Constructor Function
// It's just like a regular function with "this" keyword and can create multiple similar objects.

// const stu01 = {
//     id: 11111,
//     fname: "Sanjay",
//     study: function () {
//         console.log(`${this.fname} is studing`);
//     },
// };

// const stu02 = {
//     id: 22222,
//     fname: "Mahesh",
//     study: function () {
//         console.log(`${this.fname} is studing`);
//     },
// };

// const stu03 = {
//     id: 33333,
//     fname: "Shivani",
//     study: function () {
//         console.log(`${this.fname} is studing`);
//     },
// };

// const stu04 = {
//     id: 444444,
//     fname: "Ajay",
//     study: function () {
//         console.log(`${this.fname} is studing`);
//     },
// };

// Student Constructor Function

const Student = function (idValue, fNameValue) {
    // ByDefault this =  Global Obj
    const stu = {};
    stu.id = idValue;
    stu.fName = fNameValue;
    stu.study = function () {
        console.log(`${stu.fName} is studing`);
    };
    return stu;
};

const stu01 = Student(11111, "Sanjay");
const stu02 = Student(22222, "Shivani");
const stu03 = Student(33333, "Swapna");
const stu04 = Student(44444, "Mahesh");
const stu05 = Student(55555, "Ajay");

stu01.study();
stu02.study();
stu05.study();
