let scores=[45,50,55,60,65];

let grades=scores.map(i => i >= 50 ? "pass" : "fail");

console.log(grades);

//filter

let passing= scores.filter(s => s >=50);
console.log(passing);

