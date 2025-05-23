let a = 4;
let b = 2;
let c = 7;

const res = a++ - b + --c;
console.log(res);

// -- (left)  => 2
// ++ (right) => 3
// +          => 6A ( l 2 r )
// -          => 6B ( l 2 r )

/*
a++ - b + --c
4 - b + --c
4 - 2 + 6
+4 -2 +6
+8
*/
