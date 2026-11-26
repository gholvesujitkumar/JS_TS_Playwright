let a=[2,3];
let b=[4,5];

let c=a.concat(b);
console.log(c); // [ 2, 3, 4, 5 ]

let d=[...a,...b];
console.log(d); // [ 2, 3, 4, 5 ]
console.log(...a,...b); // 2 3 4 5

