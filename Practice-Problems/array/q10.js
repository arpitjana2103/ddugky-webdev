// Swap first and last elements
// Reverse the array

// Hint : Use a while loop to swap the first and last elements of an array.

// [1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1]

// [1, 2, 3, 4, 5, 6]
// [6, 5, 4, 3, 2, 1]

function reverseArr01(arr) {
    let i = 0;
    while (i < Math.trunc(arr.length / 2)) {
        const lIndex = i;
        // 0, 1, 2
        const rIndex = arr.length - 1 - i;
        // 5, 4, 3

        const temp = arr[lIndex];
        arr[lIndex] = arr[rIndex];
        arr[rIndex] = temp;
        i++;
    }

    return arr;
}

function reverseArr02(arr) {
    let lIndex = 0;
    let rIndex = arr.length - 1;

    while (lIndex < rIndex) {
        // lIndex = 0, 1, 2
        // rIndex = 5, 4, 3

        const temp = arr[lIndex];
        arr[lIndex] = arr[rIndex];
        arr[rIndex] = temp;

        lIndex++;
        rIndex--;
    }

    return arr;
}
