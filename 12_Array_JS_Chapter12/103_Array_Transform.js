console.log([70,80,85,90].every(s => s>=70)); // true

// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
console.log([70,60,50,90].every(s => s>=70)); // false

//some -at least one element should satisfy the condition

console.log([70,80,85,90].some(s => s>=70)); // true

console.log([10,20,30,30].some(s => s>=70)); // false

