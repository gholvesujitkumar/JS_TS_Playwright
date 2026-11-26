let arr=[1,2,3,4,5];
let sliced=arr.slice(1,4);
console.log(sliced); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5]

console.log(arr.slice(2)); // [3, 4, 5]

console.log(arr.slice(-2)); // [4, 5]

console.log(arr.slice(-4,-1)); // [2, 3, 4]

console.log(arr.slice(-3,-1)); // [2, 3]

console.log(arr.slice(-3,-5)); // [3, 4]



