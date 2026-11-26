let number=[10,1,20,2];

number.sort((a, b) => a - b); //sorting in ascending order
console.log(number); // [ 1, 10, 2, 20 ]

number.sort((a, b) => b - a); //sorting in descending order
console.log(number);