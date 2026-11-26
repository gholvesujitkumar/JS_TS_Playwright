let [a,b,...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [ 30, 40, 50 ]

let [ , ,third] = [10, 20, 30, 40, 50];
console.log(third); // 30
console.log(a); // 10