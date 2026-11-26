
//copying an array using slice method

let orginalArray=[1,2,3,4,5];

let copiedArray=orginalArray.slice();

console.log(orginalArray); // [ 1, 2, 3, 4, 5 ]

console.log(copiedArray); // [ 1, 2, 3, 4, 5 ]

orginalArray.push(6);
console.log(orginalArray); // [ 1, 2, 3, 4, 5, 6 ]
console.log(copiedArray); // [ 1, 2, 3, 4, 5 ]
