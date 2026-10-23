// Rule of thumb: Always use strict comparision operator( === ) 
// instead of lose comparision operator( == ) to avoid confusion and bugs in the code.

// == is the lose comparision operator which only checks the value of the variable and not the type of the variable.
//=== is the strict comparision operator which checks both the value and type of the variable.

console.log(5=="5");  //true
console.log(5==="5"); //false
console.log(5!=5);  //false
console.log(5!==5); //false
console.log(""==0); //true
console.log(""===0);//false


console.log(""=="0") //false
console.log(""==="0") //false
console.log(""===0) //false
