let testResult=[10, "hello", true, null, undefined, {name:"John"}, [1,2,3]];
console.log(testResult.length); // 7
console.log(testResult[0]); // 10
console.log(testResult[1]); // hello
console.log(testResult[2]); // true
console.log(testResult[3]); // null
console.log(testResult[4]); // undefined
console.log(testResult[5]); // { name: 'John' }
console.log(testResult[6]); // [ 1, 2, 3 ]

console.log(testResult.at(-1)); // [ 1, 2, 3 ]
console.log(testResult.at(-2)); // { name: 'John' }
console.log(testResult.at(-3)); // [ 1, 2, 3 ]

console.log(testResult.at(-1)); // [ 1, 2, 3 ]
console.log(testResult.at(-4)); // null