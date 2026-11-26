let status=["passed","failed","skipped"];
console.log(status.length); // 3
console.log(status[0]); // "passed"
console.log(status[1]); // "failed"
console.log(status[2]); // "skipped"

console.log(status.at(-1)); // "skipped"
console.log(status.at(-2)); // "failed"
console.log(status.at(-3)); // "passed"

status[3]="in progress";
console.log(status); // 4

//modify the status
status[4]="not passed";
console.log(status); // 5

