const arr = ["a", "b", "c", "a", "b"];

let obj01 = {};

let i = 0;
while (i < arr.length) {
    const key = arr[i];
    const val = null;

    obj01[key] = val;
    i++;
}

let obj02 = Object.keys(
    arr.reduce(function (acc, ele) {
        acc[ele] = null;
        return acc;
    }, {})
);

console.log(obj01, obj02);
