let score=new Array(4);
score[0]=85;
score[1]=90;
console.log(score.length);
console.log(score[0]); // 85
console.log(score[1]); // 90
console.log(score[2]); // undefined
console.log(score[3]); // undefined

let scores2=new Array(1,2,3,4,5);
console.log(scores2.length);
console.log(scores2[0]); // 1
console.log(scores2[1]); // 2
console.log(scores2[2]); // 3
console.log(scores2[3]); // 4
console.log(scores2[4]); // 5

console.log(scores2.at(-1)); // 5
console.log(scores2.at(0)); // 1
console.log(scores2.at(2)); // 3
console.log(scores2.at(4)); // 5


let scores3=new Array(100,200,300,400);
console.log(scores3.length);
console.log(scores3[0]); // 100
console.log(scores3[1]); // 200
console.log(scores3[2]); // 300
console.log(scores3[3]); // 400


let test=Array.of(10,20,30,40,50);
console.log(test.length);
console.log(test[0]);
console.log(test[1]);
console.log(test[2]);
console.log(test[3]);
console.log(test[4]);

let char=Array.from("sujitkumar");
console.log(char.length);
console.log(char[0]);
console.log(char[1]);
console.log(char[2]);
console.log(char[3]);
console.log(char[4]);
console.log(char[5]);
console.log(char[6]);
console.log(char[7]);
console.log(char[8]);
console.log(char[9]);
console.log(char[10]);

