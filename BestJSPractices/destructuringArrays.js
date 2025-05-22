// const arr = ["Apple", "Banana", "Orange"];

// const fruit01 = arr[0];
// const fruit02 = arr[1];
// const fruit03 = arr[2];

// Rest Operator

// const fruits = ["Apple", "Banana", "Orange", "Cherry"];

// fevFruit = "Apple"
// notFevFruits = ["Banana", "Orange", "Cherry"]

// const fevFruit = fruits.at(0);
// const notFevFruits = fruits.slice(1, fruits.length);

const [fevFruit, ...notFevFruits] = ["Apple", "Banana", "Orange", "Cherry"];
//     fevFruit, ...notFevFruits =   "Apple", "Banana", "Orange", "Cherry"
//              ...notFevFruits =             "Banana", "Orange", "Cherry"
