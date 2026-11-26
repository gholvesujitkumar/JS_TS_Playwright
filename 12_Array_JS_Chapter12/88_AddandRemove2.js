let name=["sujit","sachin","rahul"];
console.log(name.length);

name.push("rohit");
console.log(name); // ["sujit", "sachin", "rahul", "rohit"]

name.pop();
console.log(name); // ["sujit", "sachin", "rahul"]

name.splice("sachin","rahul");
console.log(name);

name.splice("sujit","sachin");
console.log(name);