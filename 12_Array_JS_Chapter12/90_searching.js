let results=["pass","fail","pass","error","fail"];

results.indexOf("fail"); //1
results.indexOf("skip"); //-1

//last index of fail- searches from the last

results.lastIndexOf("fail"); //4

//includes returns in the boolean

results.includes("error"); //true

console.log(results);




