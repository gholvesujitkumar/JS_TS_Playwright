let statusCode=404;

let category=statusCode< 300 ?"sudcess" : statusCode<400 ? "redirect" : statusCode<500 ? "client error" : "server error";
console.log(`The status code ${statusCode} is ${category}`); //The status code 404 is client error