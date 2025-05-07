// Find Pivot Index of an array
// BruteForce Approach
const getSum = function (startI, endI, arr) {
    let i = startI;
    let sum = 0;
    while (i <= endI) {
        sum += arr[i];
        i++;
    }
    return sum;
};

const getPivotIndex = function (arr) {
    let i = 0;
    let n = arr.length;
    let pvIndex = -1;

    while (i <= n - 1) {
        const lSum = getSum(0, i - 1, arr);
        const rSum = getSum(i + 1, n - 1, arr);
        if (lSum === rSum) {
            pvIndex = i;
            break;
        }
        i++;
    }

    return pvIndex;
};

// [1,7,3,6,5,6]   = 3
// [1,2,3]         = -1
// [2,1,-1]        = 0
// [-1,-1,0,1,1,0] = 5

// getSum TC : O(n), SC : O(1)
// getPivotIndex TC : O(n2), SC : O(1)
