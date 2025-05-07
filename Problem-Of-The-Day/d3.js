// Find Pivot Index of an array
// Optimized Approach v1

const getPivotIndex = function (arr) {
    const lsSum = [];

    let ls = 0;
    let i = 0;

    while (i < arr.length) {
        lsSum.push(ls);
        ls += arr[i];

        i++;
    }

    let j = arr.length - 1;
    let rs = 0;

    while (j >= 0) {
        if (rs === ls[j]) return j;
        rs += arr[j];

        j--;
    }

    return -1;
};
